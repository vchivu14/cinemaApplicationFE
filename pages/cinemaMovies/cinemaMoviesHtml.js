import { SERVER_URL } from "../../constants.js";


const fetchInitialData = async () => {
    try {
        const response = await fetch(`${SERVER_URL}/api/movies?theaterId=1`);
        const data = await response.json()
        const tableBody = document.querySelector("tbody");
        generateHtml(tableBody, data)

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
    fetchInitialData()
    // addListenerForFormSubmit()
}

export default () => getHTML()

const generateHtml = (parentElement, movies) => {
    let HTML = ``;
    movies.forEach((movie, i) => {
        HTML += `
        <tr>
            <th>${movie.id}</th>
            <th>${movie.title}</th>
            <th>${movie.rating}</th>
            <th>${movie.minAge}</th>
            <th colspan="2">${movie.category}</th>
        </tr>
        `
    });
    // loader.style.display = 'none';
    parentElement.innerHTML = HTML;
}


