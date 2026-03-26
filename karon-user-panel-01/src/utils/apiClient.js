import axios from "axios";
import { BACKEND_BASE_URL } from "./utils";

const apiClient = axios.create({
  baseURL: BACKEND_BASE_URL,
});

export default apiClient;
