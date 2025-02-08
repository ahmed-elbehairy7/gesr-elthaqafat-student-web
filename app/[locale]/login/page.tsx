"use client";

import { InputFieldProps } from "@/components/inputField";
import React from "react";
import { PasswordFieldProps } from "@/components/passwordField";
import Form from "@/components/form";
import { useParams } from "next/navigation";
import loginLocale from "@/locales/login";
import { localeType } from "@/locales/common";
import LanguageChanger from "@/components/languageChanger";

const LoginPage = () => {
	const params = useParams();
	const locale = loginLocale[params.locale as localeType];
	return (
		<main className="w-full h-full flex flex-col items-center justify-center pb-10 space-y-10">
			<Form
				{...{
					title: locale.login,
					fields: [
						{
							type: "input",
							props: {
								placeholder: locale.email,
								type: "email",
								id: "email",
							} as InputFieldProps,
						},
						{
							type: "password",

							props: {
								placeholder: locale.password,
							} as PasswordFieldProps,
						},
					],
					mainButton: {
						text: locale.login,
						backgroundOrBorderColor: "bg-primary-color",
						fill: true,
						textColor: "text-bright-one",
						onclick: () => alert("loging..."), //backend todo log user in
					},
					otherWay: { href: "/signup", text: locale.signup },
				}}
			/>
			<LanguageChanger dark={true} />
		</main>
	);
};

export default LoginPage;
