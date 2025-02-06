import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Container from "./container";
import Button from "./button";
import CodeBox, { CodeBoxProps } from "./codeBox";
import {
	codeBoxLocaleType,
	codesContainerLocaleType,
} from "@/locales/dashboard";

const CodesContainer = ({
	disableAll,
	setEligible,
	locale,
}: CodesContainerProps) => {
	const [codes, setCodes] = useState<CodeBoxProps[]>([]);
	const [haveEnoughCoins, setHaveEnoughCoins] = useState<boolean>();
	useEffect(() => {
		setCodes([]); //backend todo set real codes
		setHaveEnoughCoins(
			Number.parseInt(localStorage.getItem("coins") as string) >= 10
		); //backend todo make a real check
	}, []);

	useEffect(() => {
		if (codes.length > 0) {
			setEligible(true);
		}
		setHaveEnoughCoins(
			Number.parseInt(localStorage.getItem("coins") as string) >= 10
		); //backend todo make a real check
	}, [codes, setEligible]);
	return (
		<Container title={locale.title}>
			{(disableAll || codes.length == 0) && (
				<div className="m-auto pb-5">
					<p className="font-semibold text-center opacity-50">
						{locale.noAvailableCodes1}
						<br />
						<br />
						{locale.noAvailableCodes2}
					</p>
				</div>
			)}
			{!disableAll &&
				codes.length > 0 &&
				codes.map((v, index) => <CodeBox key={index} {...v} />)}
			<div className="flex justify-center w-full mt-7">
				<Button
					{...{
						text: `${locale.generateAConversationCode} (10 🪙)`,
						backgroundOrBorderColor:
							haveEnoughCoins && !disableAll
								? "bg-primary-color"
								: "bg-black opacity-50",
						fill: true,
						textColor: "text-bright-one",
						disabled: !haveEnoughCoins || disableAll,
						onclick: () =>
							generateCode({
								setEligible,
								codes,
								setCodes,
								localStorage,
								locale: locale.codeBox,
							}),
					}}
				/>
			</div>
		</Container>
	);
};

async function generateCode({
	setEligible,
	setCodes,
	codes,
	locale,
	localStorage,
}: generateCodeParameters) {
	const code = {
		id: "fesdfefsefes",
		studentId: "currentStudentId",
		code: "F34G8E",
		expires: new Date(Date.now()).toLocaleString(),
		locale: locale,
	}; //backend todo get a real code

	setCodes([...codes, code]);

	setEligible(true);

	localStorage.setItem(
		"coins",
		(
			Number.parseInt(localStorage.getItem("coins") as string) - 10
		).toString()
	);
}

type generateCodeParameters = {
	setEligible: Dispatch<SetStateAction<boolean>>;
	setCodes: Dispatch<SetStateAction<CodeBoxProps[]>>; //todo fix type
	codes: CodeBoxProps[]; //todo fix type
	localStorage: Storage;
	locale: codeBoxLocaleType;
};

export type CodesContainerProps = {
	disableAll: boolean;
	setEligible: Dispatch<SetStateAction<boolean>>;
	locale: codesContainerLocaleType;
};

export default CodesContainer;
