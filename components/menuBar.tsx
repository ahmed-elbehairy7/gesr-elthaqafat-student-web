"use client";

import Image from "next/image";
import React, { useState } from "react";
import menuIcon from "@/assets/menu icon.png";
import closeIcon from "@/assets/close icon.png";

const MenuBar = () => {
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
			></div>
		</div>
	);
};

export default MenuBar;
