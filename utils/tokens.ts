import { decodeJwt } from "jose";
import apiClient from "./apiClient";
import getCookie from "./getCookie";

export default class Tokens {
	private static _getToken = async ({
		tokenType,
	}: {
		tokenType: "refresh" | "access";
	}) => {
		const response = await apiClient.post(
			`/tokens/${tokenType}`,
			{
				body: {
					refreshToken: localStorage.getItem(
						"refreshToken"
					) as string,
				},
			},
			false
		);

		return response;
	};

	// get refreshToken function
	static getRefreshToken = async () => {
		const response = await this._getToken({ tokenType: "refresh" });
		localStorage.setItem("refreshToken", response.refreshToken);
		document.cookie = "s-init=true; path=/";
		return response.refreshToken !== undefined;
	};

	// get accessToken function
	static getAccessToken = async () => {
		const response = await this._getToken({ tokenType: "access" });
		let decoded;
		try {
			decoded = decodeJwt(response.accessToken);
		} catch (error) {
			return false;
		}

		document.cookie = `accessToken=${
			response.accessToken
		}; expires=${new Date(
			(decoded as any).exp * 1000
		).toUTCString()}; path=/`;

		document.cookie = `no-refresh=true; expires=${new Date(
			(decoded as any).rat * 1000
		).toUTCString()}; path=/`;
		return true;
	};

	// refresh accessToken
	static refreshAccessToken = async () => {
		if (!getCookie("no-refresh") || !getCookie("accessToken"))
			await this.getAccessToken();
	};

	// refresh refreshToken
	static refreshRefreshToken = async () => {
		if (!localStorage.getItem("refreshToken"))
			document.cookie = `accessToken=; expires=${new Date(
				0
			).toUTCString()}; path=/`;
		if (!getCookie("s-init")) await this.getRefreshToken();
	};
}
