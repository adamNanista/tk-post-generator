"use client";

import { useUIStore } from "@/stores/useUIStore";

export default function ScheduleInfoSizeControl() {
	const scheduleInfoSizes = useUIStore((state) => state.scheduleInfoSizes);
	const scheduleInfoSizeIndex = useUIStore((state) => state.scheduleInfoSizeIndex);
	const setScheduleInfoSizeIndex = useUIStore((state) => state.setScheduleInfoSizeIndex);

	return (
		<fieldset className="space-y-2">
			<legend>Veľkosť písma dátumu</legend>
			<input className="w-full" type="range" name="scheduleInfoSize" min="0" max={scheduleInfoSizes.length - 1} step="1" value={scheduleInfoSizeIndex} onChange={(e) => setScheduleInfoSizeIndex(Number(e.target.value))} />
			<p>{scheduleInfoSizes[scheduleInfoSizeIndex]} px</p>
		</fieldset>
	);
}
