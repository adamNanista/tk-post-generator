import Link from "next/link";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;

	return (
		<div className="p-8 space-y-8">
			<ul>
				<li>
					<Link href="/">Späť na eventy</Link>
				</li>
			</ul>
			<ul className="space-y-2">
				<li>
					<Link href={`/${slug}/basic-post`}>Basic post</Link>
				</li>
				<li>
					<Link href={`/${slug}/theme-post`}>Theme post</Link>
				</li>
			</ul>
		</div>
	);
}
