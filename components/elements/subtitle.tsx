"use client";

import { useUIStore } from "@/stores/useUIStore";
import { colors } from "@/utils/colors";

type SubtitleProps = {
	text: string;
};

export default function Subtitle({ text }: SubtitleProps) {
	const subtitleWidth = useUIStore((state) => state.subtitleWidth);
	const subtitleColor = useUIStore((state) => state.subtitleColor);
	const subtitleSizes = useUIStore((state) => state.subtitleSizes);
	const subtitleSizeIndex = useUIStore((state) => state.subtitleSizeIndex);

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
		<h1 className="mt-[64px] leading-none" style={{ width: subtitleWidth + "%", color: colors[subtitleColor], fontSize: subtitleSizes[subtitleSizeIndex] }}>
			{boldify(text)}
		</h1>
	);
}
