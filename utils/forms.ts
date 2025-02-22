import { Dispatch } from "react";
import apiClient, { ApiClientRequestInit } from "./apiClient";
import Tokens from "./tokens";

export interface formHandlerProps {
	route: string;
	formProps: formProps;
	protect: boolean;
	fetchFunc?: (
		route: string,
		init: ApiClientRequestInit,
		protect?: boolean
	) => Promise<any>;
}

export default class Forms {
	static submit = async ({
		route,
		formProps,
		protect = false,
		fetchFunc = apiClient.post,
	}: formHandlerProps) => {
		const response = await fetchFunc(
			route,
			{
				body: { ...formProps.formData },
			},
			protect
		);

		if (response.errors) {
			formProps.setErrors(response.errors);
			return false;
		}
		return response;
	};
}

export interface formProps {
	formData: { [key: string]: string };
	setErrors: Dispatch<React.SetStateAction<any>>;
}
