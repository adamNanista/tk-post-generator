"use client";

import { useUIStore } from "@/stores/useUIStore";

export default function SubtitleSizeControl() {
	const subtitleSizes = useUIStore((state) => state.subtitleSizes);
	const subtitleSizeIndex = useUIStore((state) => state.subtitleSizeIndex);
	const setSubtitleSizeIndex = useUIStore((state) => state.setSubtitleSizeIndex);

	return (
		<fieldset className="space-y-2">
			<legend>Veľkosť písma nadpisu</legend>
			<input className="w-full" type="range" name="subtitleSize" min="0" max={subtitleSizes.length - 1} step="1" value={subtitleSizeIndex} onChange={(e) => setSubtitleSizeIndex(Number(e.target.value))} />
			<p>{subtitleSizes[subtitleSizeIndex]} px</p>
		</fieldset>
	);
}
