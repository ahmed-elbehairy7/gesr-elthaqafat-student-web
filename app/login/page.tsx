"use client";

import { InputFieldProps } from "@/components/inputField";
import React from "react";
import { PasswordFieldProps } from "@/components/passwordField";
import AuthForm from "@/components/authForm";

const LoginPage = () => {
	return (
		<main className="w-full h-full flex flex-col items-center justify-center">
			<AuthForm
				{...{
					title: "Login",
					fields: [
						{
							type: "input",
							props: {
								placeholder: "email",
								type: "email",
								id: "email",
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
						onclick: () => alert("loging..."), //backend todo log user in
					},
					otherWay: { href: "/signup", text: "new user" },
				}}
			/>
		</main>
	);
};

export default LoginPage;
