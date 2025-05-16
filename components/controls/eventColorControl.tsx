"use client";

import { useUIStore } from "@/stores/useUIStore";
import { HexColorInput } from "react-colorful";

export default function EventColorControl() {
	const eventColor = useUIStore((state) => state.eventColor);
	const setEventColor = useUIStore((state) => state.setEventColor);

	return (
		<fieldset className="space-y-2">
			<legend>Farba eventu</legend>
			<HexColorInput className="w-full px-3 py-1 bg-white border border-neutral-300 rounded" color={eventColor} onChange={setEventColor} prefixed />
		</fieldset>
	);
}
