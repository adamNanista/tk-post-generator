"use client";

import { useUIStore } from "@/stores/useUIStore";
import { HexColorInput } from "react-colorful";

export default function EventColorControl() {
	const eventColor = useUIStore((state) => state.eventColor);
	const setEventColor = useUIStore((state) => state.setEventColor);

	return <HexColorInput color={eventColor} onChange={setEventColor} />;
}
