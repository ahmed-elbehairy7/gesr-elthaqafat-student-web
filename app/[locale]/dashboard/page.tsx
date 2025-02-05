"use client";

import CodesContainer from "@/components/codesContainer";
import NotifyBar from "@/components/notifyBar";
import RoomsContainer from "@/components/roomsContainer";
import { localeType } from "@/locales/common";
import dashboardLocale from "@/locales/dashboard";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const DashboardPage = () => {
	const [lang, setLang] = useState<"ma" | "ar">("ar");
	const [eligible, setEligible] = useState<boolean>(false);
	const [disableAll, setDisableAll] = useState<boolean>(true);

	const params = useParams();

	const locale = dashboardLocale[params.locale as localeType];
	useEffect(() => {
		//backend todo the logic to undisable all
		if (localStorage.getItem("dataComplete") == "done") {
			setDisableAll(false);
		}
	}, []);
	return (
		<main className="flex flex-col items-center">
			{disableAll && (
				<NotifyBar
					{...{
						href: "/profile",
						good: false,
						text: "Your account is not yet activated! activate it by filling the required data here",
					}}
				/>
			)}
			{eligible && (
				<NotifyBar
					{...{
						href: "/profile",
						good: true,
						text: "Welcome! you can enter any of the rooms by clicking on it!",
					}}
				/>
			)}
			<RoomsContainer
				{...{
					locale: locale.roomsContainer,
					disableAll,
					lang,
					setLang,
					eligible,
				}}
			/>
			<CodesContainer {...{ disableAll, setEligible }} />
		</main>
	);
};

export default DashboardPage;
