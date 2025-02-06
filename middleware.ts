import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import i18nConfig from "./i18nConfig";
import { i18nRouter } from "next-i18n-router";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
	let { pathname } = request.nextUrl;
	pathname = pathname.replace(RegExp("/(ar|en|mw)"), "");
	if (pathname === "/") {
		return NextResponse.redirect(new URL("/dashboard", request.url));
	}

	return i18nRouter(request, i18nConfig);
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: "/((?!api|static|.*\\..*|_next).*)",
};
