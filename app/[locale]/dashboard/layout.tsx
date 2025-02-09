import { defaultMetaData, localeType } from "@/locales/common";
import dashboardLocale from "@/locales/dashboard";
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
		...dashboardLocale[locale as localeType].metaData,
	};
}
const Layout = ({ children }: { children: Readonly<React.ReactNode> }) => {
	return <>{children}</>;
};

export default Layout;
