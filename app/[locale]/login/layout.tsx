import { defaultMetaData, localeType } from "@/locales/common";
import loginLocale from "@/locales/login";
import { Metadata } from "next";
import React from "react";

interface MetadataProps {
	params: Promise<{ locale: string }>;
}

export async function generateMetadata({
	params,
}: MetadataProps): Promise<Metadata> {
	const { locale } = await params;
	return {
		...defaultMetaData[locale as localeType],
		...loginLocale[locale as localeType].metaData,
	};
}

const Layout = ({ children }: { children: Readonly<React.ReactNode> }) => {
	return <>{children}</>;
};

export default Layout;
