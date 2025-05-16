// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { logout } from "../lib/api";

// const useLogout = () => {
//   const queryClient = useQueryClient();

//   const {
//     mutate: logoutMutation,
//     isPending,
//     error,
//   } = useMutation({
//     mutationFn: logout,
//     // onSuccess: () => {
//     //   queryClient.invalidateQueries({ queryKey: ["authUser"] });
//     //   window.location.href = "/login"; // hard redirect after logout
//     // },
//     onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authUser"] }),
//   });

//   return { logoutMutation, isPending, error };
// };
// export default useLogout;

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { logout } from "../lib/api";

const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: logoutMutation,
    isPending,
    error,
  } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      // Clear authUser query data and prevent refetch
      queryClient.setQueryData(["authUser"], null);
      queryClient.removeQueries(["authUser"]); // Remove query to prevent refetch
      queryClient.invalidateQueries({ queryKey: ["authUser"], refetch: false });

      // Navigate to login
      navigate("/login", { replace: true });
    },
    onError: (error) => {
      console.error("Logout error:", error);
    },
  });

  return { logoutMutation, isPending, error };
};

export default useLogout;
