import { formCommonLocale, formCommonLocaleType, Locale } from "./common";

export interface loginLocaleType extends formCommonLocaleType {
	login: string;
	signup: string;
}

const loginLocale: Locale<loginLocaleType> = {
	en: {
		login: "Login",
		signup: "new user?",
		...formCommonLocale.en,
	},
	ar: {
		login: "تسجيل",
		signup: "مستخدم جديد؟",
		...formCommonLocale.ar,
	},
	mw: {
		login: "Login",
		signup: "new user?",
		...formCommonLocale.mw,
	},
};

export default loginLocale;
