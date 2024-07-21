import { create } from "zustand";
import { api } from "../axios";

const useAuthStore = create((set) => ({
  auth: false,
  token: null,
  userInfo: null,
  login: async (form) => {
    const { token, user } = await api.POST(`/auth/login`, form);
    set({ auth: true, token, userInfo: user });
    await api.setToken(token, user);
  },
  logout: async () => {
    set({ auth: false, token: null, userInfo: null });
    await api.deleteToken();
  },
  restoreSession: ({ auth, token, userInfo }) => set({ auth, token, userInfo }),
}));

export default useAuthStore;
