type ProgramSection = {
	name: string;
	items: ProgramItem[];
};

type ProgramItem = {
	name: string;
	tags?: string[];
};

type ParsedProgramItem = {
	title: string;
	description: string;
};

export function parseThemes(program: ProgramSection[]): ParsedProgramItem[] {
	const parsed: ParsedProgramItem[] = [];

	program.forEach((section) => {
		section.items?.forEach((item) => {
			const tags = item.tags || [];

			if (tags.includes("sive")) return;

			let title = "";
			let description = item.name;

			if (tags.includes("diskusia")) {
				const [k, ...rest] = item.name.split(":");
				title = k.trim();
				description = rest.join(":").trim();

				parsed.push({ title, description });
			}
		});
	});

	return parsed;
}
