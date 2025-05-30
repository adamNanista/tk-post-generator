import SpeakersPost from "@/components/posts/speakersPost";

async function getEventData(slug: string) {
	try {
		const res = await fetch(`https://tk-stage.k8s-onpremise.newsandmedia.sk/event/${slug}?json=1`, { cache: "no-store" });

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

export default async function Page({ params }: { params: { slug: string } }) {
	const { slug } = await params;

	const { data, error } = await getEventData(slug);

	if (error) {
		return <p>{error}</p>;
	}
	return <SpeakersPost slug={slug} data={data} />;
}
