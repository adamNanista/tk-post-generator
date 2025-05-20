"use state";

import { useUIStore } from "@/stores/useUIStore";

type ColorControlProps = {
	label: string;
	name: string;
	valueGetter: (state: any) => string;
	valueSetter: (state: any) => (value: string) => void;
};

export default function ColorControl({ label, name, valueGetter, valueSetter }: ColorControlProps) {
	const value = useUIStore(valueGetter);
	const setValue = useUIStore(valueSetter);

	return (
		<fieldset className="space-y-2">
			<legend>{label}</legend>
			<div className="space-x-6">
				<label>
					<input type="radio" name={name} value="dark" checked={value === "dark"} onChange={() => setValue("dark")} /> Tmavá
				</label>
				<label>
					<input type="radio" name={name} value="light" checked={value === "light"} onChange={() => setValue("light")} /> Svetlá
				</label>
			</div>
		</fieldset>
	);
}
