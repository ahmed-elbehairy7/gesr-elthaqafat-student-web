import { formCommonLocale, formCommonLocaleType, Locale } from "./common";

export interface signupLocale extends formCommonLocaleType {
	signup: string;
	login: string;
	confirmPassword: string;
}

const signupLocale: Locale<signupLocale> = {
	en: {
		signup: "Sign up",
		login: "Have an account?",
		...formCommonLocale.en,
		confirmPassword: "confirm password",
	},
	ar: {
		signup: "تسجيل الدخول",
		login: "لديك حساب؟",
		...formCommonLocale.ar,
		confirmPassword: "تأكيد كلمة السر",
	},
	mw: {
		signup: "Sign up",
		login: "Have an account?",
		...formCommonLocale.mw,
		confirmPassword: "confirm password",
	},
};

export default signupLocale;
