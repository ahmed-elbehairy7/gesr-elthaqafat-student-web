"use client";

import CodesContainer from "@/components/codesContainer";
import RoomsContainer from "@/components/roomsContainer";
import React, { useEffect, useState } from "react";

const DashboardPage = () => {
	const [lang, setLang] = useState<"ma" | "ar">("ar");
	const [eligible, setEligible] = useState<boolean>(false);
	const [disableAll, setDisableAll] = useState<boolean>(true);
	useEffect(() => {
		//backend todo the logic to undisable all
	}, []);
	return (
		<main className="flex flex-col items-center">
			<RoomsContainer {...{ lang, setLang, eligible }} />
			<CodesContainer {...{ setEligible }} />
		</main>
	);
};

export default DashboardPage;
