"use client";

import { useUIStore } from "@/stores/useUIStore";

export default function EventLogo() {
	const eventLogoWidth = useUIStore((state) => state.eventLogoWidth);

	return <img src="/reality-development-2025-logo.svg" alt="" width={eventLogoWidth + "%"} className="mt-[88px]" />;
}
