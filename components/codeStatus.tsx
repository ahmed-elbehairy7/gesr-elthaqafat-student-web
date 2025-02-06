import { codeStatusLocaleType } from "@/locales/dashboard";
import React from "react";

const CodeStatus = ({ status, locale }: CodeStatusProps) => {
	return (
		<div
			className={`${
				status == "available" ? "bg-accent-color" : "bg-primary-color"
			} bg-opacity-50 rounded-lg h-fit py-2 px-2`}
		>
			<p className=" text-black opacity-100 text-xs font-semibold">
				{locale[status]}
			</p>
		</div>
	);
};

export type CodeStatusProps = {
	status: "available" | "used" | "expired";
	locale: codeStatusLocaleType;
};

export default CodeStatus;
