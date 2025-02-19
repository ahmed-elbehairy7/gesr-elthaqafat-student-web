"use client";

import React, { ChangeEventHandler, useState } from "react";
import InputField, { validationError } from "./inputField";
import showImage from "@/assets/Show.png";
import hideImage from "@/assets/hide.png";
import Image from "next/image";
import Link from "next/link";

const PasswordField = (props: PasswordFieldProps) => {
	const name = props.confirm ? "confirm-password" : "password";
	const autoComplete = props.signup ? "new-password" : "current-password";
	const [show, setShow] = useState<"password" | "text">("password");
	return (
		<div className="flex flex-row justify-between w-full">
			<InputField
				{...{
					id: name,
					name,
					placeholder: props.placeholder,
					type: show,
					onChange: props.onChange,
					autoComplete,
					minLength: 8,
				}}
			/>
			<Link
				className="flex p-3 h-full w-fit"
				href={""}
				onClick={(e) => {
					e.preventDefault();
					setShow(show == "password" ? "text" : "password");
				}}
			>
				<Image
					src={show == "password" ? showImage : hideImage}
					alt={"show and hide password"}
					width={30}
				/>
			</Link>
		</div>
	);
};

export type PasswordFieldProps = {
	confirm?: true;
	signup?: true;
	placeholder: string;
	onChange: ChangeEventHandler<
		HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
	>;
	error?: validationError;
};

export default PasswordField;
