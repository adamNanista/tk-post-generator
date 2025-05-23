"use client";

import { HexColorInput } from "react-colorful";

type ColorPickerProps = {
	label: string;
	name: string;
	valueGetter: (state: any) => string;
	valueSetter: (state: any) => (index: string) => void;
	useUIStore: ReturnType<typeof import("@/stores/useUIStore").getUIStore>;
};

export default function ColorPicker({ label, name, valueGetter, valueSetter, useUIStore }: ColorPickerProps) {
	const value = useUIStore(valueGetter);
	const setValue = useUIStore(valueSetter);

	return (
		<fieldset className="space-y-2">
			<legend>{label}</legend>
			<div className="flex items-center space-x-4">
				<HexColorInput className="w-full px-3 py-1 bg-white border border-neutral-300 rounded" name={name} color={value} onChange={setValue} prefixed />
				<div className="shrink-0 p-4 border border-neutral-300 rounded" style={{ backgroundColor: value }}></div>
			</div>
		</fieldset>
	);
}
