import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Container from "./container";
import Button from "./button";
import CodeBox from "./codeBox";

const CodesContainer = ({ setEligible }: CodesContainerProps) => {
	const [codes, setCodes] = useState<any[]>([]);
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
	}, [codes]);
	return (
		<Container title="Available codes">
			{codes.length == 0 && (
				<div className="m-auto pb-5">
					<p className="font-semibold text-center opacity-50">
						You don’t have any codes yet!
						<br />
						<br />
						Generate one to enter a conversation room!
					</p>
				</div>
			)}
			{codes.length > 0 &&
				codes.map((v, index) => <CodeBox key={index} {...v} />)}
			<div className="flex justify-center w-full mt-7">
				<Button
					{...{
						text: "Generate a conversation code (10 🪙)",
						backgroundOrBorderColor: haveEnoughCoins
							? "bg-primary-color"
							: "bg-black opacity-50",
						fill: true,
						textColor: "text-bright-one",
						disabled: !haveEnoughCoins,
						onclick: () =>
							generateCode({
								setEligible,
								codes,
								setCodes,
								localStorage,
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
	localStorage,
}: generateCodeParameters) {
	const code = {
		id: "fesdfefsefes",
		studentId: "currentStudentId",
		code: "F34G8E",
		expires: new Date(Date.now()).toLocaleString(),
	}; //backend todo get a real code

	setCodes([...codes, code]);

	setEligible(true);

	localStorage.setItem(
		"coins",
		(Number.parseInt(localStorage.getItem("coins")) - 10).toString()
	);
}

type generateCodeParameters = {
	setEligible: Dispatch<SetStateAction<boolean>>;
	setCodes: Dispatch<SetStateAction<any[]>>; //todo fix type
	codes: any[]; //todo fix type
	localStorage: any;
};

export type CodesContainerProps = {
	setEligible: Dispatch<SetStateAction<boolean>>;
};

export default CodesContainer;
