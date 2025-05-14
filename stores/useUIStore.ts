"use client";

import { create } from "zustand";

type UIState = {
	companyLogoFill: string;
	eventLogoWidth: number;
	setCompanyLogoFill: (fill: string) => void;
	setEventLogoWidth: (width: number) => void;
};

export const useUIStore = create<UIState>((set) => ({
	companyLogoFill: "dark",
	eventLogoWidth: 90,
	setCompanyLogoFill: (fill) => set({ companyLogoFill: fill }),
	setEventLogoWidth: (width) => set({ eventLogoWidth: width }),
}));
