import CompanyLogoFillControl from "@/components/companyLogoFillControl";
import CompanyLogo from "@/components/companyLogo";

import EventLogoWidthControl from "@/components/eventLogoWidthControl";
import EventLogo from "@/components/eventLogo";

import SubtitleColorControl from "@/components/subtitleColorControl";
import Subtitle from "@/components/subtitle";

async function getEventData() {
	try {
		const res = await fetch("https://tk-stage.k8s-onpremise.newsandmedia.sk/event/reality-development-2025?json=1", { cache: "no-store" });

		if (!res.ok) {
			return { error: `Error: ${res.status}` };
		}

		const data = await res.json();
		return { data };
	} catch (err) {
		console.error("Fetch failed:", err);

		return { error: "Failed to fetch" };
	}
}

export default async function Home() {
	const { data, error } = await getEventData();

	if (error) {
		return <p>{error}</p>;
	}

	return (
		<div>
			<CompanyLogoFillControl />
			<EventLogoWidthControl />
			<SubtitleColorControl />
			<div className="flex flex-col w-[1080px] h-[1350px] font-[Panton_Narrow] bg-[#b98362] bg-[url(/reality-development-2025-bg.png)]">
				<div className="grow shrink-0 flex flex-col p-[96px]">
					<CompanyLogo />
					<EventLogo />
					<Subtitle text={data.event.additionalName} />

					{/* Date and place start */}
					<ul className="mt-auto space-y-[0.5em] text-[#ffffff] text-[60px] font-bold leading-[60px] uppercase">
						<li className="relative pl-[0.375em] before:block before:w-[0.125em] before:absolute before:top-[0.0625em] before:bottom-[0.1875em] before:left-0 before:bg-[#b98362]">
							{data.event.date.from.day}. {data.event.date.from.month_human}
						</li>
						<li className="relative pl-[0.375em] before:block before:w-[0.125em] before:absolute before:top-[0.0625em] before:bottom-[0.1875em] before:left-0 before:bg-[#b98362]">
							{data.event.address.info}
							<br aria-hidden="true" />
							<span className="font-normal">{data.event.address.city}</span>
						</li>
					</ul>
					{/* Date and place end */}
				</div>
				{/* CTA start */}
				<div className="shrink-0 p-[24px] bg-[#232323]">
					<p className="text-[#b98362] text-[40px] leading-[48px] text-center">
						Zaregistrujte sa ešte dnes, <span className="font-black">počet miest je limitovaný!</span>
					</p>
				</div>
				{/* CTA end */}
			</div>
		</div>
	);
}
