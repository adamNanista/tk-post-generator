"use client";

type SpeakersProps = {
	title: string;
	description: string;
	speakers: {
		fullname: string;
		job: string;
		poster: string;
	}[];
	useUIStore: ReturnType<typeof import("@/stores/useUIStore").getUIStore>;
};

export default function Speakers({ title, description, speakers, useUIStore }: SpeakersProps) {
	const colors = useUIStore((state) => state.colors);
	const sizes = useUIStore((state) => state.sizes);
	const spaces = useUIStore((state) => state.spaces);

	const themeWidth = useUIStore((state) => state.themeWidth);
	const themeSpaceIndex = useUIStore((state) => state.themeSpaceIndex);
	const themeBadgeColor = useUIStore((state) => state.themeBadgeColor);
	const themeBadgeBackgroundColor = useUIStore((state) => state.themeBadgeBackgroundColor);
	const themeBadgeSizeIndex = useUIStore((state) => state.themeBadgeSizeIndex);
	const themeBadgeSpaceIndex = useUIStore((state) => state.themeBadgeSpaceIndex);
	const themeTitleColor = useUIStore((state) => state.themeTitleColor);
	const themeTitleSizeIndex = useUIStore((state) => state.themeTitleSizeIndex);

	return (
		<div className="grow flex flex-col">
			<div className="shrink-0" style={{ width: themeWidth + "%", marginBottom: spaces[themeSpaceIndex] + "px" }}>
				{title && (
					<span className="inline-flex px-[0.5em] py-[0.375em] font-bold leading-none uppercase" style={{ marginBottom: spaces[themeBadgeSpaceIndex] + "px", color: colors[themeBadgeColor], fontSize: sizes[themeBadgeSizeIndex] + "px", backgroundColor: colors[themeBadgeBackgroundColor] }}>
						{title}
					</span>
				)}
				<h2 className="font-[Guardian_Egyp] text-[64px] font-bold leading-none text-pretty" style={{ color: colors[themeTitleColor], fontSize: sizes[themeTitleSizeIndex] + "px" }}>
					{description}
				</h2>
			</div>
			<div className="grow flex flex-col">
				<ul>
					{speakers.map((speaker, idx) => (
						<li key={idx} className="flex items-start text-[#232323]">
							<div className="shrink-0 relative before:block before:w-[344px] before:h-[344px] before:absolute before:-top-[12px] before:-left-[12px] before:border-4 before:border-white before:rounded-full">
								<img src={"https://tk-stage.k8s-onpremise.newsandmedia.sk" + speaker.poster} alt={speaker.fullname} className="w-[320px] h-[320px] relative rounded-full" />
							</div>

							<div className="self-center ml-[72px]">
								<h3 className="mb-[32px] text-[72px] font-black leading-none">{speaker.fullname}</h3>
								<p className="text-[40px] leading-[48px]">{speaker.job}</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
