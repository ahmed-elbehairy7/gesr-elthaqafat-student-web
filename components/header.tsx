import React, { useEffect, useState } from "react";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import Button from "./button";
import MenuBar from "./menuBar";
import Link from "next/link";
import { useParams } from "next/navigation";
import { headerLocale, localeType } from "@/locales/common";
import { decodeJwt } from "jose";
import getCookie from "@/utils/getCookie";
import * as getCoins from "@/utils/coins";

const Header = () => {
	const [coins, setCoins] = useState(0);
	const [name, setName] = useState<string>("");
	const params = useParams();
	const locale = headerLocale[params.locale as localeType];
	useEffect(() => {
		(async () => {
			const { usr }: any = decodeJwt(getCookie("accessToken"));
			setCoins(await getCoins.default());
			setName(`${usr.fn} ${usr.ln}`);
		})();
	}, []);
	return (
		<header className="w-full h-32 flex flex-col">
			<div className="w-full px-14 md:px-32 flex flex-row rtl:flex-row-reverse justify-between items-center">
				<Link
					href={process.env.NEXT_PUBLIC_HOST}
					className="w-fit -m-6"
				>
					<Image src={Logo} alt="logo" width={125} />
				</Link>
				<div className="flex flex-row rtl:flex-row-reverse items-center space-x-5">
					<p className="md:hidden font-semibold text-lg">{coins}🪙</p>
					<div className="hidden md:flex flex-row items-center space-x-2 md:space-x-8">
						<Button
							{...{
								text: `${name} [${coins}🪙]`,
								backgroundOrBorderColor:
									"border-black border-3",
								fill: false,
								link: "/profile",
								textColor: "text-black",
								customPadding: "py-[12px] px-[25px]",
							}}
						/>
					</div>
					<MenuBar locale={locale.menuBar} />
				</div>
			</div>
			<div className=" w-full h-0.5 bg-gradient-to-r from-transparent via-gray-600 to-transparent mt-2"></div>
		</header>
	);
};

export default Header;
