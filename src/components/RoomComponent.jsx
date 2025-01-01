import { useEffect, useRef } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

function randomID(len) {
  const chars =
    "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP";
  let result = "";
  for (let i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

const RoomComponent = ({ roomID }) => {
  const containerRef = useRef(null);
  const hasJoinedRef = useRef(false);

  useEffect(() => {
    // If already joined, don't join again
    if (hasJoinedRef.current) {
      console.warn("Already joined the room. Skipping `joinRoom`.");
      return;
    }

    const myMeeting = async () => {
      const appID = Number(process.env.REACT_APP_APPID);
      const serverSecret = process.env.REACT_APP_SERVER_SECRET;

      if (!appID || !serverSecret || !roomID) {
        console.error("Missing App ID, Server Secret, or Room ID.");
        return;
      }

      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomID,
        randomID(5), // Generate a random user ID
        randomID(5) // Generate a random user name
      );

      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: containerRef.current,
        sharedLinks: [
          {
            name: "Personal link",
            url: `${window.location.origin}/room/${roomID}`,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall,
        },
      });

      // Mark the room as joined
      hasJoinedRef.current = true;
    };

    myMeeting();

    return () => {
      hasJoinedRef.current = false;
    };
  }, [roomID]);

  return (
    <div ref={containerRef} className="w-full h-screen">
      {/* The video call UI will render here */}
    </div>
  );
};

export default RoomComponent;
