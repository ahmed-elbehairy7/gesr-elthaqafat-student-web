import React, { useEffect, useState } from "react";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import Button from "./button";

const Header = () => {
	const coins = 10; //backend todo get user coins
	const [name, setName] = useState<string>("");
	useEffect(() => {
		localStorage.setItem("coins", coins.toString());
		setName("Ahmed Elbehairy"); //backend todo fetch real name
	}, []);
	return (
		<header className="w-full h-32 flex flex-col">
			<div className="w-full px-14 md:px-32 flex flex-row justify-between items-center">
				<div className="w-fit -m-6">
					<Image src={Logo} alt="logo" width={125} />
				</div>
				<div className="flex flex-row items-center space-x-8">
					<p className="font-semibold text-lg">{coins} 🪙</p>
					<Button
						{...{
							text: name,
							backgroundOrBorderColor: "border-black border-3",
							fill: false,
							link: "/profile",
							textColor: "text-black",
							customPadding: "py-[12px] px-[25px]",
						}}
					/>
				</div>
			</div>
			<div className=" w-full h-0.5 bg-gradient-to-r from-transparent via-gray-600 to-transparent mt-2"></div>
		</header>
	);
};

export default Header;
