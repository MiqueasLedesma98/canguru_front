import { create } from "zustand";

const useStateStore = create((set) => ({
  mode: true,
  setMode: (value) => set({ mode: value }),
}));

export default useStateStore;
