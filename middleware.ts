import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import i18nConfig from "./i18nConfig";
import { i18nRouter } from "next-i18n-router";
import { jwtVerify } from "jose";

const protectedRoutes: string[] = ["dashboard", "profile"];
const publicRoutes: string[] = [];
const bothRoutes: string[] = [];

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
	let { pathname } = request.nextUrl;
	pathname = pathname.replace(RegExp("/(ar|en|mw)"), "").replace("/", "");
	if (bothRoutes.includes(pathname)) {
		return i18nRouter(request, i18nConfig);
	}
	let verified = false;
	try {
		jwtVerify(
			request.cookies.get("accessToken")?.value as string,
			new TextEncoder().encode(process.env.SECRET)
		);
		verified = true;
		console.log(verified);
	} catch (error) {
		console.log(error);
	}

	if (protectedRoutes.includes(pathname)) {
		if (verified) return i18nRouter(request, i18nConfig);
		else return NextResponse.redirect(new URL("/signup", request.url));
	}

	if (publicRoutes.includes(pathname)) {
		if (!verified) return i18nRouter(request, i18nConfig);
		else return NextResponse.redirect(new URL("/", request.url));
	}

	if (pathname === "") {
		return NextResponse.redirect(new URL("/dashboard", request.url));
	}

	return i18nRouter(request, i18nConfig);
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: "/((?!api|static|.*\\..*|_next).*)",
};
