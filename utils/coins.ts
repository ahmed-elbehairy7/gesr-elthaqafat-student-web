import apiClient from "./apiClient";
import getCookie from "./getCookie";

const coins = async () => {
	const date = new Date(new Date(Date.now()).toDateString());

	const lastDailyUsed =
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
