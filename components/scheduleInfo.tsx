"use client";

import { useUIStore } from "@/stores/useUIStore";

type ScheduleProps = {
	day: string;
	month: string;
	venue: string;
	city: string;
};

export default function ScheduleInfo({ day, month, venue, city }: ScheduleProps) {
	const scheduleInfoSize = useUIStore((state) => state.scheduleInfoSize);
	const scheduleInfoWidth = useUIStore((state) => state.scheduleInfoWidth);

	return (
		<ul className="mt-auto space-y-[0.5em] text-[#ffffff] font-bold leading-none uppercase" style={{ fontSize: scheduleInfoSize + "px", width: scheduleInfoWidth + "%" }}>
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
