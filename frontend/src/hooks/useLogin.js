// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { login } from "../lib/api";

// const useLogin = () => {
//   const queryClient = useQueryClient();
//   const { mutate, isPending, error } = useMutation({
//     mutationFn: login,
//     onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authUser"] }),
//   });

//   return { error, isPending, loginMutation: mutate };
// };

// export default useLogin;

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../lib/api";

const useLogin = () => {
  const queryClient = useQueryClient();
  const { mutate, isPending, error } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      // ✅ directly set the auth user data in cache
      queryClient.setQueryData(["authUser"], { user: data.user });

      // optional: invalidate to ensure freshness on next mount
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },
  });

  return { error, isPending, loginMutation: mutate };
};

export default useLogin;
