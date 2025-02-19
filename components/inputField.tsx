import React, { ChangeEventHandler } from "react";

const InputField = ({ required = true, ...props }: InputFieldProps) => {
	const globalClassName = "w-full px-3 py-3 rounded-inputField";
	return (
		<>
			{props.type === "select" && (
				<div className="flex flex-row items-center w-full justify-between">
					<select
						className={globalClassName}
						title={props.placeholder}
						name={props.id}
						required={required}
						defaultValue={""}
						onChange={props.onChange}
					>
						<option value={""} disabled>
							{props.placeholder}
						</option>
						{props.options?.map((v, index) => (
							<option key={index} value={v.value}>
								{v.text}
							</option>
						))}
					</select>
				</div>
			)}
			{props.type === "textArea" && (
				<textarea
					className={globalClassName}
					name={props.id}
					{...props}
					required={required}
				/>
			)}
			{!["select", "textArea"].includes(props.type) && (
				<input
					className={globalClassName}
					name={props.id}
					{...props}
					required={required}
				/>
			)}
		</>
	);
};

export type InputFieldProps = {
	placeholder: string;
	id: string;
	type: React.HTMLInputTypeAttribute | "select" | "textArea";
	options?: { text: string; value: string }[];
	required?: boolean;
	autoComplete?: string;
	minLength?: number;
	maxlength?: number;
	label?: string;
	onChange: ChangeEventHandler<
		HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
	>;
	error?: validationError;
};

export type validationError = {
	name: string;
	message: string;
	kind: "required" | "unique" | "minlength" | "maxlength" | "enum" | "regexp";
	path: string;
};

export default InputField;
