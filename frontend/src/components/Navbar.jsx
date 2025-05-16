// import { Link, useLocation } from "react-router";
// import useAuthUser from "../hooks/useAuthUser";
// import { BellIcon, ShipWheelIcon } from "lucide-react";
// import ThemeSelector from "./ThemeSelector";
// import useLogout from "../hooks/useLogout";
// import FriendCard from "./FriendCard";

// const Navbar = () => {
//   const { authUser } = useAuthUser();
//   const location = useLocation();
//   const isChatPage = location.pathname?.startsWith("/chat");

//   const { logoutMutation } = useLogout();

//   return (
//     <nav className="bg-base-200 border-b border-base-300 sticky top-0 z-30 h-16 flex items-center">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-end w-full">
//           {/* Logo (mobile only, or always on /chat) */}
//           {(isChatPage || true) && (
//             <Link
//               to="/"
//               className={`flex items-center gap-2.5 ${
//                 isChatPage ? "" : "lg:hidden"
//               }`}
//             >
//               <ShipWheelIcon className="size-9 text-primary" />
//               <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
//                 Streamify
//               </span>
//             </Link>
//           )}

//           <div className="flex items-center gap-3 sm:gap-4 ml-auto">
//             <Link to={"/notifications"}>
//               <button className="btn btn-ghost btn-circle">
//                 <BellIcon className="h-6 w-6 text-base-content opacity-70" />
//               </button>
//             </Link>
//           </div>

//           {/* Theme selector */}
//           <ThemeSelector />

//           {/* User dropdown */}
//           <div className="dropdown dropdown-end">
//             <div
//               tabIndex={0}
//               role="button"
//               className="btn btn-ghost btn-circle avatar"
//             >
//               <div className="w-9 rounded-full">
//                 <img
//                   src={authUser?.profilePic}
//                   alt="User Avatar"
//                   rel="noreferrer"
//                 />
//               </div>
//             </div>
//             <div
//               tabIndex={0}
//               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//             >
//               <FriendCard key={authUser?._id} friend={authUser} />
//               <div className="mt-1 card bg-base-200 hover:shadow-md transition-shadow">
//                 <div
//                   onClick={logoutMutation}
//                   className="text-center flex card-body p-2 cursor-pointer"
//                 >
//                   Logout
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { Link, useLocation } from "react-router";
import useAuthUser from "../hooks/useAuthUser";
import { BellIcon, ShipWheelIcon } from "lucide-react";
import ThemeSelector from "./ThemeSelector";
import useLogout from "../hooks/useLogout";
import FriendCard from "./FriendCard";

const Navbar = () => {
  const { authUser } = useAuthUser();
  const location = useLocation();
  const isChatPage = location.pathname?.startsWith("/chat");

  const { logoutMutation } = useLogout();

  return (
    <nav className="bg-base-200 border-b border-base-300 sticky top-0 z-30 h-16 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end w-full">
          {(isChatPage || true) && (
            <Link
              to="/"
              className={`flex items-center gap-2.5 ${
                isChatPage ? "" : "lg:hidden"
              }`}
            >
              <ShipWheelIcon className="size-9 text-primary" />
              <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
                Streamify
              </span>
            </Link>
          )}

          <div className="flex items-center gap-3 sm:gap-4 ml-auto">
            <Link to={"/notifications"}>
              <button className="btn btn-ghost btn-circle">
                <BellIcon className="h-6 w-6 text-base-content opacity-70" />
              </button>
            </Link>
          </div>

          <ThemeSelector />

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-9 rounded-full">
                <img
                  src={authUser?.profilePic}
                  alt="User Avatar"
                  rel="noreferrer"
                />
              </div>
            </div>
            <div
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <FriendCard key={authUser?._id} friend={authUser} />
              <div className="mt-1 card bg-base-200 hover:shadow-md transition-shadow">
                <div
                  onClick={() => logoutMutation()}
                  className="text-center flex card-body p-2 cursor-pointer"
                >
                  Logout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
