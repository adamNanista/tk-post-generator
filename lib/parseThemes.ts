type ProgramSection = {
	name: string;
	items: ProgramItem[];
};

type ProgramItem = {
	name: string;
	tags?: string[];
};

export function parseThemes(program: ProgramSection[]): Record<string, string> {
	const parsed: Record<string, string> = {};

	program.forEach((section) => {
		section.items?.forEach((item) => {
			const tags = item.tags || [];

			if (tags.includes("diskusia")) {
				const [key, ...rest] = item.name.split(":");
				if (key && rest.length) {
					parsed[key.trim()] = rest.join(":").trim();
				}
				return;
			}
		});
	});

	return parsed;
}
