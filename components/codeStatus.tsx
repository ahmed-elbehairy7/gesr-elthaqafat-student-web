import React from "react";

const CodeStatus = ({ status }: CodeStatusProps) => {
	return (
		<div
			className={`${
				status == "AVAILABLE" ? "bg-accent-color" : "bg-primary-color"
			} bg-opacity-50 rounded-lg h-fit py-2 px-2`}
		>
			<p className=" text-black opacity-100 text-xs font-semibold">
				{status}
			</p>
		</div>
	);
};

export type CodeStatusProps = {
	status: "AVAILABLE" | "USED" | "EXPIRED";
};

export default CodeStatus;
