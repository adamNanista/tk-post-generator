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
	const alignments = useUIStore((state) => state.alignments);

	const themeWidth = useUIStore((state) => state.themeWidth);
	const themeSpaceIndex = useUIStore((state) => state.themeSpaceIndex);
	const themeBadgeColor = useUIStore((state) => state.themeBadgeColor);
	const themeBadgeBackgroundColor = useUIStore((state) => state.themeBadgeBackgroundColor);
	const themeBadgeSizeIndex = useUIStore((state) => state.themeBadgeSizeIndex);
	const themeBadgeSpaceIndex = useUIStore((state) => state.themeBadgeSpaceIndex);
	const themeTitleColor = useUIStore((state) => state.themeTitleColor);
	const themeTitleSizeIndex = useUIStore((state) => state.themeTitleSizeIndex);
	const speakersAlignment = useUIStore((state) => state.speakersAlignment);
	const speakersSpaceIndex = useUIStore((state) => state.speakersSpaceIndex);

	const sizeClassMap = {
		sm: {
			columns: "grid-cols-2",
			container: "gap-[24px]",
			image: "w-[112px] h-[112px] text-[112px]",
			title: "mb-[12px] text-[36px]",
			description: "text-[20px] leading-[24px]",
		},
		md: {
			columns: "grid-cols-2",
			container: "gap-[36px]",
			image: "w-[160px] h-[160px] text-[160px]",
			title: "mb-[12px] text-[36px]",
			description: "text-[20px] leading-[24px]",
		},
		lg: {
			columns: "grid-cols-1",
			container: "gap-[36px]",
			image: "w-[160px] h-[160px] text-[160px]",
			title: "mb-[24px] text-[48px]",
			description: "text-[24px] leading-[32px]",
		},
		xl: {
			columns: "grid-cols-1",
			container: "gap-[72px]",
			image: "w-[320px] h-[320px] text-[320px]",
			title: "mb-[32px] text-[72px]",
			description: "text-[40px] leading-[48px]",
		},
	};

	let size: "xl" | "lg" | "md" | "sm";

	switch (speakers.length) {
		case 1:
			size = "xl";
			break;
		case 2:
			size = "lg";
			break;
		case 3:
		case 4:
			size = "md";
			break;
		default:
			size = "sm";
			break;
	}

	const classes = sizeClassMap[size];

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
			<div className="grow flex flex-col" style={{ justifyContent: alignments[speakersAlignment] }}>
				<ul className={`grid ${classes.columns} w-full gap-x-[48px]`} style={{ rowGap: spaces[speakersSpaceIndex] + "px" }}>
					{speakers.map((speaker, idx) => (
						<li key={idx}>
							<div className={`flex items-start ${classes.container}`}>
								<div className={`shrink-0 ${classes.image} relative before:block before:absolute before:top-[-0.0375em] before:right-[-0.0375em] before:bottom-[-0.0375em] before:left-[-0.0375em] before:border-[0.0125em] before:border-white before:rounded-full`}>
									<img src={"https://tk-stage.k8s-onpremise.newsandmedia.sk" + speaker.poster} alt={speaker.fullname} className="absolute w-full h-full top-0 left-0 rounded-full" />
								</div>
								<div className="self-center text-[#232323]">
									<h3 className={`${classes.title} font-black leading-none`}>{speaker.fullname}</h3>
									<p className={`${classes.description}`}>{speaker.job}</p>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
