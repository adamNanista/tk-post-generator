"use client";

import { useUIStore } from "@/stores/useUIStore";

type SubtitleProps = {
	text: string;
};

export default function Subtitle({ text }: SubtitleProps) {
	const colors = useUIStore((state) => state.colors);
	const sizes = useUIStore((state) => state.sizes);
	const spaces = useUIStore((state) => state.spaces);

	const subtitleSpaceIndex = useUIStore((state) => state.subtitleSpaceIndex);
	const subtitleSizeIndex = useUIStore((state) => state.subtitleSizeIndex);
	const subtitleWidth = useUIStore((state) => state.subtitleWidth);
	const subtitleColor = useUIStore((state) => state.subtitleColor);

	const boldWords = ["budúcnosť", "trhu"];

	const boldify = (str: string) => {
		return str.split(" ").map((word, index) => {
			if (boldWords.includes(word.toLowerCase())) {
				return (
					<strong key={index} className="font-black">
						{word + " "}
					</strong>
				);
			}

			return word + " ";
		});
	};

	return (
		<h1 className="font-light leading-none text-pretty" style={{ width: subtitleWidth + "%", marginBottom: spaces[subtitleSpaceIndex], color: colors[subtitleColor], fontSize: sizes[subtitleSizeIndex] }}>
			{boldify(text)}
		</h1>
	);
}
