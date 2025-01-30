import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo.png";

const Loading = () => {
	return (
		<main className="flex w-full h-full items-center">
			<Image src={Logo} alt="Logo" width={200} />
		</main>
	);
};

export default Loading;
