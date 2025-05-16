// import { useQuery } from "@tanstack/react-query";
// import { getAuthUser } from "../lib/api";

// const useAuthUser = () => {
//   const authUser = useQuery({
//     queryKey: ["authUser"],
//     queryFn: getAuthUser,
//     retry: false, // auth check
//   });

//   return { isLoading: authUser.isLoading, authUser: authUser.data?.user };
// };
// export default useAuthUser;

import { useQuery } from "@tanstack/react-query";
// import axiosInstance from "../lib/api";
import { getAuthUser } from "../lib/api";

// const fetchAuthUser = async () => {
//   try {
//     const response = await axiosInstance.get("/auth/me");
//     return response.data.user || null;
//   } catch (error) {
//     return null; // Return null if the request fails (e.g., no valid JWT)
//   }
// };

const useAuthUser = () => {
  const { data: authUser, isLoading } = useQuery({
    queryKey: ["authUser"],
    queryFn: getAuthUser,
    retry: 0, // Disable retries to avoid refetching on failure
    staleTime: Infinity, // Prevent automatic refetching
    enabled: !!document.cookie.includes("jwt"), // Only fetch if JWT cookie exists
  });

  return { authUser, isLoading };
};

export default useAuthUser;
