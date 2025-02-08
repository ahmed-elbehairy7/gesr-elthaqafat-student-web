"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import globalBright from "@/assets/global bright.png";
import globalDark from "@/assets/global dark.png";

const LanguageChanger = ({ dark }: LanguageChangerPropsType) => {
	const router = useRouter();
	const [locale, pathname] = usePathname().replace("/", "").split("/");

	return (
		<div className="flex flex-row space-x-2 w-fit p-5 justify-center items-center">
			<Image
				src={dark ? globalDark : globalBright}
				alt="global-icon"
				className="w-6"
			/>
			<select
				className={`bg-transparent ${
					dark ? "text-black" : "text-bright-one"
				}`}
				defaultValue={locale}
				onChange={(e) => router.push(`/${e.target.value}/${pathname}`)}
			>
				<option className="text-black" value={"en"}>
					EN
				</option>
				<option className="text-black" value={"ar"}>
					عر
				</option>
				<option className="text-black" value={"mw"}>
					mw
				</option>
			</select>
		</div>
	);
};

export type LanguageChangerPropsType = {
	dark?: boolean;
};

export default LanguageChanger;
