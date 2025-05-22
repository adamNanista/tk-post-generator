"use state";

import { useUIStore } from "@/stores/useUIStore";

type ColorControlProps = {
	label: string;
	name: string;
	valueGetter: (state: any) => string;
	valueSetter: (state: any) => (value: string) => void;
};

export default function ColorControl({ label, name, valueGetter, valueSetter }: ColorControlProps) {
	const colors = useUIStore((state) => state.colors);

	const value = useUIStore(valueGetter);
	const setValue = useUIStore(valueSetter);

	return (
		<fieldset className="space-y-2">
			<legend>{label}</legend>
			<div className="flex flex-col space-y-2">
				{Object.entries(colors).map(([key, index]) => (
					<label key={key} className="inline-flex items-center space-x-2">
						<input type="radio" name={name} value={key} checked={value === key} onChange={() => setValue(key)} />
						<span>{key}</span>
					</label>
				))}
			</div>
		</fieldset>
	);
}
