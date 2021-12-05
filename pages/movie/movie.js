import { SERVER_URL } from "../../constants.js";


const fetchData = async (movieId) => {
    try {
        const response = await fetch(`${SERVER_URL}/api/movies/${movieId}`);
        const data = await response.json()
        // const listOfMoviesSection = document.querySelector("#listOfMovies");
        generateHtml(listOfMoviesSection, data)

    } catch (error) {
        console.log(error)
    }
}

const getHTML = async (params) => {
    const content = document.querySelector("#content");
    const response = await fetch("./pages/movie/movie.html")
    const html = await response.text()
    content.innerHTML = html;
    fetchData(params.data.id)
}

export default (params) => getHTML(params)

const generateHtml = (parentElement, movie) => {
    let HTML = ``;
    // loader.style.display = 'none';
    parentElement.innerHTML = HTML;
}
