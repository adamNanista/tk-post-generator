"use client";

import { useUIStore } from "@/stores/useUIStore";
import { colors } from "@/utils/colors";

type SubtitleProps = {
	text: string;
};

export default function Subtitle({ text }: SubtitleProps) {
	const spaces = useUIStore((state) => state.spaces);
	const subtitleSpaceIndex = useUIStore((state) => state.subtitleSpaceIndex);
	const sizes = useUIStore((state) => state.sizes);
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
		<h1 className="leading-none" style={{ width: subtitleWidth + "%", marginBottom: spaces[subtitleSpaceIndex], color: colors[subtitleColor], fontSize: sizes[subtitleSizeIndex] }}>
			{boldify(text)}
		</h1>
	);
}
