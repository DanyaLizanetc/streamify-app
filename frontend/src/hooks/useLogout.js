import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../lib/api";
import toast from "react-hot-toast"; // *** ЗМІНА: Імпортуємо toast для повідомлень ***
import { useNavigate } from "react-router-dom"; // *** ЗМІНА: Імпортуємо useNavigate для перенаправлення ***

const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate(); // Ініціалізуємо useNavigate

  const {
    mutate: logoutMutation,
    isPending,
    error,
  } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      localStorage.removeItem("token"); // *** ЗМІНА: Видаляємо токен з localStorage ***
      queryClient.invalidateQueries({ queryKey: ["authUser"] }); // Інвалідуємо запит на автентифікованого користувача
      toast.success("Logout successful!"); // Повідомлення про успішний вихід
      navigate("/login"); // *** ЗМІНА: Перенаправляємо на сторінку логіну ***
    },
    onError: (err) => { // *** ЗМІНА: Додано обробку помилок ***
      console.error("Logout error:", err);
      toast.error(err.response?.data?.message || "Logout failed");
    }
  });

  return { logoutMutation, isPending, error };
};
export default useLogout;
