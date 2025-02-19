import apiClient from "./apiClient";
import getCookie from "./getCookie";

const coins = async () => {
	const date = new Date(new Date(Date.now()).toDateString());
	let lastDailyUsed;
	if (getCookie("updateLastDailyUsed")) {
		lastDailyUsed = (await apiClient.get("/user/student")).lastDailyUsed;
		document.cookie = `updateLastDailyUsed=false; expires=${new Date(
			0
		).toUTCString()}`;
	} else
		lastDailyUsed =
			getCookie("lastDailyUsed") ||
			(await apiClient.get("/user/student")).lastDailyUsed ||
			new Date(0).toString();

	document.cookie = `lastDailyUsed=${lastDailyUsed};`;

	if (lastDailyUsed === date.toString()) {
		return 0;
	} else {
		return 10;
	}
};

export default coins;
