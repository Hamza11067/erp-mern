import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // Apne backend ke hisaab se check kar lena
  withCredentials: true,
});

export default api;