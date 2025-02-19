import { Dispatch } from "react";
import { decodeJwt } from "jose";

export class ApiClient {
	ver: string;
	host: string;
	constructor({ ver, host }: ApiClientProps) {
		this.ver = ver;
		this.host = host;
	}

	private _fetch = async (route: string, init?: ApiClientRequestInit) => {
		if (!getCookie("generatedARefreshToken")) {
			await this.getRefreshToken();
			document.cookie = "generatedARefreshToken=true";
		}
		const response = await (
			await fetch(`${this.host}/${this.ver}${route}`, {
				...init,
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${getCookie("accessToken")}`,
					...init?.headers,
				},
				body: JSON.stringify(init?.body),
			})
		).json();

		if (!getCookie("no-refresh")) {
			await this.getAccessToken();
		}

		return response;
	};

	// get token function
	private _getToken = async ({
		tokenType,
	}: {
		tokenType: "refresh" | "access";
	}) => {
		const response = await this.post(`/tokens/${tokenType}`, {
			body: {
				refreshToken: localStorage.getItem("refreshToken") as string,
			},
		});

		return response;
	};

	// get refreshToken function
	getRefreshToken = async () => {
		const response = await this._getToken({ tokenType: "refresh" });
		localStorage.setItem("refreshToken", response.refreshToken);
	};

	// get accessToken function
	getAccessToken = async () => {
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

	// ---------- signup handler
	async signup({ formData, setErrors }: formProps) {
		const response = await await apiClient.post(`/user/signup`, {
			body: { ...formData, type: "student" },
		});

		if (response.errors) {
			setErrors(response.errors);
			return false;
		}
		localStorage.setItem("refreshToken", response.refreshToken);
		await this.getAccessToken();
		return true;
	}
	// -------------------- methods functions

	// post
	post = async (route: string, init?: ApiClientRequestInit) => {
		return await this._fetch(route, { ...init, method: "post" });
	};

	// get
	get = async (route: string, init?: ApiClientRequestInit) => {
		return await this._fetch(route, { ...init, method: "get" });
	};

	// put
	put = async (route: string, init?: ApiClientRequestInit) => {
		return await this._fetch(route, { ...init, method: "put" });
	};

	// delete
	delete = async (route: string, init?: ApiClientRequestInit) => {
		return await this._fetch(route, { ...init, method: "delete" });
	};
}

export interface formProps {
	formData: { [key: string]: string };
	setErrors: Dispatch<React.SetStateAction<any>>;
}
export interface ApiClientProps {
	ver: string;
	host: string;
}

export interface ApiClientRequestInit extends RequestInit {
	body?: any;
}

const apiClient = new ApiClient({
	host: process.env.NEXT_PUBLIC_API as string,
	ver: "v0",
});

export default apiClient;
