"use client";

import Form from "@/components/form";
import React, { useState } from "react";
import { InputFieldProps } from "@/components/inputField";
import { PasswordFieldProps } from "@/components/passwordField";
import { useParams, useRouter } from "next/navigation";
import signupLocale from "@/locales/signup";
import { localeType } from "@/locales/common";
import LanguageChanger from "@/components/languageChanger";
import apiClient from "@/apiClient";

const SignUpPage = () => {
	const params = useParams();
	const locale = signupLocale[params.locale as localeType];
	const router = useRouter();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		"confirm-password": "",
		firstName: "",
		lastName: "",
	});
	const [errors, setErrors] = useState({
		firstName: null,
		lastName: null,
		email: null,
		password: null,
		"confirm-password": null,
	});

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

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
							(await apiClient.signup({ setErrors, formData })) &&
								router.push("/");
						},
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
