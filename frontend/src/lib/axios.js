import axios from "axios";

const SERVER = import.meta.env.VITE_SERVER_URL;

const axiosInstance = axios.create({
  baseURL: `${SERVER}/api`,
  withCredentials: true,
});

export default axiosInstance;
