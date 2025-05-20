"use client";

import { useUIStore } from "@/stores/useUIStore";

type WidthControlProps = {
	label: string;
	name: string;
	valueGetter: (state: any) => number;
	valueSetter: (state: any) => (value: number) => void;
};

export default function WidthControl({ label, name, valueGetter, valueSetter }: WidthControlProps) {
	const value = useUIStore(valueGetter);
	const setValue = useUIStore(valueSetter);

	return (
		<fieldset className="space-y-2">
			<legend>{label}</legend>
			<input className="w-full" type="range" name={name} min="0" max="100" step="1" value={value} onChange={(e) => setValue(Number(e.target.value))} />
			<p>{value} %</p>
		</fieldset>
	);
}
