import { LuVideo } from "react-icons/lu";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [roomId, setRoomId] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-950 relative overflow-hidden">
      {/* Background overlay with pattern */}
      <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1920x1080')] bg-cover bg-center opacity-10" />

      {/* Content container */}
      <div className="relative z-10 w-full max-w-4xl mx-4 p-8 rounded-2xl bg-white/10 backdrop-blur-lg shadow-2xl">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo/Icon placeholder */}
          <div className="w-20 h-20 rounded-full bg-yellow-300 flex items-center justify-center mb-4">
            <LuVideo className="w-12 h-12 text-blue-950" />
          </div>

          {/* Heading */}
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-2">
              Welcome to ZegoCloud
            </h1>
            <p className="text-yellow-300 text-lg md:text-xl uppercase tracking-wider font-semibold">
              Video Call App
            </p>
          </div>

          {/* Input group */}
          <div className="w-full max-w-md space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Enter room name..."
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                className="w-full px-6 py-4 rounded-xl bg-white/20 backdrop-blur-sm text-white placeholder-white/60 outline-none border-2 border-transparent focus:border-yellow-300 transition-all duration-300"
              />
            </div>

            <Link to={`room/${roomId.trim()}`} className="block w-full">
              <button
                className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-300 text-blue-950 font-bold text-lg hover:from-yellow-300 hover:to-yellow-200 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                disabled={!roomId.trim()}
              >
                Create Room
              </button>
            </Link>
          </div>

          {/* Footer text */}
          <p className="text-white/60 text-sm text-center">
            Enter a room ID to join an existing room or create a new one
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
