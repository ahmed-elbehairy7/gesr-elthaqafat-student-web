"use client";

import Form from "@/components/form";
import React from "react";
import { InputFieldProps } from "@/components/inputField";
import { PasswordFieldProps } from "@/components/passwordField";
import { useParams } from "next/navigation";
import signupLocale from "@/locales/signup";
import { localeType } from "@/locales/common";
import LanguageChanger from "@/components/languageChanger";

const SignUpPage = () => {
	const params = useParams();
	const locale = signupLocale[params.locale as localeType];
	return (
		<main className="w-full h-full flex flex-col items-center justify-center pb-10 space-y-10">
			<Form
				{...{
					title: locale.signup,
					fields: [
						{
							type: "input",
							props: {
								placeholder: locale.firstName,
								type: "text",
								id: "firstName",
							} as InputFieldProps,
						},
						{
							type: "input",
							props: {
								placeholder: locale.lastName,
								type: "text",
								id: "lastName",
							} as InputFieldProps,
						},
						{
							type: "input",
							props: {
								placeholder: locale.username,
								type: "text",
								id: "username",
							} as InputFieldProps,
						},
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
								signup: true,
							} as PasswordFieldProps,
						},
						{
							type: "password",
							props: {
								placeholder: locale.confirmPassword,
								confirm: true,
								signup: true,
							} as PasswordFieldProps,
						},
					],
					mainButton: {
						text: locale.signup,
						backgroundOrBorderColor: "bg-primary-color",
						fill: true,
						textColor: "text-bright-one",
						onclick: () => alert("signing up..."), //backend todo sign user up and get the required data from him
					},
					otherWay: {
						href: "/login",
						text: locale.login,
					},
				}}
			/>
			<LanguageChanger dark={true} />
		</main>
	);
};

export default SignUpPage;
