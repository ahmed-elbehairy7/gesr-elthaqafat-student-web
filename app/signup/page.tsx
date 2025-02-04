"use client";

import Form from "@/components/form";
import React from "react";
import { InputFieldProps } from "@/components/inputField";
import { PasswordFieldProps } from "@/components/passwordField";

const SignUpPage = () => {
	return (
		<main className="w-full h-full flex flex-col items-center justify-center pt-10 pb-20">
			<Form
				{...{
					title: "Sign Up",
					fields: [
						{
							type: "input",
							props: {
								placeholder: "First name",
								type: "text",
								id: "firstName",
							} as InputFieldProps,
						},
						{
							type: "input",
							props: {
								placeholder: "Last name",
								type: "text",
								id: "lastName",
							} as InputFieldProps,
						},
						{
							type: "input",
							props: {
								placeholder: "username",
								type: "text",
								id: "username",
							} as InputFieldProps,
						},
						{
							type: "input",
							props: {
								placeholder: "Email",
								type: "email",
								id: "email",
							} as InputFieldProps,
						},
						{
							type: "password",
							props: { signup: true } as PasswordFieldProps,
						},
						{
							type: "password",
							props: {
								confirm: true,
								signup: true,
							} as PasswordFieldProps,
						},
					],
					mainButton: {
						text: "Sign up",
						backgroundOrBorderColor: "bg-primary-color",
						fill: true,
						textColor: "text-bright-one",
						onclick: () => alert("signing up..."), //backend todo sign user up and get the required data from him
					},
					otherWay: {
						href: "/login",
						text: "Have an account",
					},
				}}
			/>
		</main>
	);
};

export default SignUpPage;
