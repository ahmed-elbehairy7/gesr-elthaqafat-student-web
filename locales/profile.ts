import { formCommonLocale, formCommonLocaleType, Locale } from "./common";

export interface profileLocaleType extends formCommonLocaleType {
	welcome: string;
	genders: { title: string; male: string; female: string };
	birthdate: string;
	nationality: string;
	experience: string;
	goal: string;
	save: string;
	back: string;
}

const ar: profileLocaleType = {
	welcome: "مرحبا",
	...formCommonLocale.ar,
	genders: {
		title: "الجنس",
		male: "ذكر",
		female: "أنثى",
	},
	birthdate: "تاريخ الولادة",
	nationality: "الجنسية",
	experience: "أخبرنا عن خبرتك في التعلم",
	goal: "ما الذي تود تحصيله بتعلم لغة جديدة؟",
	save: "احفظ التغييرات",
	back: "رجوع",
};

const en: profileLocaleType = {
	welcome: "Welcome",
	...formCommonLocale.en,
	genders: {
		title: "gender",
		male: "male",
		female: "female",
	},
	birthdate: "birthdate",
	nationality: "nationality",
	experience: "Tell us about your experience in learning",
	goal: "What do you want to achieve by learning new language",
	save: "save changes",
	back: "back",
};

const mw: profileLocaleType = {
	welcome: "Welcome",
	...formCommonLocale.mw,
	genders: {
		title: "gender",
		male: "male",
		female: "female",
	},
	birthdate: "birthdate",
	nationality: "nationality",
	experience: "Tell us about your experience in learning",
	goal: "What do you want to achieve by learning new language",
	save: "save changes",
	back: "back",
};

const profileLocale: Locale<profileLocaleType> = {
	ar,
	en,
	mw,
};

export default profileLocale;
