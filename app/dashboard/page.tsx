"use client";

import CodesContainer from "@/components/codesContainer";
import RoomsContainer from "@/components/roomsContainer";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const DashboardPage = () => {
	const [lang, setLang] = useState<"ma" | "ar">("ar");
	const [eligible, setEligible] = useState<boolean>(false);
	const [disableAll, setDisableAll] = useState<boolean>(true);
	useEffect(() => {
		//backend todo the logic to undisable all
		setDisableAll(false);
	}, []);
	return (
		<main className="flex flex-col items-center">
			{disableAll && (
				<Link
					href={"/profile"}
					className="p-3 w-5/6 text-sm rounded-md text-center text-errRed bg-errRed bg-opacity-20 border border-errRed"
				>
					<p>
						Your account is not yet activated! activate it by
						filling the required data here
					</p>
				</Link>
			)}
			<RoomsContainer {...{ disableAll, lang, setLang, eligible }} />
			<CodesContainer {...{ disableAll, setEligible }} />
		</main>
	);
};

export default DashboardPage;
