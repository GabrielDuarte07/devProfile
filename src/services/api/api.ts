import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.26:3030/",
  validateStatus: status => status < 500,
});

export default api;
