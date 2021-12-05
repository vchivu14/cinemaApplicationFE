import { SERVER_URL } from "../../constants.js";


const fetchData = async () => {
    try {
        const response = await fetch(`${SERVER_URL}/api/playing?theaterId=1`);
        const data = await response.json()
        console.log(data)
        const listOfMoviesSection = document.querySelector("#listOfMovies");
        // generateHtml(listOfMoviesSection, data)

    } catch (error) {
        console.log(error)
    }
}

const getHTML = async () => {
    const content = document.querySelector("#content");
    const response = await fetch("./pages/program/program.html")
    const html = await response.text()
    content.innerHTML = html;
    fetchData()
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
