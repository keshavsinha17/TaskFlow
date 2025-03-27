import axios, { AxiosInstance } from "axios";

// ✅ Create an Axios instance with a base URL
const API: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // ⬅️ Keeps URLs configurable
  timeout: 10000, // ⬅️ Prevents long-running requests
  headers: { "Content-Type": "application/json" },
});

// ✅ Attach Token Automatically to Every Request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// ✅ Handle API Errors Globally
API.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default API;
