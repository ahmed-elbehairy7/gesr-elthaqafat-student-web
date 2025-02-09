import { defaultMetaData, localeType } from "@/locales/common";
import signupLocale from "@/locales/signup";
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
		...signupLocale[locale as localeType].metaData,
	};
}
const Layout = ({ children }: { children: Readonly<React.ReactNode> }) => {
	return <>{children}</>;
};

export default Layout;
