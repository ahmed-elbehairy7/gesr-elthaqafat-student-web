"use client";
import { Suspense } from "react";
import Loading from "./loading";
import "./globals.css";
import { useParams } from "next/navigation";
import { localeType } from "@/locales/common";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const params = useParams();

	const { locale } = params;

	return (
		<html lang={locale as localeType} dir={locale === "ar" ? "rtl" : "ltr"}>
			<body className="w-full h-full m-0 p-0">
				<div className="fixed -z-10 top-0 w-full h-full bg-gradient-to-t from-bright-two to-bright-one"></div>
				<Suspense fallback={<Loading />}>{children}</Suspense>
			</body>
		</html>
	);
}
