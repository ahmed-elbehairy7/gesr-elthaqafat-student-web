export type dashboardLocaleType = {
	roomsContainer: roomsContainerLocaleType;
	// codesContainer: codesContainerLocaleType;
};
export type roomsContainerLocaleType = {
	title: string;
	noAvailableRooms: string;
	notActivated: string;
	youAreNowEligible: string;
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
};
export type roomStatusLocaleType = {
	open: string;
	click: string;
	ended: string;
};

export type codesContainerLocaleType = {
	title: string;
	noAvailableCodes: string;
	generateAConversationCode: string;
};

const ar: dashboardLocaleType = {
	roomsContainer: {
		title: "الغرف المتاحة",
		noAvailableRooms: "لا يوجد غرف متاحة حاليا!",
		notActivated: "حسابك ليس مفعلًا بعد! اضغط هنا لتتفعيله",
		youAreNowEligible:
			"مرحبا بك! يمكنك الآن الدخول في أي من الغرف عن طريق الضغط عليها",
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
		},
	},
};

const en: dashboardLocaleType = {
	roomsContainer: {
		title: "Available rooms",
		noAvailableRooms: "There's no any available rooms for now!",
		notActivated:
			"Your account is not yet activated! click here to activate",
		youAreNowEligible:
			"Welcome! you can now enter any of the rooms by clicking on it!",
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
		},
	},
};

const mw: dashboardLocaleType = {
	roomsContainer: {
		title: "Available rooms",
		noAvailableRooms: "There's no any available rooms for now!",
		notActivated:
			"Your account is not yet activated! click here to activate",
		youAreNowEligible:
			"Welcome! you can now enter any of the rooms by clicking on it!",
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
		},
	},
};

const dashboardLocale = {
	ar,
	en,
	mw,
};

export default dashboardLocale;
