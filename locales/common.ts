import { Metadata } from "next";

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

const commonMetaData: Locale<{ title: string; description: string }> = {
	ar: {
		title: "جسر الثقافات",
		description:
			"جسر الثقافات | تعلم اللغات و القرآن و التجويد و مهارات التواصل بسهولة و بساطة",
	},
	en: {
		title: "Gesr-Elthaqafat",
		description:
			"Gesr-Elthaqafat | Learn languages, Quran, Tajweed, and communication skills easily and simply",
	},
	mw: {
		title: "Gesr-Elthaqafat",
		description:
			"Gesr-Elthaqafat | Learn languages, Quran, Tajweed, and communication skills easily and simply",
	},
};

export const defaultMetaData: Locale<Metadata> = {
	ar: {
		...commonMetaData.ar,
		openGraph: {
			...commonMetaData.ar,
			images: [{ url: `${process.env.HOST}/logo.png` }],
		},
		keywords:
			"جسر الثقافات, تعلم اللغات, تعلم القرآن, تعلم التجويد, تعلم مهارات التواصل",
	},
	en: {
		...commonMetaData.en,
		openGraph: {
			...commonMetaData.en,
			images: [{ url: `${process.env.HOST}/logo.png` }],
		},

		keywords:
			"Gesr-Elthaqafat, learn languages, learn Quran, learn Tajweed, learn communication skills",
	},
	mw: {
		...commonMetaData.mw,
		openGraph: {
			...commonMetaData.mw,
			images: [{ url: `${process.env.HOST}/logo.png` }],
		},

		keywords:
			"Gesr-Elthaqafat, learn languages, learn Quran, learn Tajweed, learn communication skills",
	},
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
