"use client";

type ScheduleProps = {
	day: string;
	month: string;
	venue: string;
	city: string;
	useUIStore: ReturnType<typeof import("@/stores/useUIStore").getUIStore>;
};

export default function ScheduleInfo({ day, month, venue, city, useUIStore }: ScheduleProps) {
	const colors = useUIStore((state) => state.colors);
	const sizes = useUIStore((state) => state.sizes);
	const spaces = useUIStore((state) => state.spaces);
	const relativeSpaces = useUIStore((state) => state.relativeSpaces);
	const alignments = useUIStore((state) => state.alignments);

	const scheduleInfoAlignment = useUIStore((state) => state.scheduleInfoAlignment);
	const scheduleInfoSpaceIndex = useUIStore((state) => state.scheduleInfoSpaceIndex);
	const scheduleInfoSizeIndex = useUIStore((state) => state.scheduleInfoSizeIndex);
	const scheduleInfoWidth = useUIStore((state) => state.scheduleInfoWidth);
	const scheduleInfoColor = useUIStore((state) => state.scheduleInfoColor);
	const scheduleInfoPipeColor = useUIStore((state) => state.scheduleInfoPipeColor);
	const scheduleInfoDateSpaceIndex = useUIStore((state) => state.scheduleInfoDateSpaceIndex);
	const scheduleInfoPlaceSpaceIndex = useUIStore((state) => state.scheduleInfoPlaceSpaceIndex);

	return (
		<div className="grow shrink-0 flex flex-col" style={{ justifyContent: alignments[scheduleInfoAlignment] }}>
			<ul className="font-bold leading-none uppercase" style={{ width: scheduleInfoWidth + "%", marginBottom: spaces[scheduleInfoSpaceIndex] + "px", color: colors[scheduleInfoColor], fontSize: sizes[scheduleInfoSizeIndex] + "px" }}>
				<li className="flex flex-col relative pl-[0.375em]" style={{ marginBottom: relativeSpaces[scheduleInfoDateSpaceIndex] + "em" }}>
					<span className="block w-[0.125em] absolute top-[0.0625em] bottom-[0.1875em] left-0 text-nowrap" style={{ backgroundColor: colors[scheduleInfoPipeColor] }}></span>
					{day}.&nbsp;{month}
				</li>
				<li className="flex flex-col relative pl-[0.375em]">
					<span className="block w-[0.125em] absolute top-[0.0625em] bottom-[0.1875em] left-0" style={{ backgroundColor: colors[scheduleInfoPipeColor] }}></span>
					<span style={{ marginBottom: relativeSpaces[scheduleInfoPlaceSpaceIndex] + "em" }}>{venue}</span>
					<span className="font-normal">{city}</span>
				</li>
			</ul>
		</div>
	);
}
