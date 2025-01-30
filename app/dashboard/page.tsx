"use client";

import CodesContainer from "@/components/codesContainer";
import RoomsContainer from "@/components/roomsContainer";
import React, { useState } from "react";

const DashboardPage = () => {
	const [lang, setLang] = useState<"ma" | "ar">("ar");
	return (
		<main className="flex flex-col items-center">
			<RoomsContainer {...{ lang, setLang }} />
			<CodesContainer />
		</main>
	);
};

export default DashboardPage;
