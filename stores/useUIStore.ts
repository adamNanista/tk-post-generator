"use client";

import { create } from "zustand";
import { fontSizes } from "@/utils/fontSizes";
import { spaces } from "@/utils/spaces";

type UIState = {
	sizes: number[];
	spaces: number[];

	eventColor: string;
	companyLogoFill: string;
	companyLogoSpaceIndex: number;
	eventLogoWidth: number;
	eventLogoSpaceIndex: number;
	subtitleWidth: number;
	subtitleColor: string;
	subtitleSizeIndex: number;
	subtitleSpaceIndex: number;
	scheduleInfoWidth: number;
	scheduleInfoColor: string;
	scheduleInfoSizeIndex: number;
	scheduleInfoSpaceIndex: number;

	setEventColor: (color: string) => void;
	setCompanyLogoFill: (fill: string) => void;
	setCompanyLogoSpaceIndex: (index: number) => void;
	setEventLogoWidth: (width: number) => void;
	setEventLogoSpaceIndex: (index: number) => void;
	setSubtitleWidth: (width: number) => void;
	setSubtitleColor: (color: string) => void;
	setSubtitleSizeIndex: (index: number) => void;
	setSubtitleSpaceIndex: (index: number) => void;
	setScheduleInfoWidth: (width: number) => void;
	setScheduleInfoColor: (color: string) => void;
	setScheduleInfoSizeIndex: (index: number) => void;
	setScheduleInfoSpaceIndex: (index: number) => void;
};

export const useUIStore = create<UIState>((set) => ({
	sizes: fontSizes,
	spaces: spaces,

	eventColor: "#ffffff",
	companyLogoFill: "dark",
	companyLogoSpaceIndex: 21,
	eventLogoWidth: 90,
	eventLogoSpaceIndex: 13,
	subtitleWidth: 100,
	subtitleColor: "dark",
	subtitleSizes: fontSizes,
	subtitleSizeIndex: 17,
	subtitleSpaceIndex: 13,
	scheduleInfoWidth: 100,
	scheduleInfoColor: "dark",
	scheduleInfoSizes: fontSizes,
	scheduleInfoSizeIndex: 12,
	scheduleInfoSpaceIndex: 9,

	setEventColor: (color) => set({ eventColor: color }),
	setCompanyLogoFill: (fill) => set({ companyLogoFill: fill }),
	setCompanyLogoSpaceIndex: (index) => set({ companyLogoSpaceIndex: index }),
	setEventLogoWidth: (width) => set({ eventLogoWidth: width }),
	setEventLogoSpaceIndex: (index) => set({ eventLogoSpaceIndex: index }),
	setSubtitleWidth: (width) => set({ subtitleWidth: width }),
	setSubtitleColor: (color) => set({ subtitleColor: color }),
	setSubtitleSizeIndex: (index) => set({ subtitleSizeIndex: index }),
	setSubtitleSpaceIndex: (index) => set({ subtitleSpaceIndex: index }),
	setScheduleInfoWidth: (width) => set({ scheduleInfoWidth: width }),
	setScheduleInfoColor: (color) => set({ scheduleInfoColor: color }),
	setScheduleInfoSizeIndex: (index) => set({ scheduleInfoSizeIndex: index }),
	setScheduleInfoSpaceIndex: (index) => set({ scheduleInfoSpaceIndex: index }),
}));
