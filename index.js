import { onHashChangeHandler } from "./route.js";
import { continent, searchCountry, searchBtn, headerTitle } from "./bring.js";

const onLoadFunction = () => {
	location.hash = "_home";
};

const onFilterFunction = (continent) => {
	location.hash = `_filter_${continent}`;
};

const onSearchFunction = (value) => {
	if (value.length == 0) {
		location.hash = "_home";
		return;
	}
	const newValue = value.toLowerCase();
	const withoutSpaces = newValue.split(" ").join("_");
	location.hash = `_search_${withoutSpaces}`;
};

window.addEventListener("load", onLoadFunction);

window.addEventListener("hashchange", () => onHashChangeHandler(location.hash));

continent.forEach((btn) => {
	btn.addEventListener("click", (e) => onFilterFunction(e.target.textContent));
});

searchBtn.addEventListener("click", () =>
	onSearchFunction(searchCountry.value)
);

headerTitle.addEventListener("click", onLoadFunction);
