"use client";

import apiClient from "@/utils/apiClient";
import CodesContainer from "@/components/codesContainer";
import NotifyBar from "@/components/notifyBar";
import RoomsContainer from "@/components/roomsContainer";
import { localeType } from "@/locales/common";
import dashboardLocale from "@/locales/dashboard";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import getCookie from "@/utils/getCookie";
import { decodeJwt } from "jose";

const DashboardPage = () => {
	const [eligible, setEligible] = useState<boolean>(false);
	const [disableAll, setDisableAll] = useState<boolean>(true);

	const params = useParams();

	const locale = dashboardLocale[params.locale as localeType];
	useEffect(() => {
		const accessToken = decodeJwt(getCookie("accessToken"));
		setDisableAll(!(accessToken as any).usr.a);
	}, []);
	return (
		<main className="flex flex-col items-center">
			{disableAll && (
				<NotifyBar
					{...{
						href: "/profile",
						good: false,
						text: locale.notifyBar.notActivated,
					}}
				/>
			)}
			{eligible && (
				<NotifyBar
					className="cursor-default"
					{...{
						onClick: () => null,
						good: true,
						text: locale.notifyBar.youAreNowEligible,
					}}
				/>
			)}
			<RoomsContainer
				{...{
					locale: locale.roomsContainer,
					disableAll,
					eligible,
				}}
			/>
			<CodesContainer
				{...{ locale: locale.codesContainer, disableAll, setEligible }}
			/>
		</main>
	);
};

export default DashboardPage;
