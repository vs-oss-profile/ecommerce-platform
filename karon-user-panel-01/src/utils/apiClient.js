import axios from "axios";
import { BACKEND_BASE_URL } from "./utils";
import { showToast } from "../components/ToastProvider";

const apiClient = axios.create({
  baseURL: BACKEND_BASE_URL,
});

apiClient.interceptors.response.use(
  (response) => {
    if (response.data?.success === false) {
      showToast(response.data.message || "Something went wrong", "error");
    }
    return response;
  },
  (error) => {
    showToast(error?.response?.data?.message || "Server error", "error");
    return Promise.reject(error);
  },
);

export default apiClient;
