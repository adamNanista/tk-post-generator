"use client";

type SubtitleProps = {
	text: string;
	useUIStore: ReturnType<typeof import("@/stores/useUIStore").getUIStore>;
};

export default function Subtitle({ text, useUIStore }: SubtitleProps) {
	const colors = useUIStore((state) => state.colors);
	const sizes = useUIStore((state) => state.sizes);
	const spaces = useUIStore((state) => state.spaces);

	const subtitleSpaceIndex = useUIStore((state) => state.subtitleSpaceIndex);
	const subtitleSizeIndex = useUIStore((state) => state.subtitleSizeIndex);
	const subtitleWidth = useUIStore((state) => state.subtitleWidth);
	const subtitleColor = useUIStore((state) => state.subtitleColor);
	const subtitleHighlightedWords = useUIStore((state) => state.subtitleHighlightedWords);

	const boldify = (str: string) => {
		return str.split(" ").map((word, index) => {
			if (subtitleHighlightedWords.includes(word.toLowerCase())) {
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
		<h1 className="font-light leading-none text-pretty" style={{ width: subtitleWidth + "%", marginBottom: spaces[subtitleSpaceIndex] + "px", color: colors[subtitleColor], fontSize: sizes[subtitleSizeIndex] + "px" }}>
			{boldify(text)}
		</h1>
	);
}
