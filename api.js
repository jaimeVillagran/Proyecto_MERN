const transformData = (country) => {
	return {
		names: {
			common: country.name.common,
			official: country.name.official,
		},
		flag: country.flags.png,
		population: country.population,
		region: country.region,
		capital: country.capital,
	};
};

export const getAll = async () => {
	const res = await fetch("https://restcountries.com/v3.1/all");
	const data = await res.json();
	const countries = data.map((item) => transformData(item));
	return countries;
};

export const getSearch = async (name) => {
	const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
	const data = await res.json();

	if (data.status == 404) {
		return false;
	}
	const search = data.map((item) => transformData(item));
	return search;
};

export const getFilter = async (region) => {
	const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
	const data = await res.json();

	const filter = data.map((item) => transformData(item));

	return filter;
};

export const getDetails = async (name) => {
	const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
	const data = await res.json();

	if (data.status == 404) {
		return false;
	}

	return data;
};
