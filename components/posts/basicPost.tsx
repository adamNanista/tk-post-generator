"use client";

import { useRef } from "react";
import { toPng } from "html-to-image";
import { useUIStore } from "@/stores/useUIStore";

import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";

import EventColorControl from "@/components/controls/eventColorControl";

import CompanyLogoFillControl from "@/components/controls/companyLogoFillControl";
import CompanyLogo from "@/components/elements/companyLogo";

import EventLogoWidthControl from "@/components/controls/eventLogoWidthControl";
import EventLogo from "@/components/elements/eventLogo";

import SubtitleWidthControl from "@/components/controls/subtitleWidthControl";
import SubtitleColorControl from "@/components/controls/subtitleColorControl";
import SubtitleSizeControl from "@/components/controls/subtitleSizeControl";
import Subtitle from "@/components/elements/subtitle";

import ScheduleInfoWidthControl from "@/components/controls/scheduleInfoWidthControl";
import ScheduleInfoColorControl from "@/components/controls/scheduleInfoColorControl";
import ScheduleInfoSizeControl from "@/components/controls/scheduleInfoSizeControl";
import ScheduleInfo from "@/components/elements/scheduleInfo";

import DownloadIcon from "@mui/icons-material/Download";
import CallToAction from "@/components/elements/callToAction";

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
			<div className="flex flex-col w-1/5 min-w-sm max-h-screen overflow-auto p-8 space-y-8 bg-neutral-50 border-r border-r-neutral-200">
				<div className="space-y-2">
					<h1 className="text-2xl font-black text-pretty">{data.event.name}</h1>
					<p>Základný post 1080x1350</p>
				</div>
				<Accordion>
					<AccordionSummary>
						<Typography>Všeobecné</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							<EventColorControl />
						</Typography>
					</AccordionDetails>
				</Accordion>

				<CompanyLogoFillControl />
				<EventLogoWidthControl />
				<SubtitleWidthControl />
				<SubtitleColorControl />
				<SubtitleSizeControl />
				<ScheduleInfoWidthControl />
				<ScheduleInfoColorControl />
				<ScheduleInfoSizeControl />
			</div>
			<div className="m-auto space-y-6">
				<div className="w-[540px] h-[675px] overflow-hidden">
					<div className="origin-top-left scale-50">
						<div ref={postRef} className="flex flex-col w-[1080px] h-[1350px] font-[Panton_Narrow] bg-[url(/reality-development-2025-basic-bg.png)]" style={{ backgroundColor: eventColor }}>
							<div className="grow shrink-0 flex flex-col px-[96px] pt-[96px] pb-[48px]">
								<CompanyLogo />
								<EventLogo />
								<Subtitle text={data.event.additionalName} />
								<ScheduleInfo day={data.event.date.from.day} month={data.event.date.from.month_human} venue={data.event.address.info} city={data.event.address.city} />
							</div>
							<CallToAction />
						</div>
					</div>
				</div>
				<div className="flex justify-end">
					<button className="inline-flex items-center space-x-1.5 cursor-pointer px-4 py-2 text-neutral-600 bg-neutral-50 border border-neutral-200 rounded-full" onClick={handleDownload}>
						<DownloadIcon fontSize="small" />
						<span>Stiahnuť</span>
					</button>
				</div>
			</div>
		</div>
	);
}
