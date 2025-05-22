"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { colors } from "@/utils/colors";
import { fontSizes } from "@/utils/fontSizes";
import { spaces, relativeSpaces } from "@/utils/spaces";
import { alignments } from "@/utils/alignments";

type UIState = {
	colors: Record<string, string>;
	sizes: number[];
	spaces: number[];
	relativeSpaces: number[];
	alignments: Record<string, string>;

	primaryColor: string;
	accentColor: string;
	companyLogoFill: string;
	companyLogoSpaceIndex: number;
	eventLogoWidth: number;
	eventLogoSpaceIndex: number;
	subtitleWidth: number;
	subtitleColor: string;
	subtitleSizeIndex: number;
	subtitleSpaceIndex: number;
	scheduleInfoAlignment: string;
	scheduleInfoWidth: number;
	scheduleInfoColor: string;
	scheduleInfoPipeColor: string;
	scheduleInfoSizeIndex: number;
	scheduleInfoSpaceIndex: number;
	scheduleInfoDateSpaceIndex: number;
	scheduleInfoPlaceSpaceIndex: number;
	themeWidth: number;
	themeBadgeColor: string;
	themeBadgeBackgroundColor: string;
	themeBadgeSizeIndex: number;
	themeBadgeSpaceIndex: number;
	themeTitleColor: string;
	themeTitleSizeIndex: number;

	setPrimaryColor: (color: string) => void;
	setAccentColor: (color: string) => void;
	setCompanyLogoFill: (fill: string) => void;
	setCompanyLogoSpaceIndex: (index: number) => void;
	setEventLogoWidth: (width: number) => void;
	setEventLogoSpaceIndex: (index: number) => void;
	setSubtitleWidth: (width: number) => void;
	setSubtitleColor: (color: string) => void;
	setSubtitleSizeIndex: (index: number) => void;
	setSubtitleSpaceIndex: (index: number) => void;
	setScheduleInfoAlignment: (alignment: string) => void;
	setScheduleInfoWidth: (width: number) => void;
	setScheduleInfoColor: (color: string) => void;
	setScheduleInfoPipeColor: (color: string) => void;
	setScheduleInfoSizeIndex: (index: number) => void;
	setScheduleInfoSpaceIndex: (index: number) => void;
	setScheduleInfoDateSpaceIndex: (index: number) => void;
	setScheduleInfoPlaceSpaceIndex: (index: number) => void;
	setThemeWidth: (width: number) => void;
	setThemeBadgeColor: (color: string) => void;
	setThemeBadgeBackgroundColor: (color: string) => void;
	setThemeBadgeSizeIndex: (index: number) => void;
	setThemeBadgeSpaceIndex: (index: number) => void;
	setThemeTitleColor: (color: string) => void;
	setThemeTitleSizeIndex: (index: number) => void;
};

