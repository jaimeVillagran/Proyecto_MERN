import { Root } from "./js/bring.js";

import { getAll, getFilter, getSearch, getDetails } from "./js/api.js";

import { printOnTarget, printDetails } from "./js/templates.js";

export const ClearRoot = () => {
	Root.innerHTML = "";
	return true;
};

export const loadHome = async () => {
	ClearRoot();
	const countries = await getAll();
	printOnTarget(countries, Root);
};

export const loadSearch = async (Dynamic) => {
	ClearRoot();
	const country = await getSearch(Dynamic);
	if (!country) {
		console.error("some errors here");
		location.hash = "_home";
		return;
	}
	printOnTarget(country, Root);
};

export const loadFilter = async (Dynamic) => {
	ClearRoot();
	const country = await getFilter(Dynamic);
	printOnTarget(country, Root);
};

export const loadDetails = async (Dynamic) => {
	ClearRoot();
	const country = await getDetails(Dynamic);
	printDetails(country, Root);
};
