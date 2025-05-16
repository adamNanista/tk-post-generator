"use client";

import { useUIStore } from "@/stores/useUIStore";

export default function EventLogoWidthControl() {
	const eventLogoWidth = useUIStore((state) => state.eventLogoWidth);
	const setEventLogoWidth = useUIStore((state) => state.setEventLogoWidth);

	return (
		<fieldset className="space-y-2">
			<legend>Šírka loga eventu</legend>
			<input className="w-full" type="range" name="eventLogoWidth" min="0" max="100" step="1" value={eventLogoWidth} onChange={(e) => setEventLogoWidth(Number(e.target.value))} />
			<p>{eventLogoWidth} %</p>
		</fieldset>
	);
}
