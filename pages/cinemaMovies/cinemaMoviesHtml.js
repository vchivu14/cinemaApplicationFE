import { SERVER_URL } from "../../constants.js";


const fetchInitialData = async () => {
    try {
        const response = await fetch(`${SERVER_URL}/api/movies?theaterId=1`);
        const data = await response.json()
        const listOfMoviesSection = document.querySelector("#listOfMovies");
        generateHtml(listOfMoviesSection, data)

    } catch (error) {
        console.log(error)
    }
}

const fetchFilteredData = async (from, to) => {
    try {
        console.log(from, to)
        const response = await fetch(`${SERVER_URL}/api/playing/dates?dateStarts=${from}&dateEnds=${to}`);
        const data = await response.json()
        const listOfMoviesSection = document.querySelector("#listOfMovies");
        //remove previous content
        listOfMoviesSection.textContent = '';
        generateHtml(listOfMoviesSection, data)

    } catch (error) {
        console.log(error)
    }
}

const addListenerForFormSubmit = () => {
    const form = document.querySelector("#dateFilter");
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        fetchFilteredData(form.fromDate.value, form.toDate.value)
    })
}

const getHTML = async () => {
    const content = document.querySelector("#content");
    const response = await fetch("./pages/cinemaMovies/cinemaMovies.html")
    const html = await response.text()
    content.innerHTML = html;
    // fetchInitialData()
    // addListenerForFormSubmit()
}

export default () => getHTML()

const generateHtml = (parentElement, movies) => {
    let HTML = ``;
    movies.forEach(({ movieDTOFull: movie }, i) => {
        HTML += `
        <a href="/#/movie/${movie.id}" data-navigo class="movieLink">
            <figure class="movieCard">
                <div class="movie__hero">
                    <img src=${movie.image} alt="Rambo" class="movie__img">
                </div>
                <div class="movie__content">
                    <div class="movie__title">
                        <h1 class="heading__primary">${movie.title} <i class="fas fa-fire"></i></h1>
                        <div class="movie__tag movie__tag--1">#${movie.category}</div>
                    </div>
                    <p class="movie__description">
                        ${movie.description}
                    </p>
                    <div class="movie__details">
                        <p class="movie__detail">Rating: ${movie.rating}/10</p>
                        <p class="movie__detail">Min age: ${movie.minAge}</p>
                    </div>
                </div>
            </figure>
        </a>
        `
    });
    // loader.style.display = 'none';
    parentElement.innerHTML = HTML;
}
