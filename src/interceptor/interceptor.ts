import axios from "axios";
import Config from "../../config";

// Crear instancia de Axios (opcional, puedes usar axios directamente)
const api = api.create({
  baseURL: Config.BACKEND_URL, // tu backend
});

// Interceptor que se ejecuta antes de cada petición
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // tu JWT
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expirado o no válido
      localStorage.removeItem("access_token");
      window.location.href = "/login"; // redirige al login
    }
    return Promise.reject(error);
  }
);

export default api;
