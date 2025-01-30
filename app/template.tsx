"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { usePathname } from "next/navigation";

export default function Template({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const excludeHeaderAndFooter = ["signup", "login"].includes(
		usePathname().replace("/", "")
	);
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
