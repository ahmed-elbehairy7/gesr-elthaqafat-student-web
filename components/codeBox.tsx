import React from "react";
import CodeStatus from "./codeStatus";

const CodeBox = ({ code, expires }: CodeBoxProps) => {
	return (
		<div className="bg-bright-one py-3 px-3 md:px-16 flex flex-row rounded-2xl justify-between items-center">
			<div className="font-semibold text-sm">
				<h2 className="font-bold text-lg mb-2">CODE: {code}</h2>
				<h2>
					expires: <br /> {expires}
				</h2>
			</div>
			<CodeStatus status="AVAILABLE" />
		</div>
	);
};

export type CodeBoxProps = {
	id: string;
	code: string;
	studentId: string;
	expires: string;
};

export default CodeBox;
