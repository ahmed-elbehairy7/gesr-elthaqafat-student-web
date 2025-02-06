"use client";

import Form from "@/components/form";
import { InputFieldProps } from "@/components/inputField";
import { localeType } from "@/locales/common";
import profileLocale, { profileLocaleType } from "@/locales/profile";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProfilePage = () => {
	const [name, setName] = useState("");
	const router = useRouter();
	const params = useParams();

	const locale = profileLocale[params.locale as localeType];

	useEffect(() => {
		setName("Ahmed Elbehairy"); //backend todo fetch real name
	}, []);

	return (
		<main className="w-full h-full flex flex-col items-center justify-center pb-20">
			<Form
				{...{
					hideLogo: true,
					title: `${locale.welcome} ${name}`,
					fields: [
						{
							type: "input",
							props: {
								placeholder: locale.firstName,
								type: "text",
								id: "firstName",
							} as InputFieldProps,
						},
						{
							type: "input",
							props: {
								placeholder: locale.lastName,
								type: "text",
								id: "lastName",
							} as InputFieldProps,
						},
						{
							type: "input",
							props: {
								placeholder: locale.username,
								type: "text",
								id: "username",
							} as InputFieldProps,
						},
						{
							type: "input",
							props: {
								placeholder: locale.email,
								type: "email",
								id: "email",
							} as InputFieldProps,
						},
						{
							type: "input",
							props: {
								placeholder: locale.genders.title,
								type: "select",
								id: "gender",
								label: "gender",
								options: [
									{
										text: locale.genders.male,
										value: "male",
									},
									{
										text: locale.genders.female,
										value: "female",
									},
								],
							} as InputFieldProps,
						},
						{
							type: "input",
							props: {
								placeholder: locale.birthdate,
								type: "date",
								id: "birthdate",
							} as InputFieldProps,
						},
						{
							type: "input",
							props: {
								placeholder: locale.nationality,
								type: "text",
								id: "nationality",
							} as InputFieldProps,
						},
						{
							type: "input",
							props: {
								placeholder: locale.experience,
								type: "textArea",
								id: "experience",
							} as InputFieldProps,
						},
						{
							type: "input",
							props: {
								placeholder: locale.goal,
								type: "textArea",
								id: "goal",
							} as InputFieldProps,
						},
					],
					mainButton: {
						text: locale.save,
						backgroundOrBorderColor: "bg-primary-color",
						fill: true,
						textColor: "text-bright-one",
						onclick: () => {
							localStorage.setItem("dataComplete", "done");
							alert("saving changes...");
							router.push("/");
						}, //backend todo update user data
					},
					otherWay: {
						href: "/dashboard",
						text: locale.back,
					},
				}}
			/>
		</main>
	);
};

export default ProfilePage;
