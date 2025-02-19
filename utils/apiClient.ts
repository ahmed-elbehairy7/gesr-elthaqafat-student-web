import getCookie from "./getCookie";
import Tokens from "./tokens";

export class ApiClient {
	ver: string;
	host: string;
	constructor({ ver, host }: ApiClientProps) {
		this.ver = ver;
		this.host = host;
	}

	private _fetch = async (
		route: string,
		protect: boolean,
		init?: ApiClientRequestInit
	) => {
		const headers = new Headers({
			"Content-Type": "application/json",
			...init?.headers,
		});

		// if this is a protected route, add token to headers
		if (protect) {
			headers.append(
				"Authorization",
				`Bearer ${getCookie("accessToken")}`
			);
		}
		const response = await (
			await fetch(`${this.host}/${this.ver}${route}`, {
				...init,
				headers: headers,
				body: JSON.stringify(init?.body),
			})
		).json();

		return response;
	};

	// -------------------- methods functions

	// post
	post = async (
		route: string,
		init?: ApiClientRequestInit,
		protect: boolean = true
	) => {
		return await this._fetch(route, protect, { ...init, method: "post" });
	};

	// get
	get = async (
		route: string,
		init?: ApiClientRequestInit,
		protect: boolean = true
	) => {
		return await this._fetch(route, protect, { ...init, method: "get" });
	};

	// put
	put = async (
		route: string,
		init?: ApiClientRequestInit,
		protect: boolean = true
	) => {
		return await this._fetch(route, protect, { ...init, method: "put" });
	};

	// delete
	delete = async (
		route: string,
		init?: ApiClientRequestInit,
		protect: boolean = true
	) => {
		return await this._fetch(route, protect, { ...init, method: "delete" });
	};
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
