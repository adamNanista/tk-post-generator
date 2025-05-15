"use client";

import { create } from "zustand";

type UIState = {
	companyLogoFill: string;
	eventLogoWidth: number;
	subtitleColor: string;
	setCompanyLogoFill: (fill: string) => void;
	setEventLogoWidth: (width: number) => void;
	setSubtitleColor: (width: string) => void;
};

export const useUIStore = create<UIState>((set) => ({
	companyLogoFill: "dark",
	eventLogoWidth: 90,
	subtitleColor: "dark",
	setCompanyLogoFill: (fill) => set({ companyLogoFill: fill }),
	setEventLogoWidth: (width) => set({ eventLogoWidth: width }),
	setSubtitleColor: (color) => set({ subtitleColor: color }),
}));
