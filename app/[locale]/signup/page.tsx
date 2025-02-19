"use client";

import Form from "@/components/form";
import React, { useEffect, useState } from "react";
import { InputFieldProps } from "@/components/inputField";
import { PasswordFieldProps } from "@/components/passwordField";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import signupLocale from "@/locales/signup";
import { localeType } from "@/locales/common";
import LanguageChanger from "@/components/languageChanger";
import Forms from "@/utils/forms";
import Tokens from "@/utils/tokens";

const SignUpPage = () => {
	const params = useParams();
	const locale = signupLocale[params.locale as localeType];
	const router = useRouter();
	const [formData, setFormData] = useState<any>({});
	const [errors, setErrors] = useState<any>({});

	const searchParams = useSearchParams();
	const redirectUrl = searchParams.get("redirectUrl") || "/";

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setErrors({ ...errors, [e.target.name]: null });
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
					title: locale.signup,
					fields: [
						{
							type: "input",
							props: {
								onChange,
								placeholder: locale.firstName,
								type: "text",
								id: "firstName",
								error: errors.firstName,
							} as InputFieldProps,
						},
						{
							type: "input",
							props: {
								onChange,
								placeholder: locale.lastName,
								type: "text",
								id: "lastName",
								error: errors.lastName,
							} as InputFieldProps,
						},

						{
							type: "input",
							props: {
								onChange,
								placeholder: locale.email,
								type: "email",
								id: "email",
								error: errors.email,
							} as InputFieldProps,
						},
						{
							type: "password",
							props: {
								onChange,
								placeholder: locale.password,
								signup: true,
								error: errors.password,
							} as PasswordFieldProps,
						},
						{
							type: "password",
							props: {
								onChange,
								placeholder: locale.confirmPassword,
								confirm: true,
								signup: true,
								error: errors["confirm-password"],
							} as PasswordFieldProps,
						},
					],
					mainButton: {
						text: locale.signup,
						backgroundOrBorderColor: "bg-primary-color",
						fill: true,
						textColor: "text-bright-one",
						onclick: async () => {
							(await Forms.signup({ setErrors, formData })) &&
								router.push(redirectUrl);
						},
					},
					otherWay: {
						href: `/login?redirectUrl=${redirectUrl}`,
						text: locale.login,
					},
				}}
			/>
			<LanguageChanger dark={true} />
		</main>
	);
};

export default SignUpPage;
