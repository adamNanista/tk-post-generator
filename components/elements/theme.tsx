"use client";

type ThemeProps = {
	title: string;
	description: string;
};

export default function Theme({ title, description }: ThemeProps) {
	return (
		<div className="space-y-6">
			{title && <span className="inline-flex px-4 py-3 text-[#ffffff] text-[32px] font-bold leading-none uppercase bg-[#232323]">{title}</span>}
			<h2 className="font-[Guardian_Egyp] text-[#232323] text-[60px] font-bold leading-none text-pretty">{description}</h2>
		</div>
	);
}
