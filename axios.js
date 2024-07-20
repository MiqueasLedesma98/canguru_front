import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { Alert } from "react-native";

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

const getToken = async () => await SecureStore.getItemAsync("x-token");
class ApiQuery {
  constructor() {
    this.baseURL = apiUrl;
    this.axios = axios;
    this.axios.defaults.headers.common["x-token"] = getToken();
  }

  async POST(url, body = {}) {
    try {
      const { data } = await this.axios.post(this.baseURL + url, body);
      return data;
    } catch (error) {
      console.log(error);
      Alert.alert(error.message);
    }
  }

  async GET(url) {
    try {
      const { data } = await this.axios.get(this.baseURL + url);

      return data;
    } catch (error) {
      console.log(error);
      Alert.alert(error.message);
    }
  }

  async PUT(url, body = {}) {
    try {
      const { data } = await this.axios.put(this.baseURL + url, body);
      return data;
    } catch (error) {
      console.log(error);
      Alert.alert(error.message);
    }
  }

  async DELETE(url, body) {
    try {
      const { data } = await this.axios.get(this.baseURL + url);

      return data;
    } catch (error) {
      console.log(error);
      Alert.alert(error.message);
    }
  }

  async setToken(token) {
    await SecureStore.setItemAsync("x-token", token);
    this.axios.defaults.headers.common["x-token"] = token;
  }

  async deleteToken() {
    await SecureStore.deleteItemAsync("x-token");
    this.axios.defaults.headers.common["x-token"] = null;
  }
}

const api = new ApiQuery();

export { api };
