"use client";

import { useUIStore } from "@/stores/useUIStore";

export default function SubtitleColorControl() {
	const subtitleColor = useUIStore((state) => state.subtitleColor);
	const setSubtitleColor = useUIStore((state) => state.setSubtitleColor);

	return (
		<div>
			<fieldset>
				<legend>Farba nadpisu</legend>
				<label>
					<input type="radio" name="subtitleColor" value="dark" checked={subtitleColor === "dark"} onChange={() => setSubtitleColor("dark")} /> Tmavá
				</label>
				<label>
					<input type="radio" name="subtitleColor" value="light" checked={subtitleColor === "light"} onChange={() => setSubtitleColor("light")} /> Svetlá
				</label>
			</fieldset>
		</div>
	);
}
