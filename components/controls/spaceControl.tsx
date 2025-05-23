"use client";

type SpaceControlProps = {
	label: string;
	name: string;
	spacesGetter: (state: any) => number[];
	indexGetter: (state: any) => number;
	indexSetter: (state: any) => (index: number) => void;
	useUIStore: ReturnType<typeof import("@/stores/useUIStore").getUIStore>;
};

export default function SpaceControl({ label, name, spacesGetter, indexGetter, indexSetter, useUIStore }: SpaceControlProps) {
	const spaces = useUIStore(spacesGetter);
	const index = useUIStore(indexGetter);
	const setIndex = useUIStore(indexSetter);

	return (
		<fieldset className="space-y-2">
			<legend>{label}</legend>
			<input className="w-full" type="range" name={name} min="0" max={spaces.length - 1} step="1" value={index} onChange={(e) => setIndex(Number(e.target.value))} />
			<p>{spaces[index]} px</p>
		</fieldset>
	);
}
