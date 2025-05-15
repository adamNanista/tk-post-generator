import BasicPost from "@/components/posts/basicPost";

async function getEventData() {
	try {
		const res = await fetch("https://tk-stage.k8s-onpremise.newsandmedia.sk/event/reality-development-2025?json=1", { cache: "no-store" });

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
	const { data, error } = await getEventData();

	if (error) {
		return <p>{error}</p>;
	}

	return <BasicPost data={data} />;
}
