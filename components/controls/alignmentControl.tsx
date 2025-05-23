"use client";

type AlignmentControlProps = {
	label: string;
	name: string;
	valueGetter: (state: any) => string;
	valueSetter: (state: any) => (index: string) => void;
	useUIStore: ReturnType<typeof import("@/stores/useUIStore").getUIStore>;
};

export default function AlignmentControl({ label, name, valueGetter, valueSetter, useUIStore }: AlignmentControlProps) {
	const value = useUIStore(valueGetter);
	const setValue = useUIStore(valueSetter);

	return (
		<fieldset className="space-y-2">
			<legend>{label}</legend>
			<div className="space-x-6">
				<label>
					<input type="radio" name={name} value="top" checked={value === "top"} onChange={() => setValue("top")} /> Hore
				</label>
				<label>
					<input type="radio" name={name} value="bottom" checked={value === "bottom"} onChange={() => setValue("bottom")} /> Dole
				</label>
			</div>
		</fieldset>
	);
}
