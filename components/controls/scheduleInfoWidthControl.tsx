"use client";

import { useUIStore } from "@/stores/useUIStore";

export default function ScheduleInfoWidthControl() {
	const scheduleInfoWidth = useUIStore((state) => state.scheduleInfoWidth);
	const setScheduleInfoWidth = useUIStore((state) => state.setScheduleInfoWidth);

	return (
		<fieldset className="space-y-2">
			<legend>Šírka dátumu</legend>
			<input className="w-full" type="range" name="scheduleInfoWidth" min="10" max="100" step="1" value={scheduleInfoWidth} onChange={(e) => setScheduleInfoWidth(Number(e.target.value))} />
			<p>{scheduleInfoWidth} %</p>
		</fieldset>
	);
}
