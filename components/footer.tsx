import React from "react";
import LanguageChanger from "./languageChanger";
import { footerLocale, localeType } from "@/locales/common";
import { useParams } from "next/navigation";

const Footer = () => {
	const params = useParams();
	return (
		<footer className="w-full flex flex-col space-y-5 items-center justify-center bg-dark-one text-bright-one py-5">
			<LanguageChanger />
			<p>{footerLocale[params.locale as localeType].copyright}</p>
		</footer>
	);
};

export default Footer;
