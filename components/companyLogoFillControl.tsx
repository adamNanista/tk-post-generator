"use client";

import { useUIStore } from "@/stores/useUIStore";

export default function CompanyLogoFillControl() {
	const companyLogoFill = useUIStore((state) => state.companyLogoFill);
	const setCompanyLogoFill = useUIStore((state) => state.setCompanyLogoFill);

	return (
		<div>
			<fieldset>
				<legend>Farba loga TREND konferencie</legend>
				<label>
					<input type="radio" name="companyLogoFill" value="dark" checked={companyLogoFill === "dark"} onChange={() => setCompanyLogoFill("dark")} /> Tmavá
				</label>
				<label>
					<input type="radio" name="companyLogoFill" value="light" checked={companyLogoFill === "light"} onChange={() => setCompanyLogoFill("light")} /> Svetlá
				</label>
			</fieldset>
		</div>
	);
}
