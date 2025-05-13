export default function SpeakersList({ speakers }: { speakers: Record<string, any> }) {
	const speakerEntries = Object.values(speakers);
	return (
		<ul>
			{speakerEntries.map((speaker, index) => (
				<li key={index}>{speaker.person?.fullname ?? "Neznáme meno"}</li>
			))}
		</ul>
	);
}
