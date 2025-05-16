"use client";

import { useUIStore } from "@/stores/useUIStore";

export default function SubtitleWidthControl() {
	const subtitleWidth = useUIStore((state) => state.subtitleWidth);
	const setSubtitleWidth = useUIStore((state) => state.setSubtitleWidth);

	return (
		<fieldset className="space-y-2">
			<legend>Šírka nadpisu</legend>
			<input className="w-full" type="range" name="subtitleWidth" min="0" max="100" step="1" value={subtitleWidth} onChange={(e) => setSubtitleWidth(Number(e.target.value))} />
			<p>{subtitleWidth} %</p>
		</fieldset>
	);
}
