"use client";

import { InputFieldProps } from "@/components/inputField";
import React, { useEffect, useState } from "react";
import { PasswordFieldProps } from "@/components/passwordField";
import Form from "@/components/form";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import loginLocale from "@/locales/login";
import { localeType } from "@/locales/common";
import LanguageChanger from "@/components/languageChanger";
import Auth from "@/utils/forms";
import Tokens from "@/utils/tokens";

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

	const searchParams = useSearchParams();
	const redirectUrl = searchParams.get("redirectUrl") || "/";

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setErrors({ email: null, password: null });
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	useEffect(() => {
		(async () => {
			if (await Tokens.getAccessToken()) router.push(redirectUrl);
		})();
	}, []);
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
								value: formData.email,
								error: errors.email,
							} as InputFieldProps,
						},
						{
							type: "password",

							props: {
								placeholder: locale.password,
								onChange,
								value: formData.password,
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
							(await Auth.login({ setErrors, formData })) &&
								router.push(redirectUrl);
						},
					},
					otherWay: {
						href: `/signup?redirectUrl=${redirectUrl}`,
						text: locale.signup,
					},
				}}
			/>
			<LanguageChanger dark={true} />
		</main>
	);
};

export default LoginPage;
