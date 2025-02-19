"use client";

import Form from "@/components/form";
import React, { useState } from "react";
import { InputFieldProps } from "@/components/inputField";
import { PasswordFieldProps } from "@/components/passwordField";
import { useParams } from "next/navigation";
import signupLocale from "@/locales/signup";
import { localeType } from "@/locales/common";
import LanguageChanger from "@/components/languageChanger";
import apiClient from "@/apiClient";

const SignUpPage = () => {
	const params = useParams();
	const locale = signupLocale[params.locale as localeType];
	const [formData, setFormData] = useState({});
	const [errors, setErrors] = useState({});

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const _submit = async () => {
		console.log(formData);
		const response = await await apiClient.fetch(`/user/signup`, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
			},
			body: JSON.stringify({ ...formData, type: "student" }),
		});
		console.log(response);

		if (response.errors) {
			setErrors(response.errors);
			return;
		}
		localStorage.setItem("refreshToken", response.refreshToken);
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
							} as InputFieldProps,
						},
						{
							type: "input",
							props: {
								onChange,
								placeholder: locale.lastName,
								type: "text",
								id: "lastName",
							} as InputFieldProps,
						},

						{
							type: "input",
							props: {
								onChange,
								placeholder: locale.email,
								type: "email",
								id: "email",
							} as InputFieldProps,
						},
						{
							type: "password",
							props: {
								onChange,
								placeholder: locale.password,
								signup: true,
							} as PasswordFieldProps,
						},
						{
							type: "password",
							props: {
								onChange,
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
						onclick: _submit, //backend todo sign user up and get the required data from him
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