export const useUIStore = create<UIState>()(
	persist(
		(set) => ({
			colors: {
				...colors,
				primary: "#ffffff",
				accent: "#232323",
			},
			sizes: fontSizes,
			spaces: spaces,
			relativeSpaces: relativeSpaces,
			alignments: alignments,

			primaryColor: "#ffffff",
			accentColor: "#232323",
			companyLogoFill: "dark",
			companyLogoSpaceIndex: 21,
			eventLogoWidth: 90,
			eventLogoSpaceIndex: 13,
			subtitleWidth: 100,
			subtitleColor: "dark",
			subtitleSizes: fontSizes,
			subtitleSizeIndex: 17,
			subtitleSpaceIndex: 13,
			scheduleInfoAlignment: "top",
			scheduleInfoWidth: 100,
			scheduleInfoColor: "dark",
			scheduleInfoPipeColor: "light",
			scheduleInfoSizes: fontSizes,
			scheduleInfoSizeIndex: 12,
			scheduleInfoSpaceIndex: 9,
			scheduleInfoDateSpaceIndex: 2,
			scheduleInfoPlaceSpaceIndex: 0,
			themeWidth: 100,
			themeBadgeColor: "light",
			themeBadgeBackgroundColor: "dark",
			themeBadgeSizeIndex: 5,
			themeBadgeSpaceIndex: 3,
			themeTitleColor: "dark",
			themeTitleSizeIndex: 13,

			setPrimaryColor: (color) => set((state) => ({ primaryColor: color, colors: { ...state.colors, primary: color } })),
			setAccentColor: (color) => set((state) => ({ accentColor: color, colors: { ...state.colors, accent: color } })),
			setCompanyLogoFill: (fill) => set({ companyLogoFill: fill }),
			setCompanyLogoSpaceIndex: (index) => set({ companyLogoSpaceIndex: index }),
			setEventLogoWidth: (width) => set({ eventLogoWidth: width }),
			setEventLogoSpaceIndex: (index) => set({ eventLogoSpaceIndex: index }),
			setSubtitleWidth: (width) => set({ subtitleWidth: width }),
			setSubtitleColor: (color) => set({ subtitleColor: color }),
			setSubtitleSizeIndex: (index) => set({ subtitleSizeIndex: index }),
			setSubtitleSpaceIndex: (index) => set({ subtitleSpaceIndex: index }),
			setScheduleInfoAlignment: (alignment) => set({ scheduleInfoAlignment: alignment }),
			setScheduleInfoWidth: (width) => set({ scheduleInfoWidth: width }),
			setScheduleInfoColor: (color) => set({ scheduleInfoColor: color }),
			setScheduleInfoPipeColor: (color) => set({ scheduleInfoPipeColor: color }),
			setScheduleInfoSizeIndex: (index) => set({ scheduleInfoSizeIndex: index }),
			setScheduleInfoSpaceIndex: (index) => set({ scheduleInfoSpaceIndex: index }),
			setScheduleInfoDateSpaceIndex: (index) => set({ scheduleInfoDateSpaceIndex: index }),
			setScheduleInfoPlaceSpaceIndex: (index) => set({ scheduleInfoPlaceSpaceIndex: index }),
			setThemeWidth: (width) => set({ themeWidth: width }),
			setThemeBadgeColor: (color) => set({ themeBadgeColor: color }),
			setThemeBadgeBackgroundColor: (color) => set({ themeBadgeBackgroundColor: color }),
			setThemeBadgeSizeIndex: (index) => set({ themeBadgeSizeIndex: index }),
			setThemeBadgeSpaceIndex: (index) => set({ themeBadgeSpaceIndex: index }),
			setThemeTitleColor: (color) => set({ themeTitleColor: color }),
			setThemeTitleSizeIndex: (index) => set({ themeTitleSizeIndex: index }),
		}),
		{
			name: "reality-development-2025", // unique name in localStorage
			partialize: (state) => ({
				primaryColor: state.primaryColor,
				accentColor: state.accentColor,
				companyLogoFill: state.companyLogoFill,
				companyLogoSpaceIndex: state.companyLogoSpaceIndex,
				eventLogoWidth: state.eventLogoWidth,
				eventLogoSpaceIndex: state.eventLogoSpaceIndex,
				subtitleWidth: state.subtitleWidth,
				subtitleColor: state.subtitleColor,
				subtitleSizeIndex: state.subtitleSizeIndex,
				subtitleSpaceIndex: state.subtitleSpaceIndex,
				scheduleInfoAlignment: state.scheduleInfoAlignment,
				scheduleInfoWidth: state.scheduleInfoWidth,
				scheduleInfoColor: state.scheduleInfoColor,
				scheduleInfoPipeColor: state.scheduleInfoPipeColor,
				scheduleInfoSizeIndex: state.scheduleInfoSizeIndex,
				scheduleInfoSpaceIndex: state.scheduleInfoSpaceIndex,
				scheduleInfoDateSpaceIndex: state.scheduleInfoDateSpaceIndex,
				scheduleInfoPlaceSpaceIndex: state.scheduleInfoPlaceSpaceIndex,
				themeWidth: state.themeWidth,
				themeBadgeColor: state.themeBadgeColor,
				themeBadgeBackgroundColor: state.themeBadgeBackgroundColor,
				themeBadgeSizeIndex: state.themeBadgeSizeIndex,
				themeBadgeSpaceIndex: state.themeBadgeSpaceIndex,
				themeTitleColor: state.themeTitleColor,
				themeTitleSizeIndex: state.themeTitleSizeIndex,
			}),
			onRehydrateStorage: () => {
				return (actualState, error) => {
					if (error) {
						console.error("Error rehydrating:", error);
					}

					if (actualState) {
						let updatedColors = { ...colors };

						if (actualState.primaryColor) {
							updatedColors.primary = actualState.primaryColor;
						}
						if (actualState.accentColor) {
							updatedColors.accent = actualState.accentColor;
						}

						actualState.colors = updatedColors;
					}
				};
			},
		}
	)
);
