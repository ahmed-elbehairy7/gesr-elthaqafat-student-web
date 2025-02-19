import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import i18nConfig from "./i18nConfig";
import { i18nRouter } from "next-i18n-router";
import { jwtVerify } from "jose";

const protectedRoutes: string[] = ["dashboard", "profile"];
const guestsOnlyRoutes: string[] = ["signup", "login"];

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
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

	if (protectedRoutes.includes(pathname) && !verified)
		return NextResponse.redirect(
			new URL(`/signup?redirectUrl=${request.url}`, request.url)
		);

	if ((guestsOnlyRoutes.includes(pathname) && verified) || pathname === "")
		return NextResponse.redirect(new URL("/dashboard", request.url));

	return i18nRouter(request, i18nConfig);
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: "/((?!api|static|.*\\..*|_next).*)",
};
