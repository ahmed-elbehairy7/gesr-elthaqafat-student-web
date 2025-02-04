"use client";

import Image from "next/image";
import React, { useState } from "react";
import menuIcon from "@/assets/menu icon.png";
import closeIcon from "@/assets/close icon.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuBar = ({ name }: MenuBarProps) => {
	const [showBar, setShowBar] = useState(false);
	return (
		<div className="z-10 md:hidden">
			<a
				className="z-20 relative right-0 top-0"
				onClick={() => setShowBar(!showBar)}
			>
				<Image
					hidden={showBar}
					alt="menu icon"
					width={25}
					src={menuIcon}
				/>
				<Image
					hidden={!showBar}
					alt="close menu icon"
					width={25}
					src={closeIcon}
				/>
			</a>
			<div
				className={`${
					!showBar && "hidden"
				} fixed right-0 top-0 w-2/3 h-full bg-gradient-to-br from-dark-one to-dark-two`}
			>
				<div className="mt-20 flex flex-col">
					{[
						{ href: "/dashboard", text: "dashboard" },
						{ href: "/profile", text: "profile" },
					].map((v, index) => (
						<MenuBarLink {...v} key={index} />
					))}
				</div>
			</div>
		</div>
	);
};

function MenuBarLink({ text, href }: MenuBarLinkProps) {
	const pathname = usePathname();

	return (
		<Link
			className={` w-full py-3.5 pl-6 font-medium  ${
				href === pathname
					? "bg-accent-color text-dark-two"
					: "text-bright-one border-b border-bright-one"
			} `}
			href={href}
		>
			{text}
		</Link>
	);
}

export type MenuBarProps = {
	name: string;
};

type MenuBarLinkProps = {
	text: string;
	href: string;
};

export default MenuBar;
