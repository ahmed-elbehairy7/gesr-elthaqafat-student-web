export type localeType = "ar" | "en" | "mw";
export type Locale<T> = { ar: T; en: T; mw: T };

export type headerLocaleType = {
	menuBar: { dashboard: string; profile: string };
};

export type formCommonLocaleType = {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	username: string;
};

export const headerLocale: Locale<headerLocaleType> = {
	en: { menuBar: { dashboard: "dashboard", profile: "profile" } },
	ar: { menuBar: { dashboard: "لوحة القيادة", profile: "الحساب" } },
	mw: { menuBar: { dashboard: "dashboard", profile: "profile" } },
};

export const formCommonLocale: Locale<formCommonLocaleType> = {
	en: {
		firstName: "First name",
		lastName: "Last name",
		username: "username",
		email: "email",
		password: "password",
	},
	ar: {
		firstName: "الاسم الأول",
		lastName: "الاسم الأخير",
		username: "اسم المستخدم",
		email: "البريد الإلكتروني",
		password: "كلمة السر",
	},
	mw: {
		firstName: "First name",
		lastName: "Last name",
		username: "username",
		email: "email",
		password: "password",
	},
};
