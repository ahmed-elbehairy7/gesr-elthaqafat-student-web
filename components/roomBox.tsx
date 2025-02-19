import React, { MouseEventHandler } from "react";
import RoomStatus from "./roomStatus";
import { roomBoxLocaleType, subjectsLocaleType } from "@/locales/dashboard";

const RoomBox = ({
	teacher,
	createdAt,
	end,
	subject,
	subjectsLocale,
	status,
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
				<h2>
					{teacher.firstName} {teacher.lastName}
				</h2>
				<h2>
					{locale.start}: {createdAt}
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
			<RoomStatus locale={locale.status} status={status} click={click} />
		</div>
	);
};

export type RoomBoxProps = {
	teacher: { _id: string; firstName: string; lastName: string };
	createdAt: string;
	end?: string;
	subject: "ar" | "mw" | "quran" | "tajweed" | "communicationSkills";
	status: 1 | 0;
	click: boolean;
	onClick: MouseEventHandler<HTMLDivElement>;
	locale: roomBoxLocaleType;
	subjectsLocale: subjectsLocaleType;
};
export default RoomBox;
