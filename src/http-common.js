import axios from "axios";
const http = axios.create({
  baseURL: "http://localhost:3000/api/",
  headers: {
    "Content-type": "application/json",
  },
});

http.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem("User")).token;
  config.headers = config.headers || {};
  config.headers["x-access-token"] = token;

  return config;
});

export default http;
