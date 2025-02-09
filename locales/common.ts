export type localeType = "ar" | "en" | "mw";
export type Locale<T> = { ar: T; en: T; mw: T };

export type headerLocaleType = {
	menuBar: menuBarLocaleType;
};

export type footerLocaleType = {
	copyright: string;
};

export type menuBarLocaleType = {
	dashboard: string;
	profile: string;
};

export type formCommonLocaleType = {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
};

export const headerLocale: Locale<headerLocaleType> = {
	en: { menuBar: { dashboard: "dashboard", profile: "profile" } },
	ar: { menuBar: { dashboard: "لوحة القيادة", profile: "الحساب" } },
	mw: { menuBar: { dashboard: "dashboard", profile: "profile" } },
};

export const footerLocale: Locale<footerLocaleType> = {
	en: { copyright: "© 2025 - Gesr-Elthaqafat" },
	ar: { copyright: "© 2025 - جسر الثقافات" },
	mw: { copyright: "© 2025 - Gesr-Elthaqafat" },
};

export const formCommonLocale: Locale<formCommonLocaleType> = {
	en: {
		firstName: "First name",
		lastName: "Last name",
		email: "email",
		password: "password",
	},
	ar: {
		firstName: "الاسم الأول",
		lastName: "الاسم الأخير",
		email: "البريد الإلكتروني",
		password: "كلمة السر",
	},
	mw: {
		firstName: "First name",
		lastName: "Last name",
		email: "email",
		password: "password",
	},
};
