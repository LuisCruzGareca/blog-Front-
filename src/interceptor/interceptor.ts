import axios, { AxiosHeaders } from "axios";
import Config from "../../config";

const api = axios.create({
  baseURL: Config.BACKEND_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    const headers = new AxiosHeaders(config.headers);
    headers.set("Authorization", `Bearer ${token}`);
    config.headers = headers;
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.config.url?.includes("auth/login")) {
      // No borrar token al hacer login
      return Promise.reject(err);
    }
    if (err.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);

export default api;
