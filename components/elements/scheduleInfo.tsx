"use client";

import { useUIStore } from "@/stores/useUIStore";
import { colors } from "@/utils/colors";

type ScheduleProps = {
	day: string;
	month: string;
	venue: string;
	city: string;
};

export default function ScheduleInfo({ day, month, venue, city }: ScheduleProps) {
	const spaces = useUIStore((state) => state.spaces);
	const scheduleInfoSpaceIndex = useUIStore((state) => state.scheduleInfoSpaceIndex);
	const sizes = useUIStore((state) => state.sizes);
	const scheduleInfoSizeIndex = useUIStore((state) => state.scheduleInfoSizeIndex);
	const scheduleInfoWidth = useUIStore((state) => state.scheduleInfoWidth);
	const scheduleInfoColor = useUIStore((state) => state.scheduleInfoColor);

	return (
		<ul className="mt-auto space-y-[0.5em] font-bold leading-none uppercase" style={{ width: scheduleInfoWidth + "%", marginBottom: spaces[scheduleInfoSpaceIndex] + "px", color: colors[scheduleInfoColor], fontSize: sizes[scheduleInfoSizeIndex] + "px" }}>
			<li className="relative pl-[0.375em] before:block before:w-[0.125em] before:absolute before:top-[0.0625em] before:bottom-[0.1875em] before:left-0 before:bg-[#b98362]">
				{day}. {month}
			</li>
			<li className="relative pl-[0.375em] before:block before:w-[0.125em] before:absolute before:top-[0.0625em] before:bottom-[0.1875em] before:left-0 before:bg-[#b98362]">
				{venue}
				<br aria-hidden="true" />
				<span className="font-normal">{city}</span>
			</li>
		</ul>
	);
}
