"use client";

import React from "react";
import InputField, { InputFieldProps } from "./inputField";
import PasswordField, { PasswordFieldProps } from "./passwordField";
import Button, { ButtonProps } from "./button";
import Link from "next/link";

const Form = ({ fields, mainButton, otherWay }: FormProps) => {
	return (
		<form className="w-2/3 flex flex-col items-center justify-center space-y-6">
			{fields.map((o, index) =>
				o.type == "input" ? (
					<InputField {...(o.props as InputFieldProps)} key={index} />
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
	);
};

export type FormProps = {
	fields: {
		type: "input" | "password";
		props: InputFieldProps | PasswordFieldProps;
	}[];
	mainButton: ButtonProps;
	otherWay: { text: string; href: string };
};

export default Form;
