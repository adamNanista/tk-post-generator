"use client";

type SubtitleProps = {
	text: string;
};

export default function Subtitle({ text }: SubtitleProps) {
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

	return <h1 className="mt-[64px] text-[#232323] text-[80px] leading-[80px]">{boldify(text)}</h1>;
}
