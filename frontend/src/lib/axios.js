import axios from "axios";

// const BASE_URL = import.meta.env.VITE_SERVER_URL

export const axiosInstance = axios.create({
  // baseURL: BASE_URL,
  baseURL: "http://localhost:5000/api",
  withCredentials: true, // send cookies with the request
});
