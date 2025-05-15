"use client";

import { useUIStore } from "@/stores/useUIStore";

export default function ScheduleInfoSizeControl() {
	const scheduleInfoSize = useUIStore((state) => state.scheduleInfoSize);
	const setScheduleInfoSize = useUIStore((state) => state.setScheduleInfoSize);

	return (
		<fieldset>
			<legend>Veľkosť dátumu</legend>
			<input type="range" name="scheduleInfoSize" min="10" max="100" step="10" value={scheduleInfoSize} onChange={(e) => setScheduleInfoSize(Number(e.target.value))} />
			<p>{scheduleInfoSize} px</p>
		</fieldset>
	);
}
