import React, { MouseEventHandler } from "react";
import RoomStatus from "./roomStatus";
import { roomBoxLocaleType, subjectsLocaleType } from "@/locales/dashboard";

const RoomBox = ({
	teacher,
	start,
	end,
	subject,
	subjectsLocale,
	open,
	click,
	onClick,
	locale,
}: RoomBoxProps) => {
	return (
		<div
			className={`bg-bright-one py-3 px-3 md:px-16 flex flex-row rounded-2xl justify-between items-center ${
				click && "cursor-pointer"
			}`}
			onClick={onClick}
		>
			<div className="font-semibold text-sm">
				<h2>{teacher}</h2>
				<h2>
					{locale.start}: {start}
				</h2>
				{!open && (
					<h2>
						{locale.end}: {end}
					</h2>
				)}
				<h2>
					{locale.subject}: {subjectsLocale[subject]}
				</h2>
			</div>
			<RoomStatus locale={locale.status} open={open} click={click} />
		</div>
	);
};

export type RoomBoxProps = {
	teacher: string;
	start: string;
	end?: string;
	subject: "ar" | "mw" | "quran" | "tajweed" | "communicationSkills";
	open?: true;
	click: boolean;
	onClick: MouseEventHandler<HTMLDivElement>;
	locale: roomBoxLocaleType;
	subjectsLocale: subjectsLocaleType;
};
export default RoomBox;
