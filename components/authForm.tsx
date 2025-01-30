"use client";

import React from "react";
import InputField, { InputFieldProps } from "./inputField";
import PasswordField, { PasswordFieldProps } from "./passwordField";
import Button, { ButtonProps } from "./button";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.png";

const AuthForm = ({ title, fields, mainButton, otherWay }: AuthFormProps) => {
	return (
		<>
			<Image src={Logo} alt="logo" width={200} className="-mb-14" />
			<h2 className="text-xl font-bold my-8">{title}</h2>
			<form className="w-3/4 md:w-1/2 flex flex-col items-center justify-center space-y-6">
				{fields.map((o, index) =>
					o.type == "input" ? (
						<InputField
							{...(o.props as InputFieldProps)}
							key={index}
						/>
					) : (
						<PasswordField
							{...(o.props as PasswordFieldProps)}
							key={index}
						/>
					)
				)}
				<div className="flex w-full flex-row justify-between items-end">
					<Link href={otherWay.href} className="underline text-sm">
						{otherWay.text}
					</Link>
					<Button {...mainButton} />
				</div>
			</form>
		</>
	);
};

export type AuthFormProps = {
	title: string;
	fields: {
		type: "input" | "password";
		props: InputFieldProps | PasswordFieldProps;
	}[];
	mainButton: ButtonProps;
	otherWay: { text: string; href: string };
};

export default AuthForm;
