import { Locale } from "./common";

export type dashboardLocaleType = {
	notifyBar: notifyBarLocaleType;
	roomsContainer: roomsContainerLocaleType;
	codesContainer: codesContainerLocaleType;
};
export type notifyBarLocaleType = {
	notActivated: string;
	youAreNowEligible: string;
};
export type roomsContainerLocaleType = {
	title: string;
	noAvailableRooms: string;
	subjects: subjectsLocaleType;
	roomBox: roomBoxLocaleType;
};

export type subjectsLocaleType = {
	ar: string;
	mw: string;
	quran: string;
	tajweed: string;
	communicationSkills: string;
};
export type roomBoxLocaleType = {
	start: string;
	end: string;
	subject: string;
	status: roomStatusLocaleType;
	roomDetails: string;
	joinConversation: string;
	copied: string;
};
export type roomStatusLocaleType = {
	open: string;
	click: string;
	ended: string;
};

export type codesContainerLocaleType = {
	title: string;
	noAvailableCodes1: string;
	noAvailableCodes2: string;
	generateAConversationCode: string;
	codeBox: codeBoxLocaleType;
};
export type codeBoxLocaleType = {
	code: string;
	expires: string;
	status: codeStatusLocaleType;
};

export type codeStatusLocaleType = {
	available: string;
	used: string;
	expired: string;
};

const ar: dashboardLocaleType = {
	notifyBar: {
		notActivated: "حسابك ليس مفعلًا بعد! اضغط هنا لتتفعيله",

		youAreNowEligible:
			"مرحبا بك! يمكنك الآن الدخول في أي من الغرف عن طريق الضغط عليها",
	},
	roomsContainer: {
		title: "الغرف المتاحة",
		noAvailableRooms: "لا يوجد غرف متاحة حاليا!",
		subjects: {
			ar: "العربية",
			communicationSkills: "مهارات التواصل",
			mw: "المالاوية",
			quran: "قرآن",
			tajweed: "تجويد",
		},
		roomBox: {
			start: "فتحت",
			end: "انتهت",
			status: {
				click: "اضغط للانضمام",
				ended: "انتهت",
				open: "مفتوحة",
			},
			subject: "المادة",
			roomDetails: "تفاصيل الغرفة",
			joinConversation: "انضم لغرفة المحادثة",
			copied: "تم النسخ",
		},
	},
	codesContainer: {
		title: "الرموز المتاحة",

		generateAConversationCode: "أنشئ رمزا للمحادثة",
		noAvailableCodes1: "لا يوجد لديك رموز متاحة!",
		noAvailableCodes2: "أنشئ رمزا لتتمكن من الدخول إلى غرفة محادثة",
		codeBox: {
			code: "الرمز",
			expires: "ينتهي في",
			status: {
				available: "متاح",
				expired: "انتهى",
				used: "استعمل",
			},
		},
	},
};

const en: dashboardLocaleType = {
	notifyBar: {
		notActivated:
			"Your account is not yet activated! click here to activate",
		youAreNowEligible:
			"Welcome! you can now enter any of the rooms by clicking on it!",
	},
	roomsContainer: {
		title: "Available rooms",
		noAvailableRooms: "There's no any available rooms for now!",

		subjects: {
			ar: "arabic",
			communicationSkills: "communication skills",
			mw: "Malawi",
			quran: "Quran",
			tajweed: "Tajweed",
		},
		roomBox: {
			start: "start",
			end: "end",
			status: {
				click: "click to join",
				ended: "ENDED",
				open: "OPEN",
			},
			subject: "subject",
			roomDetails: "Room details",
			joinConversation: "join conversation room",
			copied: "copied",
		},
	},
	codesContainer: {
		title: "Available codes",

		generateAConversationCode: "Generate a conversation code",
		noAvailableCodes1: "You don't have any codes yet!",
		noAvailableCodes2: "Generate one to enter a conversation room",
		codeBox: {
			code: "code",
			expires: "expires",
			status: {
				available: "AVAILABLE",
				expired: "EXPIRED",
				used: "USED",
			},
		},
	},
};

const mw: dashboardLocaleType = {
	notifyBar: {
		notActivated:
			"Your account is not yet activated! click here to activate",
		youAreNowEligible:
			"Welcome! you can now enter any of the rooms by clicking on it!",
	},
	roomsContainer: {
		title: "Available rooms",
		noAvailableRooms: "There's no any available rooms for now!",

		subjects: {
			ar: "arabic",
			communicationSkills: "communication skills",
			mw: "Malawi",
			quran: "Quran",
			tajweed: "Tajweed",
		},
		roomBox: {
			start: "start",
			end: "end",
			status: {
				click: "click to join",
				ended: "ENDED",
				open: "OPEN",
			},
			subject: "subject",
			roomDetails: "Room details",
			joinConversation: "join conversation room",
			copied: "copied",
		},
	},
	codesContainer: {
		title: "Available codes",

		generateAConversationCode: "Generate a conversation code",
		noAvailableCodes1: "You don't have any codes yet!",
		noAvailableCodes2: "Generate one to enter a conversation room",
		codeBox: {
			code: "code",
			expires: "expires",
			status: {
				available: "AVAILABLE",
				expired: "EXPIRED",
				used: "USED",
			},
		},
	},
};

const dashboardLocale: Locale<dashboardLocaleType> = {
	ar,
	en,
	mw,
};

export default dashboardLocale;
