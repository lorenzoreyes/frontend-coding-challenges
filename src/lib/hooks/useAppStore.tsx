import { create } from "zustand";
import { persist } from "zustand/middleware";
import { HouseType } from "@lib/constants/houses";

interface AppState {
  preferredHouse: HouseType | null | undefined;
  setPreferredHouse: (house: HouseType | null | undefined) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      preferredHouse: undefined,
      setPreferredHouse: (preferredHouse) => set(() => ({ preferredHouse })),
    }),
    {
      name: "the-harry-potter-app-storage",
    }
  )
);
