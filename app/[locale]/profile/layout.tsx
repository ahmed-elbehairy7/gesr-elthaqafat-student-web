import { defaultMetaData, localeType } from "@/locales/common";
import profileLocale from "@/locales/profile";
import { Metadata } from "next";

interface MetadataProps {
	params: Promise<{ locale: string }>;
}

export async function generateMetadata({
	params,
}: MetadataProps): Promise<Metadata> {
	const { locale } = await params;
	return {
		...defaultMetaData[locale as localeType],
		...profileLocale[locale as localeType].metaData,
	};
}
const Layout = ({ children }: { children: Readonly<React.ReactNode> }) => {
	return <>{children}</>;
};

export default Layout;
