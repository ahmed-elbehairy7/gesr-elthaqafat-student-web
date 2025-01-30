import React, { useEffect } from "react";
import Logo from "@/assets/logo.png";
import Image from "next/image";

const Header = () => {
	const coins = 10; //backend todo get user coins
	useEffect(() => {
		localStorage.setItem("coins", coins.toString());
	}, []);
	return (
		<header className="w-full h-32 flex flex-col">
			<div className="w-full px-14 md:px-32 flex flex-row justify-between items-center">
				<div className="w-fit -m-6">
					<Image src={Logo} alt="logo" width={125} />
				</div>
				<div>
					<p className="font-semibold text-lg">{coins} 🪙</p>
				</div>
			</div>
			<div className=" w-full h-0.5 bg-gradient-to-r from-transparent via-gray-600 to-transparent mt-2"></div>
		</header>
	);
};

export default Header;
