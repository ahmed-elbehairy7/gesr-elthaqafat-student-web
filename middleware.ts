import { NextRequest } from "next/server";
import i18nConfig from "./i18nConfig";
import { i18nRouter } from "next-i18n-router";
import AuthRouter from "./utils/authRouter";

const authRouter = new AuthRouter({
	protectedRoutes: ["profile", "dashboard"],
	guestsOnlyRoutes: ["signup", "login"],
});

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
	const response = await authRouter.router(request);
	if (response) return response;
	return i18nRouter(request, i18nConfig);
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: "/((?!api|static|.*\\..*|_next).*)",
};
