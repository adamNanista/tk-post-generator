"use client";

import { useUIStore } from "@/stores/useUIStore";

export default function EventLogo() {
	const eventLogoWidth = useUIStore((state) => state.eventLogoWidth);

	return <img className="mt-[96px]" src="/reality-development-2025-logo.svg" alt="" style={{ width: eventLogoWidth + "%" }} />;
}
