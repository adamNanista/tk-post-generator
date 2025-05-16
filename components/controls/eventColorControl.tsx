"use client";

import { useUIStore } from "@/stores/useUIStore";
import { HexColorInput } from "react-colorful";

export default function EventColorControl() {
	const eventColor = useUIStore((state) => state.eventColor);
	const setEventColor = useUIStore((state) => state.setEventColor);

	return (
		<fieldset className="space-y-2">
			<legend>Farba eventu</legend>
			<div className="flex items-center space-x-4">
				<HexColorInput className="w-full px-3 py-1 bg-white border border-neutral-300 rounded" color={eventColor} onChange={setEventColor} prefixed />
				<div className="shrink-0 w-8 h-8 border border-neutral-300 rounded" style={{ backgroundColor: eventColor }}></div>
			</div>
		</fieldset>
	);
}
