// stores/useAuthStore.js
import { create } from "zustand";
import { getItemAsync, deleteItemAsync, setItemAsync } from "expo-secure-store";
import { api } from "../axios";
import { navigate } from "../helpers";
import { screen_names } from "../router/screen_names";

const fetchUserInfo = async (token) => ({
  name: "",
  lastname: "",
  img: "",
  token,
});

const useAuthStore = create((set) => ({
  auth: false,
  token: null,
  userInfo: null,
  login: async (form) => {
    const response = await api.post("/api/login", form);
    const { token, userInfo } = response;
    set({ auth: true, token, userInfo });
    await setItemAsync("token", token);
    navigate(screen_names.HOME);
  },
  logout: async () => {
    await deleteItemAsync("token");
    set({ auth: false, token: null, userInfo: null });
    navigate(screen_names.LOGIN);
  },
  setAuthState: async () => {
    const token = await getItemAsync("token");
    if (token) {
      const userInfo = await fetchUserInfo(token);
      set({ auth: true, token, userInfo });
    } else {
      set({ auth: false, token: null, userInfo: null });
    }
  },
}));

export default useAuthStore;
