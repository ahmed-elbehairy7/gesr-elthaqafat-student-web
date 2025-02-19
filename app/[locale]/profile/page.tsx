"use client";

import Form from "@/components/form";
import { InputFieldProps } from "@/components/inputField";
import { localeType } from "@/locales/common";
import profileLocale from "@/locales/profile";
import apiClient from "@/utils/apiClient";
import Forms from "@/utils/forms";
import Tokens from "@/utils/tokens";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProfilePage = () => {
	const params = useParams();

	const [formData, setFormData] = useState<any>({});
	const [changedData, setChangedData] = useState<any>({});
	const [errors, setErrors] = useState<any>({});

	const locale = profileLocale[params.locale as localeType];

	useEffect(() => {
		(async () => {
			const userData = await apiClient.get("/user");
			const birthdate = new Date(userData.birthdate)
				.toLocaleDateString("en-us", {
					month: "2-digit",
					year: "numeric",
					day: "2-digit",
				})
				.split("/")
				.reverse()
				.join("-");
			setFormData({
				...userData,
				birthdate: birthdate,
			});
		})();
	}, []);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setErrors({ ...errors, [e.target.name]: null });
		setFormData({ ...formData, [e.target.name]: e.target.value });
		setChangedData({ ...changedData, [e.target.name]: e.target.value });
	};

	return (
		<main className="w-full h-full flex flex-col items-center justify-center pb-20">
			<Form
				{...{
					hideLogo: true,
					title: `${locale.welcome} ${formData.firstName} ${formData.lastName}`,
					fields: [
						{
							type: "input",
							props: {
								placeholder: locale.firstName,
								type: "text",
								id: "firstName",
								onChange,
								value: formData.firstName,
								error: errors.firstName,
							} as InputFieldProps,
						},
						{
							type: "input",
							props: {
								placeholder: locale.lastName,
								type: "text",
								id: "lastName",
								onChange,
								value: formData.lastName,
								error: errors.lastName,
							} as InputFieldProps,
						},

						{
							type: "input",
							props: {
								placeholder: locale.email,
								type: "email",
								id: "email",
								onChange,
								value: formData.email,
								error: errors.email,
							} as InputFieldProps,
						},
						{
							type: "input",
							props: {
								placeholder: locale.genders.title,
								type: "select",
								id: "gender",
								label: "gender",
								onChange,
								value: formData.gender,
								error: errors.gender,
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
								onChange,
								id: "birthdate",
								value: formData.birthdate,
								error: errors.birthdate,
							} as InputFieldProps,
						},
						{
							type: "input",
							props: {
								placeholder: locale.nationality,
								type: "text",
								onChange,
								id: "nationality",
								value: formData.nationality,
								error: errors.nationality,
							} as InputFieldProps,
						},
						{
							type: "input",
							props: {
								placeholder: locale.experience,
								type: "textArea",
								onChange,
								id: "experience",
								value: formData.experience,
								error: errors.experience,
							} as InputFieldProps,
						},
						{
							type: "input",
							props: {
								placeholder: locale.goal,
								type: "textArea",
								id: "goal",
								onChange,
								value: formData.goal,
								error: errors.goal,
							} as InputFieldProps,
						},
					],
					mainButton: {
						text: locale.save,
						backgroundOrBorderColor: "bg-primary-color",
						fill: true,
						textColor: "text-bright-one",
						onclick: async () => {
							await Forms.submit({
								route: "/user",
								formProps: {
									formData: changedData,
									setErrors,
								},
								protect: true,
								fetchFunc: apiClient.put,
							});
							await Tokens.getAccessToken();
						},
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
