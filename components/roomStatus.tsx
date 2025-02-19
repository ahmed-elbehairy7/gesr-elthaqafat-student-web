import { roomStatusLocaleType } from "@/locales/dashboard";
import React from "react";

const RoomStatus = ({ status, click, locale }: RoomStatusProps) => {
	return (
		<div
			className={`${
				status === 1
					? click
						? "bg-accent-color"
						: "bg-secondary-color"
					: "bg-primary-color"
			} bg-opacity-50 rounded-lg h-fit py-2 px-2`}
		>
			<p className=" text-black opacity-100 text-xs font-semibold">
				{status === 1
					? click
						? locale.click
						: locale.open
					: locale.ended}
			</p>
		</div>
	);
};

export type RoomStatusProps = {
	status: 1 | 0;
	click: boolean;
	locale: roomStatusLocaleType;
};

export default RoomStatus;
