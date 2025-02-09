import { Metadata } from "next";
import { formCommonLocale, formCommonLocaleType, Locale } from "./common";

export interface signupLocale extends formCommonLocaleType {
	metaData: Metadata;
	signup: string;
	login: string;
	confirmPassword: string;
}

const signupLocale: Locale<signupLocale> = {
	en: {
		metaData: {
			title: "Sign up | Gesr-Elthaqafat",
		},
		signup: "Sign up",
		login: "Have an account?",
		...formCommonLocale.en,
		confirmPassword: "confirm password",
	},
	ar: {
		metaData: {
			title: "جسر الثقافات | تسجيل الدخول",
		},
		signup: "تسجيل الدخول",
		login: "لديك حساب؟",
		...formCommonLocale.ar,
		confirmPassword: "تأكيد كلمة السر",
	},
	mw: {
		metaData: {
			title: "Sign up | Gesr-Elthaqafat",
		},
		signup: "Sign up",
		login: "Have an account?",
		...formCommonLocale.mw,
		confirmPassword: "confirm password",
	},
};

export default signupLocale;
