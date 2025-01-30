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
		// focus events don't bubble, must use capture phase
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
		<html lang="en">
			<body className="w-screen h-screen bg-gradient-to-t from-bright-two to-bright-one m-0">
				{!excludeHeaderAndFooter && <Header />}
				{children}
				{!excludeHeaderAndFooter && <Footer />}
			</body>
		</html>
	);
}
