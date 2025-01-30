"use client";

import { InputFieldProps } from "@/components/inputField";
import React from "react";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import { PasswordFieldProps } from "@/components/passwordField";
import Form from "@/components/form";

const LoginPage = () => {
	return (
		<main className="w-full h-full flex flex-col items-center justify-center">
			<Image src={Logo} alt="logo" width={200} />
			<Form
				{...{
					fields: [
						{
							type: "input",
							props: {
								placeholder: "Email or username",
								type: "text",
								id: "username",
							} as InputFieldProps,
						},
						{
							type: "password",
							props: {} as PasswordFieldProps,
						},
					],
					mainButton: {
						text: "login",
						backgroundOrBorderColor: "bg-primary-color",
						fill: true,
						textColor: "text-bright-one",
						onclick: () => alert("loging..."),
					},
					otherWay: { href: "/signup", text: "new user" },
				}}
			/>
		</main>
	);
};

export default LoginPage;
