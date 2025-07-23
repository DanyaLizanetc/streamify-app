import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5001";

export const axiosInstance = axios.create({
  baseURL: `${BASE_URL}/api`,
  // *** ЗМІНА: Видалено withCredentials, оскільки ми більше не використовуємо куки для автентифікації ***
  // withCredentials: true,
  // *** КІНЕЦЬ ЗМІНИ ***
});

// *** НОВИЙ ІНТЕРЦЕПТОР: Додаємо токен з localStorage до заголовка Authorization ***
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Отримуємо токен з localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Додаємо токен у форматі Bearer
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// *** КІНЕЦЬ НОВОГО ІНТЕРЦЕПТОРА ***
