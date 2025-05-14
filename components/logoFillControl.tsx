"use client";

import { useUIStore } from "@/stores/useUIStore";

export default function LogoFillControl() {
	const logoFill = useUIStore((state) => state.logoFill);
	const setLogoFill = useUIStore((state) => state.setLogoFill);

	return (
		<div>
			<fieldset>
				<legend>Farba loga</legend>
				<label>
					<input type="radio" name="logoFill" value="dark" checked={logoFill === "dark"} onChange={() => setLogoFill("dark")} /> Tmavá
				</label>
				<label>
					<input type="radio" name="logoFill" value="light" checked={logoFill === "light"} onChange={() => setLogoFill("light")} /> Svetlá
				</label>
			</fieldset>
		</div>
	);
}
