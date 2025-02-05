import { roomStatusLocaleType } from "@/locales/dashboard";
import React from "react";

const RoomStatus = ({ open, click, locale }: RoomStatusProps) => {
	return (
		<div
			className={`${
				open
					? click
						? "bg-accent-color"
						: "bg-secondary-color"
					: "bg-primary-color"
			} bg-opacity-50 rounded-lg h-fit py-2 px-2`}
		>
			<p className=" text-black opacity-100 text-xs font-semibold">
				{open ? (click ? locale.click : locale.open) : locale.ended}
			</p>
		</div>
	);
};

export type RoomStatusProps = {
	open?: true;
	click: boolean;
	locale: roomStatusLocaleType;
};

export default RoomStatus;
