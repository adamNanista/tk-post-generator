"use client";

import Link from "next/link";
import { useRef } from "react";
import { toPng } from "html-to-image";
import { getUIStore } from "@/stores/useUIStore";

import { parseThemes } from "@/lib/parseThemes";

import ColorPicker from "@/components/controls/colorPicker";
import WidthControl from "@/components/controls/widthControl";
import SpaceControl from "@/components/controls/spaceControl";
import ColorControl from "@/components/controls/colorControl";
import SizeControl from "@/components/controls/sizeControl";

import CompanyLogo from "@/components/elements/companyLogo";
import EventLogo from "@/components/elements/eventLogo";
import Theme from "@/components/elements/theme";

import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import DownloadIcon from "@mui/icons-material/Download";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type ParsedTheme = {
	title: string;
	description: string;
};

export default function ThemePost({ data, slug }: { data: any; slug: string }) {
	const postRefs = useRef<Record<string, HTMLDivElement | null>>({});
	const useUIStore = useRef(getUIStore("theme-post", slug)).current;

	const handleDownload = async (key: string) => {
		const postRef = postRefs.current[key];

		if (postRef) {
			const dataUrl = await toPng(postRef, {
				cacheBust: true,
			});
			const link = document.createElement("a");
			link.download = "themePost.png";
			link.href = dataUrl;
			link.click();
		}
	};

	const primaryColor = useUIStore((state) => state.primaryColor);

	const parsedThemes: ParsedTheme[] = data.event.program[0].items.map(parseThemes).filter(Boolean);

	return (
		<div className="flex min-h-screen">
			<div className="flex flex-col w-1/5 min-w-sm max-h-screen overflow-auto p-8 space-y-8 bg-neutral-50 border-r border-r-neutral-200">
				<Link href={`/${slug}`}>Späť na posty</Link>
				<div className="space-y-2">
					<h1 className="text-2xl font-black text-pretty">{data.event.name}</h1>
					<p>Posty s témami 1080x1350</p>
				</div>
				<div>
					<Accordion disableGutters>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>Všeobecné</AccordionSummary>
						<AccordionDetails>
							<div className="space-y-6">
								<ColorPicker label="Primary farba" name="primaryColor" valueGetter={(state) => state.primaryColor} valueSetter={(state) => state.setPrimaryColor} useUIStore={useUIStore} />
								<ColorPicker label="Accent farba" name="accentColor" valueGetter={(state) => state.accentColor} valueSetter={(state) => state.setAccentColor} useUIStore={useUIStore} />
							</div>
						</AccordionDetails>
					</Accordion>
					<Accordion disableGutters>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>Logo TREND konferencie</AccordionSummary>
						<AccordionDetails>
							<div className="space-y-6">
								<ColorControl label="Farba" name="companyLogoFill" valueGetter={(state) => state.companyLogoFill} valueSetter={(state) => state.setCompanyLogoFill} useUIStore={useUIStore} />
								<SpaceControl label="Odsadenie" name="companyLogoSpace" spacesGetter={(state) => state.spaces} indexGetter={(state) => state.companyLogoSpaceIndex} indexSetter={(state) => state.setCompanyLogoSpaceIndex} useUIStore={useUIStore} />
							</div>
						</AccordionDetails>
					</Accordion>
					<Accordion disableGutters>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>Logo eventu</AccordionSummary>
						<AccordionDetails>
							<div className="space-y-6">
								<WidthControl label="Šírka" name="eventLogoWidth" valueGetter={(state) => state.eventLogoWidth} valueSetter={(state) => state.setEventLogoWidth} useUIStore={useUIStore} />
								<SpaceControl label="Odsadenie" name="eventLogoSpace" spacesGetter={(state) => state.spaces} indexGetter={(state) => state.eventLogoSpaceIndex} indexSetter={(state) => state.setEventLogoSpaceIndex} useUIStore={useUIStore} />
							</div>
						</AccordionDetails>
					</Accordion>
					<Accordion disableGutters>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>Téma</AccordionSummary>
						<AccordionDetails>
							<div className="space-y-6">
								<WidthControl label="Šírka" name="themeWidth" valueGetter={(state) => state.themeWidth} valueSetter={(state) => state.setThemeWidth} useUIStore={useUIStore} />
								<ColorControl label="Farba textu odznaku" name="themeBadgeColor" valueGetter={(state) => state.themeBadgeColor} valueSetter={(state) => state.setThemeBadgeColor} useUIStore={useUIStore} />
								<ColorControl label="Farba pozadia odznaku" name="themeBadgeBackgroundColor" valueGetter={(state) => state.themeBadgeBackgroundColor} valueSetter={(state) => state.setThemeBadgeBackgroundColor} useUIStore={useUIStore} />
								<SizeControl label="Veľkosť písma odznaku" name="themeBadgeSize" sizesGetter={(state) => state.sizes} indexGetter={(state) => state.themeBadgeSizeIndex} indexSetter={(state) => state.setThemeBadgeSizeIndex} useUIStore={useUIStore} />
								<SpaceControl label="Odsadenie odznaku" name="themeBadgeSpace" spacesGetter={(state) => state.spaces} indexGetter={(state) => state.themeBadgeSpaceIndex} indexSetter={(state) => state.setThemeBadgeSpaceIndex} useUIStore={useUIStore} />
								<ColorControl label="Farba textu nadpisu" name="themeTitleColor" valueGetter={(state) => state.themeTitleColor} valueSetter={(state) => state.setThemeTitleColor} useUIStore={useUIStore} />
								<SizeControl label="Veľkosť písma nadpisu" name="themeTitleSize" sizesGetter={(state) => state.sizes} indexGetter={(state) => state.themeTitleSizeIndex} indexSetter={(state) => state.setThemeTitleSizeIndex} useUIStore={useUIStore} />
							</div>
						</AccordionDetails>
					</Accordion>
				</div>
			</div>
			<div className="flex flex-col items-center grow max-h-screen overflow-auto p-12 space-y-12">
				{parsedThemes.map(({ title, description }: ParsedTheme, idx: number) => (
					<div key={idx}>
						<div className="space-y-6">
							<div className="w-[540px] h-[675px] overflow-hidden">
								<div className="origin-top-left scale-50">
									<div
										ref={(el: HTMLDivElement | null) => {
											postRefs.current[title] = el;
										}}
										className="flex flex-col w-[1080px] h-[1350px] overflow-hidden font-[Panton_Narrow]"
										style={{ backgroundColor: primaryColor, backgroundImage: `url(/${slug}-theme-bg.png)` }}
									>
										<div className="grow shrink-0 flex flex-col p-[96px]">
											<CompanyLogo useUIStore={useUIStore} />
											<EventLogo slug={slug} useUIStore={useUIStore} />
											<Theme title={title} description={description} useUIStore={useUIStore} />
										</div>
									</div>
								</div>
							</div>
							<div className="flex justify-end">
								<Button variant="contained" size="small" startIcon={<DownloadIcon />} onClick={() => handleDownload(title)}>
									Stiahnuť
								</Button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
