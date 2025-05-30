"use client";

import { useState } from "react";

type HighlightedWordsControlProps = {
	label: string;
	name: string;
	valueGetter: (state: any) => string[];
	valueSetter: (state: any) => (index: string[]) => void;
	useUIStore: ReturnType<typeof import("@/stores/useUIStore").getUIStore>;
};

export default function HighlightedWordsControl({ label, name, valueGetter, valueSetter, useUIStore }: HighlightedWordsControlProps) {
	const value = useUIStore(valueGetter);
	const setValue = useUIStore(valueSetter);

	const [inputValue, setInputValue] = useState("");

	const addWords = (input: string) => {
		const newWords = input
			.split(",")
			.map((word) => word.trim())
			.filter((word) => word.length > 0);

		const updatedWords = Array.from(new Set([...value, ...newWords]));

		setValue(updatedWords);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;

		if (value.endsWith(",")) {
			addWords(value);
			setInputValue("");
		} else {
			setInputValue(value);
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			e.preventDefault();
			addWords(inputValue);
			setInputValue("");
		}
	};

	const removeWord = (wordToRemove: string) => {
		setValue(value.filter((w) => w !== wordToRemove));
	};

	return (
		<fieldset className="space-y-2">
			<legend>{label}</legend>
			<input className="w-full px-3 py-1 bg-white border border-neutral-300 rounded" type="text" value={inputValue} onChange={handleChange} onKeyDown={handleKeyDown} />
			<div>
				{value.map((word, index) => (
					<div key={index}>
						<span>{word}</span>
						<button onClick={() => removeWord(word)}>✕</button>
					</div>
				))}
			</div>
		</fieldset>
	);
}
