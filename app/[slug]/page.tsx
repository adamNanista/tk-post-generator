import Link from "next/link";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;

	return (
		<ul>
			<li>
				<Link href="/">Späť na eventy</Link>
			</li>
			<li>
				<Link href={`/${slug}/basic-post`}>Basic post</Link>
			</li>
			<li>
				<Link href={`/${slug}/theme-post`}>Theme post</Link>
			</li>
		</ul>
	);
}
