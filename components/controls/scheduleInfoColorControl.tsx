"use client";

import { useUIStore } from "@/stores/useUIStore";

export default function ScheduleInfoColorControl() {
	const scheduleInfoColor = useUIStore((state) => state.scheduleInfoColor);
	const setScheduleInfoColor = useUIStore((state) => state.setScheduleInfoColor);

	return (
		<fieldset className="space-y-2">
			<legend>Farba dátumu</legend>
			<div className="space-x-6">
				<label>
					<input type="radio" name="scheduleInfoColor" value="dark" checked={scheduleInfoColor === "dark"} onChange={() => setScheduleInfoColor("dark")} /> Tmavá
				</label>
				<label>
					<input type="radio" name="scheduleInfoColor" value="light" checked={scheduleInfoColor === "light"} onChange={() => setScheduleInfoColor("light")} /> Svetlá
				</label>
			</div>
		</fieldset>
	);
}
