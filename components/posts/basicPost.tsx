"use client";

import { useRef } from "react";
import { toPng } from "html-to-image";
import { useUIStore } from "@/stores/useUIStore";

import ColorPicker from "@/components/controls/colorPicker";
import WidthControl from "@/components/controls/widthControl";
import SpaceControl from "@/components/controls/spaceControl";
import ColorControl from "@/components/controls/colorControl";
import SizeControl from "@/components/controls/sizeControl";
import AlignmentControl from "@/components/controls/alignmentControl";

import CompanyLogo from "@/components/elements/companyLogo";
import EventLogo from "@/components/elements/eventLogo";
import Subtitle from "@/components/elements/subtitle";
import ScheduleInfo from "@/components/elements/scheduleInfo";
import CallToAction from "@/components/elements/callToAction";

import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import DownloadIcon from "@mui/icons-material/Download";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

	const primaryColor = useUIStore((state) => state.primaryColor);

	return (
		<div className="flex min-h-screen">
			<div className="flex flex-col w-1/5 min-w-sm max-h-screen overflow-auto p-8 space-y-8 bg-neutral-50 border-r border-r-neutral-200">
				<div className="space-y-2">
					<h1 className="text-2xl font-black text-pretty">{data.event.name}</h1>
					<p>Základný post 1080x1350</p>
				</div>
				<div>
					<Accordion disableGutters>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>Všeobecné</AccordionSummary>
						<AccordionDetails>
							<div className="space-y-6">
								<ColorPicker label="Primary farba" name="primaryColor" valueGetter={(state) => state.primaryColor} valueSetter={(state) => state.setPrimaryColor} />
								<ColorPicker label="Accent farba" name="accentColor" valueGetter={(state) => state.accentColor} valueSetter={(state) => state.setAccentColor} />
							</div>
						</AccordionDetails>
					</Accordion>
					<Accordion disableGutters>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>Logo TREND konferencie</AccordionSummary>
						<AccordionDetails>
							<div className="space-y-6">
								<ColorControl label="Farba" name="companyLogoFill" valueGetter={(state) => state.companyLogoFill} valueSetter={(state) => state.setCompanyLogoFill} />
								<SpaceControl label="Odsadenie" name="companyLogoSpace" spacesGetter={(state) => state.spaces} indexGetter={(state) => state.companyLogoSpaceIndex} indexSetter={(state) => state.setCompanyLogoSpaceIndex} />
							</div>
						</AccordionDetails>
					</Accordion>
					<Accordion disableGutters>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>Logo eventu</AccordionSummary>
						<AccordionDetails>
							<div className="space-y-6">
								<WidthControl label="Šírka" name="eventLogoWidth" valueGetter={(state) => state.eventLogoWidth} valueSetter={(state) => state.setEventLogoWidth} />
								<SpaceControl label="Odsadenie" name="eventLogoSpace" spacesGetter={(state) => state.spaces} indexGetter={(state) => state.eventLogoSpaceIndex} indexSetter={(state) => state.setEventLogoSpaceIndex} />
							</div>
						</AccordionDetails>
					</Accordion>
					<Accordion disableGutters>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>Nadpis</AccordionSummary>
						<AccordionDetails>
							<div className="space-y-6">
								<WidthControl label="Šírka" name="subtitleWidth" valueGetter={(state) => state.subtitleWidth} valueSetter={(state) => state.setSubtitleWidth} />
								<ColorControl label="Farba" name="subtitleColor" valueGetter={(state) => state.subtitleColor} valueSetter={(state) => state.setSubtitleColor} />
								<SizeControl label="Veľkosť písma" name="subtitleSize" sizesGetter={(state) => state.sizes} indexGetter={(state) => state.subtitleSizeIndex} indexSetter={(state) => state.setSubtitleSizeIndex} />
								<SpaceControl label="Odsadenie" name="subtitleSpace" spacesGetter={(state) => state.spaces} indexGetter={(state) => state.subtitleSpaceIndex} indexSetter={(state) => state.setSubtitleSpaceIndex} />
							</div>
						</AccordionDetails>
					</Accordion>
					<Accordion disableGutters>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>Dátum/miesto</AccordionSummary>
						<AccordionDetails>
							<div className="space-y-6">
								<AlignmentControl label="Zarovnanie dátumu" name="scheduleInfoAlignment" valueGetter={(state) => state.scheduleInfoAlignment} valueSetter={(state) => state.setScheduleInfoAlignment} />
								<WidthControl label="Šírka dátumu" name="scheduleInfoWidth" valueGetter={(state) => state.scheduleInfoWidth} valueSetter={(state) => state.setScheduleInfoWidth} />
								<ColorControl label="Farba dátumu" name="scheduleInfoColor" valueGetter={(state) => state.scheduleInfoColor} valueSetter={(state) => state.setScheduleInfoColor} />
								<SizeControl label="Veľkosť písma dátumu" name="scheduleInfoSize" sizesGetter={(state) => state.sizes} indexGetter={(state) => state.scheduleInfoSizeIndex} indexSetter={(state) => state.setScheduleInfoSizeIndex} />
								<SpaceControl label="Odsadenie" name="scheduleInfoSpace" spacesGetter={(state) => state.spaces} indexGetter={(state) => state.scheduleInfoSpaceIndex} indexSetter={(state) => state.setScheduleInfoSpaceIndex} />
								<SpaceControl label="Odsadenie dátumu" name="scheduleInfoDateSpace" spacesGetter={(state) => state.relativeSpaces} indexGetter={(state) => state.scheduleInfoDateSpaceIndex} indexSetter={(state) => state.setScheduleInfoDateSpaceIndex} />
								<SpaceControl label="Odsadenie miesta" name="scheduleInfoPlaceSpace" spacesGetter={(state) => state.relativeSpaces} indexGetter={(state) => state.scheduleInfoPlaceSpaceIndex} indexSetter={(state) => state.setScheduleInfoPlaceSpaceIndex} />
							</div>
						</AccordionDetails>
					</Accordion>
				</div>
			</div>
			<div className="m-auto space-y-6">
				<div className="w-[540px] h-[675px] overflow-hidden">
					<div className="origin-top-left scale-50">
						<div ref={postRef} className="flex flex-col w-[1080px] h-[1350px] font-[Panton_Narrow] bg-[url(/reality-development-2025-basic-bg.png)]" style={{ backgroundColor: primaryColor }}>
							<div className="grow shrink-0 flex flex-col px-[96px] pt-[96px]">
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
					<Button variant="contained" size="small" startIcon={<DownloadIcon />} onClick={handleDownload}>
						Stiahnuť
					</Button>
				</div>
			</div>
		</div>
	);
}
