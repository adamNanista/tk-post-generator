"use client";

import { useRef } from "react";
import { toPng } from "html-to-image";
import { useUIStore } from "@/stores/useUIStore";

import EventColorControl from "@/components/controls/eventColorControl";

import CompanyLogoFillControl from "@/components/controls/companyLogoFillControl";
import CompanyLogo from "@/components/elements/companyLogo";

import EventLogoWidthControl from "@/components/controls/eventLogoWidthControl";
import EventLogo from "@/components/elements/eventLogo";

import SubtitleColorControl from "@/components/controls/subtitleColorControl";
import Subtitle from "@/components/elements/subtitle";

import ScheduleInfo from "@/components/elements/scheduleInfo";
import ScheduleInfoSizeControl from "@/components/controls/scheduleInfoSizeControl";
import ScheduleInfoWidthControl from "@/components/controls/scheduleInfoWidthControl";

export default function BasicPost({ data }: { data: any }) {
	const postRef = useRef<HTMLDivElement>(null);

	const handleDownload = async () => {
		if (postRef.current) {
			const dataUrl = await toPng(postRef.current, {
				cacheBust: true,
			});
			const link = document.createElement("a");
			link.download = "basicPost.png";
			link.href = dataUrl;
			link.click();
		}
	};

	const eventColor = useUIStore((state) => state.eventColor);

	return (
		<div className="flex min-h-screen">
			<div className="flex flex-col w-2/12 p-6 space-y-6 bg-neutral-100">
				<h1 className="text-2xl font-black">Základný Post 1080x1350</h1>
				<EventColorControl />
				<CompanyLogoFillControl />
				<EventLogoWidthControl />
				<SubtitleColorControl />
				<ScheduleInfoSizeControl />
				<ScheduleInfoWidthControl />
				<button className="cursor-pointer mt-auto px-6 py-3 text-white font-black bg-blue-500 rounded" onClick={handleDownload}>
					Download
				</button>
			</div>
			<div className="w-[540px] h-[675px] m-auto overflow-hidden">
				<div className="origin-top-left scale-50">
					<div ref={postRef} className="flex flex-col w-[1080px] h-[1350px] font-[Panton_Narrow] bg-[url(/reality-development-2025-basic-bg.png)]" style={{ backgroundColor: eventColor }}>
						<div className="grow shrink-0 flex flex-col px-[96px] pt-[96px] pb-[48px]">
							<CompanyLogo />
							<EventLogo />
							<Subtitle text={data.event.additionalName} />
							<ScheduleInfo day={data.event.date.from.day} month={data.event.date.from.month_human} venue={data.event.address.info} city={data.event.address.city} />
						</div>
						{/* CTA start */}
						<div className="shrink-0 p-[24px] bg-[#232323]">
							<p className="text-[40px] leading-[48px] text-center" style={{ color: eventColor }}>
								Zaregistrujte sa ešte dnes, <span className="font-black">počet miest je limitovaný!</span>
							</p>
						</div>
						{/* CTA end */}
					</div>
				</div>
			</div>
		</div>
	);
}
