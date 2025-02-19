import React from "react";
import CodeStatus from "./codeStatus";
import { codeBoxLocaleType } from "@/locales/dashboard";

const CodeBox = ({ _id, expires, locale }: CodeBoxProps) => {
	return (
		<div className="bg-bright-one py-3 px-3 md:px-16 flex flex-row rounded-2xl justify-between items-center">
			<div className="font-semibold text-sm">
				<h2 className="font-bold text-lg mb-2">
					{locale.code}:<br /> {_id}
				</h2>
				<h2>
					{locale.expires}: <br /> {expires}
				</h2>
			</div>
			<CodeStatus status="available" locale={locale.status} />
		</div>
	);
};

export type CodeBoxProps = {
	_id: string;
	studentId: string;
	expires: string;
	locale: codeBoxLocaleType;
};

export default CodeBox;
