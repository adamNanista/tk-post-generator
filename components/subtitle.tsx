"use client";

import { useUIStore } from "@/stores/useUIStore";
import { colors } from "@/utils/colors";

type SubtitleProps = {
	text: string;
};

export default function Subtitle({ text }: SubtitleProps) {
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
		<h1 className="mt-[64px] text-[80px] leading-[80px]" style={{ color: colors[subtitleColor] }}>
			{boldify(text)}
		</h1>
	);
}
