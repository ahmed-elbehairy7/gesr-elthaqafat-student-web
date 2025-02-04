import type { Metadata } from "next";
import { Suspense } from "react";
import Loading from "./loading";
import "./globals.css";

export const metadata: Metadata = {
	title: "Gesr-elthaqafat",
	description: "gesr-elthaqafat",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="w-full h-full m-0 p-0">
				<div className="fixed -z-10 top-0 w-full h-full bg-gradient-to-t from-bright-two to-bright-one"></div>
				<Suspense fallback={<Loading />}>{children}</Suspense>
			</body>
		</html>
	);
}
