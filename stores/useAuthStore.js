import { create } from "zustand";
import { api } from "../axios";
import { navigate } from "../helpers";
import { screen_names } from "../router/screen_names";

const useAuthStore = create((set) => ({
  auth: true,
  token: null,
  userInfo: null,
  login: async (form) => {
    const { token, user } = await api.POST(`/auth/login`, form);
    set({ auth: true, token, userInfo: user });
    await api.setToken(token);
  },
  logout: async () => {
    set({ auth: false, token: null, userInfo: null });
    await api.deleteToken();
    navigate(screen_names.LOGIN);
  },
}));

export default useAuthStore;
