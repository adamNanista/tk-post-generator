"use client";

type CallToActionProps = {
	useUIStore: ReturnType<typeof import("@/stores/useUIStore").getUIStore>;
};

export default function CallToAction({ useUIStore }: CallToActionProps) {
	const primaryColor = useUIStore((state) => state.primaryColor);

	return (
		<div className="shrink-0 p-[24px] bg-[#232323]">
			<p className="text-[40px] font-light leading-[48px] text-center" style={{ color: primaryColor }}>
				Zaregistrujte sa ešte dnes, <span className="font-black">počet miest je limitovaný!</span>
			</p>
		</div>
	);
}
