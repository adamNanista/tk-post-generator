"use client";

type SizeControlProps = {
	label: string;
	name: string;
	sizesGetter: (state: any) => number[];
	indexGetter: (state: any) => number;
	indexSetter: (state: any) => (index: number) => void;
	useUIStore: ReturnType<typeof import("@/stores/useUIStore").getUIStore>;
};

export default function SizeControl({ label, name, sizesGetter, indexGetter, indexSetter, useUIStore }: SizeControlProps) {
	const sizes = useUIStore(sizesGetter);
	const index = useUIStore(indexGetter);
	const setIndex = useUIStore(indexSetter);

	return (
		<fieldset className="space-y-2">
			<legend>{label}</legend>
			<input className="w-full" type="range" name={name} min="0" max={sizes.length - 1} step="1" value={index} onChange={(e) => setIndex(Number(e.target.value))} />
			<p>{sizes[index]} px</p>
		</fieldset>
	);
}
