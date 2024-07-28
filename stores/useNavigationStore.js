import { create } from "zustand";

const useNavigationStore = create((set) => ({
  stackNavigation: null,
  setStackNavigation: (navigation) => set({ stackNavigation: navigation }),
}));

export default useNavigationStore;
