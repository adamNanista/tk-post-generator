type ProgramSection = {
	name: string;
	items: ProgramItem[];
};

type ProgramItem = {
	name: string;
	tags?: string[];
	speakers?: Record<string, { person: Speaker }>;
};

type Speaker = {
	fullname: string;
	jobs?: {
		job: string;
	}[];
};

type ParsedProgramItem = {
	title: string;
	description: string;
	speakers: {
		fullname: string;
		job: string;
	}[];
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

				const speakers: ParsedProgramItem["speakers"] = [];

				if (item.speakers && typeof item.speakers === "object") {
					for (const speakerId in item.speakers) {
						const person = item.speakers[speakerId]?.person;

						if (person && person.fullname) {
							speakers.push({
								fullname: person.fullname,
								job: person.jobs?.[0]?.job || "",
							});
						}
					}
				}

				parsed.push({ title, description, speakers });
			}
		});
	});

	return parsed;
}
