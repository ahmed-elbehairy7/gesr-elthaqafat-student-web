import React from "react";

const RoomStatus = ({ open, click }: RoomStatusProps) => {
	return (
		<div
			className={`${
				open ? "bg-accent-color" : "bg-primary-color"
			} bg-opacity-50 rounded-lg h-fit py-2 px-2`}
		>
			<p className=" text-black opacity-100 text-xs font-semibold">
				{open ? (click ? "click to open" : "OPEN") : "ENDED"}
			</p>
		</div>
	);
};

export type RoomStatusProps = {
	open?: true;
	click: boolean;
};

export default RoomStatus;
