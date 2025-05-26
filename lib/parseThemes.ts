type ParsedTheme = {
	title: string;
	description: string;
};

export function parseThemes(item: any): ParsedTheme | null {
	const tags = item.tags || [];

	if (tags.includes("sive")) return null;

	if (tags.includes("diskusia")) {
		const [title, ...rest] = item.name.split(/:(.+)/);
		return {
			title: title.trim(),
			description: (rest[0] || "").trim(),
		};
	}

	return null;
}
