"use client";

type EventLogoProps = {
	useUIStore: ReturnType<typeof import("@/stores/useUIStore").getUIStore>;
};

export default function EventLogo({ useUIStore }: EventLogoProps) {
	const spaces = useUIStore((state) => state.spaces);

	const eventLogoSpaceIndex = useUIStore((state) => state.eventLogoSpaceIndex);
	const eventLogoWidth = useUIStore((state) => state.eventLogoWidth);

	return <img src="/reality-development-2025-logo.svg" alt="" style={{ width: eventLogoWidth + "%", marginBottom: spaces[eventLogoSpaceIndex] + "px" }} />;
}
