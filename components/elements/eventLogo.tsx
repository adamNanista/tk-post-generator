"use client";

type EventLogoProps = {
	slug: string;
	useUIStore: ReturnType<typeof import("@/stores/useUIStore").getUIStore>;
};

export default function EventLogo({ slug, useUIStore }: EventLogoProps) {
	const spaces = useUIStore((state) => state.spaces);

	const eventLogoSpaceIndex = useUIStore((state) => state.eventLogoSpaceIndex);
	const eventLogoWidth = useUIStore((state) => state.eventLogoWidth);

	return <img src={`/${slug}-logo.svg`} alt="" style={{ width: eventLogoWidth + "%", marginBottom: spaces[eventLogoSpaceIndex] + "px" }} />;
}
