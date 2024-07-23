import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { Alert } from "react-native";

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

const getToken = async () => await SecureStore.getItemAsync("x-token");

const getUser = async () => {
  const userInJSON = await SecureStore.getItemAsync("user");
  if (!userInJSON) return false;
  return JSON.parse(userInJSON);
};
class ApiQuery {
  constructor(url) {
    this.baseURL = url;
    this.axios = axios;
  }

  async POST(url, body = {}) {
    try {
      const token = await getToken();

      const { data } = await this.axios.post(this.baseURL + url, body);
      return data;
    } catch (error) {
      console.log(error);
      Alert.alert(error.response.data.msg ?? error.message);
      return {};
    }
  }

  async GET(url) {
    try {
      const { data } = await this.axios.get(this.baseURL + url);
      return data;
    } catch (error) {
      console.log(error);
      Alert.alert(error.response.data.msg ?? error.message);
      return {};
    }
  }

  async PUT(url, body = {}) {
    try {
      const { data } = await this.axios.put(this.baseURL + url, body);
      return data;
    } catch (error) {
      console.log({ error: error.response, data: error.response.data });
      Alert.alert(error.response.data.msg ?? error.message);
      return {};
    }
  }

  async DELETE(url, body) {
    try {
      const { data } = await this.axios.get(this.baseURL + url, body);
      return data;
    } catch (error) {
      console.log(error);
      Alert.alert(error.response.data.msg ?? error.message);
      return {};
    }
  }

  async setToken(token, user) {
    await SecureStore.setItemAsync("x-token", token);
    await SecureStore.setItemAsync("user", JSON.stringify(user));
    this.axios.defaults.headers.common["x-token"] = token;
  }

  async deleteToken() {
    await SecureStore.deleteItemAsync("x-token");
    await SecureStore.deleteItemAsync("user");
    this.axios.defaults.headers.common["x-token"] = null;
  }

  async loadCredentials(restoreSession) {
    if (restoreSession) {
      try {
        const [token, userInfo] = await Promise.all([getToken(), getUser()]);
        this.axios.defaults.headers.common["x-token"] = token;
        await restoreSession({ auth: token && userInfo, token, userInfo });
      } catch (error) {
        console.log(error);
      }
    }
  }
}

const api = new ApiQuery(apiUrl);

export { api };
