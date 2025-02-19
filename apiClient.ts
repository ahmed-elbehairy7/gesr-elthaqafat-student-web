import { decode } from "jsonwebtoken";

export class ApiClient {
	ver: string;
	host: string;
	constructor({ ver, host }: ApiClientProps) {
		this.ver = ver;
		this.host = host;
	}

	async fetch(route: string, init?: RequestInit) {
		return await (
			await fetch(`${this.host}/${this.ver}${route}`, init)
		).json();
	}

	async getToken({ tokenType }: { tokenType: "refresh" | "access" }) {
		const response = await this.fetch(`/tokens/${tokenType}`, {
			method: "POST",
			body: JSON.stringify({
				refreshToken: localStorage.getItem("refreshToken") as string,
			}),
		});

		return await response.json();
	}

	async getRefreshToken() {
		const response = await this.getToken({ tokenType: "refresh" });
		console.log(response);
		document.cookie = response.refreshToken;
	}
	async getAccessToken(document: Document) {
		const response = await this.getToken({ tokenType: "access" });
		console.log(response);
		document.cookie = response.accessToken;
	}
}

export interface ApiClientProps {
	ver: string;
	host: string;
}

const apiClient = new ApiClient({
	host: process.env.NEXT_PUBLIC_API as string,
	ver: "v0",
});

export default apiClient;
