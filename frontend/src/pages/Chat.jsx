import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router";
import useAuthUser from "../hooks/useAuthUser";
import { useQuery } from "@tanstack/react-query";
import { getStreamToken } from "../lib/api";
import {
  Channel,
  ChannelHeader,
  Chat,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";
import { StreamChat } from "stream-chat";
import toast from "react-hot-toast";
import ChatLoader from "../components/ChatLoader";
import CallButton from "../components/CallButton";

const STREAM_API_KEY = import.meta.env.VITE_STREAM_API_KEY;

const ChatComponent = () => {
  const { id: targetUserId } = useParams();
  const [chatClient, setChatClient] = useState(null);
  const [channel, setChannel] = useState(null);
  const [loading, setLoading] = useState(true);
  const { authUser } = useAuthUser();
  const isMounted = useRef(true);

  const { data: tokenData, isError: tokenError } = useQuery({
    queryKey: ["streamToken"],
    queryFn: getStreamToken,
    enabled: !!authUser,
  });

  useEffect(() => {
    isMounted.current = true;

    const initChat = async () => {
      if (!authUser || !tokenData?.token) {
        if (tokenError) {
          console.error("Token fetch error:", tokenError);
          toast.error("Failed to fetch chat token. Please try again.");
        }
        setLoading(false);
        return;
      }

      let client = null;
      try {
        if (!STREAM_API_KEY) {
          throw new Error("Stream API key is not set");
        }

        client = StreamChat.getInstance(STREAM_API_KEY, {
          timeout: 10000,
        });

        await client.connectUser(
          {
            id: authUser._id,
            name: authUser.fullName,
            image: authUser.profilePic,
          },
          tokenData.token
        );

        if (!client.userID) {
          throw new Error(
            "Failed to connect user: No userID set after connectUser"
          );
        }

        const channelId = [authUser._id, targetUserId].sort().join("-");
        const currChannel = client.channel("messaging", channelId, {
          members: [authUser._id, targetUserId],
        });

        let watchAttempts = 0;
        const maxAttempts = 3;
        while (watchAttempts < maxAttempts) {
          try {
            await currChannel.watch();
            break;
          } catch (watchError) {
            watchAttempts++;
            if (watchAttempts === maxAttempts) {
              throw new Error(
                `Failed to watch channel after ${maxAttempts} attempts: ${watchError.message}`
              );
            }
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait before retry
          }
        }

        if (isMounted.current) {
          setChatClient(client);
          setChannel(currChannel);
        }
      } catch (error) {
        console.error("Error initializing chat:", error.message, error.stack);
        if (isMounted.current) {
          toast.error("Could not connect to chat: " + error.message);
        }
      } finally {
        if (isMounted.current) {
          setLoading(false);
        }
      }
    };

    const timeout = setTimeout(() => {
      if (isMounted.current) initChat();
    }, 100);

    return () => {
      clearTimeout(timeout);
      isMounted.current = false;
      if (chatClient) {
        chatClient
          .disconnectUser()
          .catch((error) => console.error("Error disconnecting user:", error));
      }
    };
  }, [tokenData?.token, authUser?._id, targetUserId, tokenError]);

  const handleVideoCall = () => {
    if (channel) {
      const callUrl = `${window.location.origin}/call/${channel.id}`;
      channel.sendMessage({
        text: `I've started a video call. Join me here: ${callUrl}`,
      });
      toast.success("Video call link sent successfully!");
    }
  };

  if (loading || !chatClient || !channel) return <ChatLoader />;

  return (
    <section className="h-[93vh]">
      <Chat client={chatClient}>
        <Channel channel={channel}>
          <div className="w-full relative">
            <CallButton handleVideoCall={handleVideoCall} />
            <Window>
              <ChannelHeader />
              <MessageList />
              <MessageInput focus />
            </Window>
          </div>
          <Thread />
        </Channel>
      </Chat>
    </section>
  );
};

export default ChatComponent;
