"use client";

import { create } from "zustand";
import { fontSizes } from "@/utils/fontSizes";

type UIState = {
	eventColor: string;
	companyLogoFill: string;
	eventLogoWidth: number;
	subtitleWidth: number;
	subtitleColor: string;
	subtitleSizes: number[];
	subtitleSizeIndex: number;
	scheduleInfoWidth: number;
	scheduleInfoColor: string;
	scheduleInfoSizes: number[];
	scheduleInfoSizeIndex: number;

	setEventColor: (color: string) => void;
	setCompanyLogoFill: (fill: string) => void;
	setEventLogoWidth: (width: number) => void;
	setSubtitleWidth: (width: number) => void;
	setSubtitleColor: (color: string) => void;
	setScheduleInfoWidth: (width: number) => void;
	setSubtitleSizeIndex: (index: number) => void;
	setScheduleInfoColor: (color: string) => void;
	setScheduleInfoSizeIndex: (index: number) => void;
};

export const useUIStore = create<UIState>((set) => ({
	eventColor: "#ffffff",
	companyLogoFill: "dark",
	eventLogoWidth: 90,
	subtitleWidth: 100,
	subtitleColor: "dark",
	subtitleSizes: fontSizes,
	subtitleSizeIndex: 17,
	scheduleInfoWidth: 100,
	scheduleInfoColor: "dark",
	scheduleInfoSizes: fontSizes,
	scheduleInfoSizeIndex: 12,

	setEventColor: (color) => set({ eventColor: color }),
	setCompanyLogoFill: (fill) => set({ companyLogoFill: fill }),
	setEventLogoWidth: (width) => set({ eventLogoWidth: width }),
	setSubtitleWidth: (width) => set({ subtitleWidth: width }),
	setSubtitleColor: (color) => set({ subtitleColor: color }),
	setScheduleInfoWidth: (width) => set({ scheduleInfoWidth: width }),
	setSubtitleSizeIndex: (index) => set({ subtitleSizeIndex: index }),
	setScheduleInfoColor: (color) => set({ scheduleInfoColor: color }),
	setScheduleInfoSizeIndex: (index) => set({ scheduleInfoSizeIndex: index }),
}));
