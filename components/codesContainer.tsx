import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Container from "./container";
import Button from "./button";
import CodeBox, { CodeBoxProps } from "./codeBox";
import { codesContainerLocaleType } from "@/locales/dashboard";
import apiClient from "@/utils/apiClient";
import * as getCoins from "@/utils/coins";

const CodesContainer = ({
	disableAll,
	setEligible,
	locale,
}: CodesContainerProps) => {
	const [codes, setCodes] = useState<CodeBoxProps[]>([]);
	const [coins, setCoins] = useState<number>(0);

	useEffect(() => {
		(async () => {
			setCodes(await apiClient.get("/codes"));
			setCoins(await getCoins.default());
		})();
	}, []);

	useEffect(() => {
		if (codes.length > 0) {
			setEligible(true);
		}
		(async () => setCoins(await getCoins.default()))();
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
				codes.map((v, index) => (
					<CodeBox key={index} {...v} locale={locale.codeBox} />
				))}
			<div className="flex flex-col items-center justify-center w-full mt-7">
				<Button
					{...{
						text: `${locale.generateAConversationCode} (10 🪙)`,
						backgroundOrBorderColor:
							coins > 0 && !disableAll
								? "bg-primary-color"
								: "bg-black opacity-50",
						fill: true,
						textColor: "text-bright-one",
						disabled: coins == 0 || disableAll,
						onclick: () =>
							generateCode({
								codes,
								setCodes,
							}),
					}}
				/>
			</div>
		</Container>
	);
};

async function generateCode({ setCodes, codes }: generateCodeParameters) {
	const code: any = await apiClient.post("/codes");

	if (!code.error) {
		setCodes([...codes, code]);
	}
	document.cookie = "updateLastDailyUsed=true";
}

type generateCodeParameters = {
	setCodes: Dispatch<SetStateAction<CodeBoxProps[]>>;
	codes: CodeBoxProps[];
};

export type CodesContainerProps = {
	disableAll: boolean;
	setEligible: Dispatch<SetStateAction<boolean>>;
	locale: codesContainerLocaleType;
};

export default CodesContainer;
