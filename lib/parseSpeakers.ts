type Speaker = {
	fullname: string;
	job: string;
	poster: string;
};

type ParsedSpeakers = {
	title: string;
	subTitle: string;
	description: string;
	speakers: Speaker[];
};

function stripHtmlTags(html: string): string {
	return html.replace(/<[^>]+>/g, "");
}

function getSpeakers(speakersData: any): Speaker[] {
	if (!speakersData || typeof speakersData !== "object") return [];
	return Object.values(speakersData).map((entry: any) => {
		const person = entry.person;
		return {
			fullname: person.fullname,
			job: person.jobs?.[0]?.job || "",
			poster: entry.poster?.paths?.xl || "",
		};
	});
}

export function parseSpeakers(item: any): ParsedSpeakers | null {
	const tags = item.tags || [];

	if (tags.includes("sive")) return null;

	const speakers = getSpeakers(item.speakers);

	if ((tags.includes("group_start") || tags.includes("in_group")) && !tags.includes("diskusia")) {
		const rawDesc = stripHtmlTags(item.description || "");
		const [title, ...rest] = item.name.split(/:(.+)/);
		const [subTitle, ...subRest] = rawDesc.split(/:(.+)/);
		return {
			title: title.trim(),
			subTitle: subTitle.trim(),
			description: (subRest[0] || "").trim(),
			speakers,
		};
	}

	if (tags.length === 0) {
		return {
			title: "",
			subTitle: "",
			description: item.name,
			speakers,
		};
	}

	const [title, ...rest] = item.name.split(/:(.+)/);
	return {
		title: title.trim(),
		subTitle: "",
		description: (rest[0] || "").trim(),
		speakers,
	};
}
