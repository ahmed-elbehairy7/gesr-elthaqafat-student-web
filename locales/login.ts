import { Metadata } from "next";
import { formCommonLocale, formCommonLocaleType, Locale } from "./common";

export interface loginLocaleType extends formCommonLocaleType {
	metaData: Metadata;
	login: string;
	signup: string;
}

const loginLocale: Locale<loginLocaleType> = {
	en: {
		metaData: {
			title: "Login | Gesr-Elthaqafat",
		},
		login: "Login",
		signup: "new user?",
		...formCommonLocale.en,
	},
	ar: {
		metaData: {
			title: "جسر الثقافات | تسجيل",
		},
		login: "تسجيل",
		signup: "مستخدم جديد؟",
		...formCommonLocale.ar,
	},
	mw: {
		metaData: {
			title: "Login | Gesr-Elthaqafat",
		},
		login: "Login",
		signup: "new user?",
		...formCommonLocale.mw,
	},
};

export default loginLocale;
