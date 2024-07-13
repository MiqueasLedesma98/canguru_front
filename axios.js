import { Axios } from "axios";
import * as SecureStore from "expo-secure-store";

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

const token = SecureStore.getItem("x-token");

const api = new Axios({
  baseURL: apiUrl,
});

if (token) {
  api.defaults.headers.common["x-token"] = token;
}

const errorInterceptor = (err) => {
  const responseData = err.response.data;
  err.data = responseData;
  throw err;
};

api.interceptors.response.use(null, errorInterceptor);

export { api };
