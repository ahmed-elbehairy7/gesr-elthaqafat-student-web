import React from "react";

const Status = ({ open, click }: StatusProps) => {
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

export type StatusProps = {
	open?: true;
	click?: true;
};

export default Status;
