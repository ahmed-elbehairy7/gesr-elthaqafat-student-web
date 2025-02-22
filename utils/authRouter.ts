import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

export default class AuthRouter {
	protectedRoutes: string[];
	guestsOnlyRoutes: string[];

	constructor({
		protectedRoutes,
		guestsOnlyRoutes,
	}: {
		protectedRoutes: string[];
		guestsOnlyRoutes: string[];
	}) {
		this.protectedRoutes = protectedRoutes;
		this.guestsOnlyRoutes = guestsOnlyRoutes;
	}

	router = async (request: NextRequest) => {
		let { pathname } = request.nextUrl;
		pathname = pathname.replace(RegExp("/(ar|en|mw)"), "").replace("/", "");

		let verified = false;
		const accessToken = request.cookies.get("accessToken")?.value as any;

		try {
			await jwtVerify(
				accessToken,
				new TextEncoder().encode(process.env.SECRET)
			);
			verified = true;
		} catch {}

		if (this.protectedRoutes.includes(pathname) && !verified)
			return NextResponse.redirect(
				new URL(`/signup?redirectUrl=${request.url}`, request.url)
			);

		if (
			(this.guestsOnlyRoutes.includes(pathname) && verified) ||
			pathname === ""
		)
			return NextResponse.redirect(new URL("/dashboard", request.url));
	};
}
