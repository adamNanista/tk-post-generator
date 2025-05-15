"use client";

import { useUIStore } from "@/stores/useUIStore";

export default function ScheduleInfoWidthControl() {
	const scheduleInfoWidth = useUIStore((state) => state.scheduleInfoWidth);
	const setScheduleInfoWidth = useUIStore((state) => state.setScheduleInfoWidth);

	return (
		<fieldset>
			<legend>Šírka dátumu</legend>
			<input type="range" name="scheduleInfoSize" min="10" max="100" step="10" value={scheduleInfoWidth} onChange={(e) => setScheduleInfoWidth(Number(e.target.value))} />
			<p>{scheduleInfoWidth} %</p>
		</fieldset>
	);
}
