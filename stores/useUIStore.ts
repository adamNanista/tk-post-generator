"use client";

import { create } from "zustand";

type UIState = {
	companyLogoFill: string;
	eventLogoWidth: number;
	subtitleColor: string;
	scheduleInfoSize: number;
	scheduleInfoWidth: number;
	setCompanyLogoFill: (fill: string) => void;
	setEventLogoWidth: (width: number) => void;
	setSubtitleColor: (width: string) => void;
	setScheduleInfoSize: (size: number) => void;
	setScheduleInfoWidth: (width: number) => void;
};

export const useUIStore = create<UIState>((set) => ({
	companyLogoFill: "dark",
	eventLogoWidth: 90,
	subtitleColor: "dark",
	scheduleInfoSize: 60,
	scheduleInfoWidth: 100,
	setCompanyLogoFill: (fill) => set({ companyLogoFill: fill }),
	setEventLogoWidth: (width) => set({ eventLogoWidth: width }),
	setSubtitleColor: (color) => set({ subtitleColor: color }),
	setScheduleInfoSize: (size) => set({ scheduleInfoSize: size }),
	setScheduleInfoWidth: (width) => set({ scheduleInfoWidth: width }),
}));
