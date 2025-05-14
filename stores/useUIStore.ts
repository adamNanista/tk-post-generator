"use client";

import { create } from "zustand";

type UIState = {
	logoFill: string;
	setLogoFill: (fill: string) => void;
};

export const useUIStore = create<UIState>((set) => ({
	logoFill: "dark",
	setLogoFill: (fill) => set({ logoFill: fill }),
}));
