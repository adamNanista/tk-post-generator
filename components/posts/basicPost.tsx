"use client";

import { useRef } from "react";
import { toPng } from "html-to-image";

import CompanyLogoFillControl from "@/components/companyLogoFillControl";
import CompanyLogo from "@/components/companyLogo";

import EventLogoWidthControl from "@/components/eventLogoWidthControl";
import EventLogo from "@/components/eventLogo";

import SubtitleColorControl from "@/components/subtitleColorControl";
import Subtitle from "@/components/subtitle";

import ScheduleInfo from "../scheduleInfo";
import ScheduleInfoSizeControl from "../scheduleInfoSizeControl";

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

	return (
		<div>
			<CompanyLogoFillControl />
			<EventLogoWidthControl />
			<SubtitleColorControl />
			<ScheduleInfoSizeControl />
			<div ref={postRef} className="flex flex-col w-[1080px] h-[1350px] font-[Panton_Narrow] bg-[#b98362] bg-[url(/reality-development-2025-bg.png)]">
				<div className="grow shrink-0 flex flex-col px-[96px] pt-[96px] pb-[48px]">
					<CompanyLogo />
					<EventLogo />
					<Subtitle text={data.event.additionalName} />
					<ScheduleInfo day={data.event.date.from.day} month={data.event.date.from.month_human} venue={data.event.address.info} city={data.event.address.city} />
				</div>
				{/* CTA start */}
				<div className="shrink-0 p-[24px] bg-[#232323]">
					<p className="text-[#b98362] text-[40px] leading-[48px] text-center">
						Zaregistrujte sa ešte dnes, <span className="font-black">počet miest je limitovaný!</span>
					</p>
				</div>
				{/* CTA end */}
			</div>
			<button onClick={handleDownload}>Download</button>
		</div>
	);
}
