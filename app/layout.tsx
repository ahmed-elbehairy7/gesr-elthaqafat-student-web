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
			<body className="w-full h-screen bg-gradient-to-t from-bright-two to-bright-one m-0 py-10">
				<Suspense fallback={<Loading />}>{children}</Suspense>
			</body>
		</html>
	);
}
