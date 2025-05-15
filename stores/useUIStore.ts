"use client";

import { create } from "zustand";

type UIState = {
	companyLogoFill: string;
	eventLogoWidth: number;
	subtitleColor: string;
	scheduleInfoSize: number;
	setCompanyLogoFill: (fill: string) => void;
	setEventLogoWidth: (width: number) => void;
	setSubtitleColor: (width: string) => void;
	setScheduleInfoSize: (size: number) => void;
};

export const useUIStore = create<UIState>((set) => ({
	companyLogoFill: "dark",
	eventLogoWidth: 90,
	subtitleColor: "dark",
	scheduleInfoSize: 60,
	setCompanyLogoFill: (fill) => set({ companyLogoFill: fill }),
	setEventLogoWidth: (width) => set({ eventLogoWidth: width }),
	setSubtitleColor: (color) => set({ subtitleColor: color }),
	setScheduleInfoSize: (size) => set({ scheduleInfoSize: size }),
}));
