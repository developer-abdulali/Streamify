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
import { useNavigate } from "react-router-dom";
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
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
      queryClient.setQueryData(["authUser"], null); // Clear authUser data
      navigate("/login", { replace: true }); // Navigate to login
    },
    onError: (error) => {
      console.error("Logout error:", error);
    },
  });

  return { logoutMutation, isPending, error };
};

export default useLogout;
