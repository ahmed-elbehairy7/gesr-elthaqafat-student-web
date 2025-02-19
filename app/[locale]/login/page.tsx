"use client";

import { InputFieldProps } from "@/components/inputField";
import React, { useState } from "react";
import { PasswordFieldProps } from "@/components/passwordField";
import Form from "@/components/form";
import { useParams, useRouter } from "next/navigation";
import loginLocale from "@/locales/login";
import { localeType } from "@/locales/common";
import LanguageChanger from "@/components/languageChanger";
import apiClient from "@/apiClient";

const LoginPage = () => {
	const params = useParams();
	const locale = loginLocale[params.locale as localeType];
	const router = useRouter();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [errors, setErrors] = useState({
		email: null,
		password: null,
	});

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
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
								onChange,
								id: "email",
								error: errors.email,
							} as InputFieldProps,
						},
						{
							type: "password",

							props: {
								placeholder: locale.password,
								onChange,
								error: errors.password,
							} as PasswordFieldProps,
						},
					],
					mainButton: {
						text: locale.login,
						backgroundOrBorderColor: "bg-primary-color",
						fill: true,
						textColor: "text-bright-one",
						onclick: async () => {
							(await apiClient.login({ setErrors, formData })) &&
								router.push("/");
						},
					},
					otherWay: { href: "/signup", text: locale.signup },
				}}
			/>
			<LanguageChanger dark={true} />
		</main>
	);
};

export default LoginPage;
