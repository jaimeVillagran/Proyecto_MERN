import {
	loadFilter,
	loadHome,
	loadSearch,
	loadDetails,
} from "./Proyecto_MERN/endpoints.js";

import { showLoader } from "./templates.js";

export const onHashChangeHandler = async (hash) => {
	const [, endPoint, DynamicData] = hash.split("_");
	/*console.log(endPoint, DynamicData);*/

	switch (endPoint) {
		case "home":
			showLoader(true);
			await loadHome();
			setTimeout(() => showLoader(false), 2500);
			break;

		case "search":
			showLoader(true);
			await loadSearch(DynamicData);
			setTimeout(() => showLoader(false), 2500);
			break;

		case "filter":
			showLoader(true);
			await loadFilter(DynamicData);
			setTimeout(() => showLoader(false), 2500);
			break;

		case "details":
			showLoader(true);
			await loadDetails(DynamicData);
			setTimeout(() => showLoader(false), 2500);
			break;

		default:
			await loadHome();
			break;
	}
};
