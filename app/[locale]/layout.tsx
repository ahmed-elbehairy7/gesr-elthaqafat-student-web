"use client";
import "./globals.css";
import { useParams, usePathname } from "next/navigation";
import { localeType } from "@/locales/common";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useEffect } from "react";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const params = useParams();

	const { locale } = params;

	const excludeHeaderAndFooter = ["signup", "login"].includes(
		usePathname().replace(RegExp("/(en|ar|mw)/"), "")
	);

	useEffect(() => {
		// listen to keyboard focus
		document.body.addEventListener(
			"focus",
			(event) => {
				const { target } = event;
				switch ((target as unknown as { tagName: string }).tagName) {
					case "INPUT":
					case "TEXTAREA":
					case "SELECT":
						document.body.classList.add("keyboard");
				}
			},
			true
		);
		document.body.addEventListener(
			"blur",
			() => {
				document.body.classList.remove("keyboard");
			},
			true
		);
	}, []);

	return (
		<html lang={locale as localeType} dir={locale === "ar" ? "rtl" : "ltr"}>
			<body className="w-full h-full m-0 p-0">
				<div className="fixed -z-10 top-0 w-full h-full bg-gradient-to-t from-bright-two to-bright-one"></div>
				{!excludeHeaderAndFooter && <Header />}
				{children}
				{!excludeHeaderAndFooter && <Footer />}
			</body>
		</html>
	);
}
