"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Template({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const excludeHeaderAndFooter = ["signup", "login"].includes(
		usePathname().replace("/", "")
	);

	useEffect(() => {
		// listen to keyboard focus
		document.body.addEventListener(
			"focus",
			(event) => {
				const target = event.target as any;
				switch (target.tagName) {
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
		<>
			{!excludeHeaderAndFooter && <Header />}
			{children}
			{!excludeHeaderAndFooter && <Footer />}
		</>
	);
}
