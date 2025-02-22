import { NextRequest } from "next/server";
import Forms, { formProps } from "./forms";
import Tokens from "./tokens";

export default class Auth {
	private static _auth = async (
		route: "signup" | "login",
		additionals: any,
		{ formData, setErrors }: formProps
	) => {
		const res = await Forms.submit({
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
