"use client";

type SpeakersProps = {
	title: string;
	description: string;
	speakers: {
		fullname: string;
		job: string;
	}[];
	useUIStore: ReturnType<typeof import("@/stores/useUIStore").getUIStore>;
};

export default function Speakers({ title, description, speakers, useUIStore }: SpeakersProps) {
	const colors = useUIStore((state) => state.colors);
	const sizes = useUIStore((state) => state.sizes);
	const spaces = useUIStore((state) => state.spaces);

	const themeWidth = useUIStore((state) => state.themeWidth);
	const themeBadgeColor = useUIStore((state) => state.themeBadgeColor);
	const themeBadgeBackgroundColor = useUIStore((state) => state.themeBadgeBackgroundColor);
	const themeBadgeSizeIndex = useUIStore((state) => state.themeBadgeSizeIndex);
	const themeBadgeSpaceIndex = useUIStore((state) => state.themeBadgeSpaceIndex);
	const themeTitleColor = useUIStore((state) => state.themeTitleColor);
	const themeTitleSizeIndex = useUIStore((state) => state.themeTitleSizeIndex);

	return (
		<div>
			<div style={{ width: themeWidth + "%" }}>
				{title && (
					<span className="inline-flex px-[0.5em] py-[0.375em] font-bold leading-none uppercase" style={{ marginBottom: spaces[themeBadgeSpaceIndex] + "px", color: colors[themeBadgeColor], fontSize: sizes[themeBadgeSizeIndex] + "px", backgroundColor: colors[themeBadgeBackgroundColor] }}>
						{title}
					</span>
				)}
				<h2 className="font-[Guardian_Egyp] text-[64px] font-bold leading-none text-pretty" style={{ color: colors[themeTitleColor], fontSize: sizes[themeTitleSizeIndex] + "px" }}>
					{description}
				</h2>
			</div>
			<ul>
				{speakers.map((speaker, idx) => (
					<li key={idx}>
						{speaker.fullname}
						{speaker.job}
					</li>
				))}
			</ul>
		</div>
	);
}
