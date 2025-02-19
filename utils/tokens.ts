import { decodeJwt } from "jose";
import apiClient from "./apiClient";

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
		document.cookie = "generatedARefreshToken=true";
	};

	// get accessToken function
	static getAccessToken = async () => {
		const response = await this._getToken({ tokenType: "access" });
		let decoded;
		try {
			decoded = decodeJwt(response.accessToken);
		} catch (error) {
			console.log(error);
		}

		document.cookie = `accessToken=${
			response.accessToken
		}; expires=${new Date((decoded as any).exp * 1000).toUTCString()}`;

		document.cookie = `no-refresh=true; expires=${new Date(
			(decoded as any).rat * 1000
		).toUTCString()}`;
	};
}
