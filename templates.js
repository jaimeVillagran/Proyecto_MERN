import { Loader } from "./bring.js";

const contentCard = (props) => {
	const { capital, flag, names, population, region } = props;

	return `
		<div class=country-card>
			<div class="flip-box">
				<div class="front">
					<img src="${flag}" alt=${names.common} class="img">
					<h3>${names.common}</h3>
					<span class=capital>${region}</span>
				</div>

			<div class="back">
				<img src="${flag}" alt=${names.common} class="img">
					<div class="details">
						<p>
							<span class=capital>${capital}</span>
							<span class=capital>${population}</span>
						</p>
			</div>
		`;
};

export const CountryCard = (props) => {
	const {
		names: { common },
	} = props;

	const content = contentCard(props);

	const divCard = document.createElement("div");
	divCard.classList.add("card");
	divCard.innerHTML = content;

	const newName = common.toLowerCase().split(" ").join("_");

	divCard.addEventListener(
		"click",
		() => (location.hash = `_details_${newName}`)
	);

	return divCard;
};

const detailsTemplate = (props) => {
	console.log(props);

	const {
		capital,
		flags,
		altSpellings,
		borders,
		coatOfArms,
		continents,
		languages,
		population,
		timezones,
	} = props;

	return `
        <h1 class="titleDetails">Detalles</h1>
        <div class="containDetails">
            <div class="colum colum1">
                    <img src="${flags.png}" class="imageFlagDetails"/>
                    <div class="boxText">
                        <p class="text">Name: ${altSpellings[1]}</p>
                        <p class="text">Capital: ${capital[0]}</p>
                    </div>
                </div>
                <div class="colum colum2">
                    <img src="${coatOfArms.png}" class="imageEscudoDetails"/>
                    <div class="boxText">
                        <p class="text">Lenguages: ${Object.values(
													languages
												).map((e) => e)}</p>
                        <p class="text">Borders: ${borders}</p>
                    </div>
                </div>
                <div class="colum colum3">
                    <div class="boxText">
                        <p class="text">Region: ${continents[0]}</p>
                        <p class="text">Population: ${population}</p>
                        <p class="text">Time Zone: ${timezones}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
};

export const createContainer = (className) => {
	const section = document.createElement("section");
	section.className = className;

	return section;
};

export const printOnTarget = (data, target) => {
	const cards = data.map((element) => CountryCard(element));

	const container = createContainer("contain__cards");

	container.append(...cards);

	target.appendChild(container);
};

export const printDetails = (data, target) => {
	const template = Array.isArray(data)
		? detailsTemplate(data[0])
		: detailsTemplate(data);

	const container = createContainer("details_country");
	container.innerHTML = template;

	target.appendChild(container);
};

export const showLoader = (show) => {
	if (show) {
		Loader.classList.remove("hidden");
	} else {
		Loader.classList.add("hidden");
	}
};
