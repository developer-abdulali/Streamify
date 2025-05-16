import axios from "axios";

// const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const axiosInstance = axios.create({
  // baseURL: `${SERVER_URL}/api`,
  baseURL: `http://localhost:5000/api`,
  withCredentials: true, // send cookies with the request
});
