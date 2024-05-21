import axios from "axios";
import { Config } from "../../global/env/env";

const api = axios.create({
  baseURL: Config.API_HOST,
  validateStatus: status => status < 500,
});

export default api;
