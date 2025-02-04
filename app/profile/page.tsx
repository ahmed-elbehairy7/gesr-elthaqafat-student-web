"use client";

import Form from "@/components/form";
import { InputFieldProps } from "@/components/inputField";
import React, { useEffect, useState } from "react";

const ProfilePage = () => {
	const [name, setName] = useState("");

	useEffect(() => {
		setName("Ahmed Elbehairy"); //backend todo fetch real name
	}, []);
	return (
		<main className="w-full h-full flex flex-col items-center justify-center pb-20">
			<Form
				{...{
					hideLogo: true,
					title: `Welcome ${name}`,
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
							type: "input",
							props: {
								placeholder: "gender",
								type: "select",
								id: "gender",
								label: "gender",
								options: [
									{ text: "male", value: "male" },
									{ text: "female", value: "female" },
								],
							} as InputFieldProps,
						},
						{
							type: "input",
							props: {
								placeholder: "birthdate",
								type: "date",
								id: "birthdate",
							} as InputFieldProps,
						},
						{
							type: "input",
							props: {
								placeholder: "nationality",
								type: "text",
								id: "nationality",
							} as InputFieldProps,
						},
						{
							type: "input",
							props: {
								placeholder:
									"Tell us about your experience in learning",
								type: "textArea",
								id: "experience",
							} as InputFieldProps,
						},
						{
							type: "input",
							props: {
								placeholder:
									"What do you want to achieve by learning new language?",
								type: "textArea",
								id: "goal",
							} as InputFieldProps,
						},
					],
					mainButton: {
						text: "save changes",
						backgroundOrBorderColor: "bg-primary-color",
						fill: true,
						textColor: "text-bright-one",
						onclick: () => alert("signing up..."), //backend todo update user data
					},
					otherWay: {
						href: "/dashboard",
						text: "back",
					},
				}}
			/>
		</main>
	);
};

export default ProfilePage;
