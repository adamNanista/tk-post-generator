"use client";

import { useUIStore } from "@/stores/useUIStore";

export default function EventLogo() {
	const spaces = useUIStore((state) => state.spaces);
	const eventLogoSpaceIndex = useUIStore((state) => state.eventLogoSpaceIndex);
	const eventLogoWidth = useUIStore((state) => state.eventLogoWidth);

	return <img src="/reality-development-2025-logo.svg" alt="" style={{ width: eventLogoWidth + "%", marginBottom: spaces[eventLogoSpaceIndex] + "px" }} />;
}
