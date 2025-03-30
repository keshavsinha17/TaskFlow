import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

// Create an Axios instance with a base URL
const API: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000", // Fallback to localhost if env var not set
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

// Handle API Errors Globally
API.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default API;
