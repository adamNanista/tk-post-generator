import Link from "next/link";

type EventProps = {
	name: string;
	slugs: string[];
};

async function getEvents() {
	try {
		const res = await fetch("https://tk-stage.k8s-onpremise.newsandmedia.sk/eventy?json=1", { cache: "no-store" });

		if (!res.ok) {
			return { error: `Error: ${res.status}` };
		}

		const data = await res.json();
		return { data };
	} catch (err) {
		console.error("Fetch failed:", err);

		return { error: "Failed to fetch" };
	}
}

export default async function Home() {
	const { data, error } = await getEvents();

	if (error) {
		return <p>{error}</p>;
	}

	return (
		<ul>
			{data.events.map((event: EventProps, idx: number) => (
				<li key={idx}>
					<Link href={event.slugs[0]}>{event.name}</Link>
				</li>
			))}
		</ul>
	);
}
