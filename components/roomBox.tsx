import React from "react";
import RoomStatus from "./roomStatus";

const RoomBox = ({
	teacher,
	start,
	end,
	lang,
	meetingLink,
	open,
	click,
}: RoomBoxProps) => {
	return (
		<div className="bg-bright-one py-3 px-3 md:px-16 flex flex-row rounded-2xl justify-between items-center">
			<div className="font-semibold text-sm">
				<h2>{teacher}</h2>
				<h2>start: {start}</h2>
				{!open && <h2>End: {end}</h2>}
				<h2>language: {lang}</h2>
			</div>
			<RoomStatus open={open} click={click} />
		</div>
	);
};

export type RoomBoxProps = {
	teacher: string;
	start: string;
	end?: string;
	lang: "ar" | "ma";
	open?: true;
	click: boolean;
	meetingLink: string;
};
export default RoomBox;
