import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Gesr elthaqafat | login",
};

const Layout = ({ children }: { children: Readonly<React.ReactNode> }) => {
	return <>{children}</>;
};

export default Layout;
