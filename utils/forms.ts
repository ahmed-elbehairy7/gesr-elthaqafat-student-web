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

	private static _auth = async (
		route: "signup" | "login",
		additionals: any,
		{ formData, setErrors }: formProps
	) => {
		const res = await this.submit({
			route: `/user/${route}`,
			formProps: { formData: { ...formData, ...additionals }, setErrors },
			protect: false,
		});
		if (!res) return res;

		localStorage.setItem("refreshToken", res.refreshToken);
		await Tokens.getAccessToken();
		return res;
	};

	// ---------- signup handler
	static signup = async (props: formProps) => {
		return await this._auth("signup", { type: "student" }, props);
	};

	// ---------- login handler
	static login = async (props: formProps) => {
		return await this._auth("login", {}, props);
	};
}

export interface formProps {
	formData: { [key: string]: string };
	setErrors: Dispatch<React.SetStateAction<any>>;
}
