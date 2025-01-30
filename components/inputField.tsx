import React from "react";

const InputField = (props: InputFieldProps) => {
	const required = props.requied == null;
	return (
		<input
			className="w-full px-3 py-3 rounded-inputField"
			name={props.id}
			{...props}
			required={required}
		/>
	);
};

export type InputFieldProps = {
	placeholder: string;
	id: string;
	type: React.HTMLInputTypeAttribute | undefined;
	requied?: false;
	autoComplete?: string;
	minLength?: number;
	maxlength?: number;
};

export default InputField;
