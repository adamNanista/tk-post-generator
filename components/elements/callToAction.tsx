"use client";

import { useUIStore } from "@/stores/useUIStore";

export default function CallToAction() {
	const primaryColor = useUIStore((state) => state.primaryColor);

	return (
		<div className="shrink-0 p-[24px] bg-[#232323]">
			<p className="text-[40px] font-light leading-[48px] text-center" style={{ color: primaryColor }}>
				Zaregistrujte sa ešte dnes, <span className="font-black">počet miest je limitovaný!</span>
			</p>
		</div>
	);
}
