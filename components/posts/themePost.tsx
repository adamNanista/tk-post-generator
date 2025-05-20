"use client";

import { useRef } from "react";
import { toPng } from "html-to-image";
import { useUIStore } from "@/stores/useUIStore";

import { parseProgramItems } from "@/lib/parseProgram";

import CompanyLogo from "@/components/elements/companyLogo";
import EventLogo from "@/components/elements/eventLogo";
import Theme from "@/components/elements/theme";

import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";

export default function ThemePost({ data }: { data: any }) {
	const parsedItems = parseProgramItems(data.event.program);

	const postRefs = useRef<Record<string, HTMLDivElement | null>>({});

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

	return (
		<div className="flex min-h-screen">
			<div className="flex flex-col w-1/5 min-w-sm max-h-screen overflow-auto p-8 space-y-8 bg-neutral-50 border-r border-r-neutral-200">
				<div className="space-y-2">
					<h1 className="text-2xl font-black text-pretty">{data.event.name}</h1>
					<p>Posty s témami 1080x1350</p>
				</div>
			</div>
			<div className="flex flex-col items-center grow max-h-screen overflow-auto p-12 space-y-12">
				{Object.entries(parsedItems).map(([key, value], idx) => (
					<div key={idx}>
						<div className="space-y-6">
							<div className="w-[540px] h-[675px] overflow-hidden">
								<div className="origin-top-left scale-50">
									<div
										ref={(el: HTMLDivElement | null) => {
											postRefs.current[key] = el;
										}}
										className="flex flex-col w-[1080px] h-[1350px] font-[Panton_Narrow] bg-[url(/reality-development-2025-theme-bg.png)]"
										style={{ backgroundColor: primaryColor }}
									>
										<div className="grow shrink-0 flex flex-col px-[96px] pt-[96px]">
											<CompanyLogo />
											<EventLogo />
											<Theme title={key} description={value} />
										</div>
									</div>
								</div>
							</div>
							<div className="flex justify-end">
								<Button variant="contained" size="small" startIcon={<DownloadIcon />} onClick={() => handleDownload(key)}>
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
