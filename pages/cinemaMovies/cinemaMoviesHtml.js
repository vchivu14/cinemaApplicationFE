import { SERVER_URL } from "../../constants.js";
let moviesList = [];

const fetchInitialData = async () => {
    try {
        const response = await fetch(`${SERVER_URL}/api/movies?theaterId=1`);
        const data = await response.json()
        //assign to global variable to be used for updating
        moviesList = data;
        const tableBody = document.querySelector("tbody");
        generateHtml(tableBody, data)
        addListenerForRows();
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

const addListenerForRows = () => {
    const rows = Array.from(document.querySelectorAll("tbody tr"));
    console.log(rows);
    rows.forEach(row => {
        row.addEventListener("click", (e) => {
            const movieIndex = e.target.getAttribute('data-movieindex');
            const movie = moviesList[movieIndex]
            console.log(moviesList)
            console.log(movie)
            // updateForm.name.value = name;
        })
    })
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
        <tr data-movieindex=${i}>
            <th data-movieindex=${i}>${movie.id}</th>
            <th data-movieindex=${i}>${movie.title}</th>
            <th data-movieindex=${i}>${movie.rating}</th>
            <th data-movieindex=${i}>${movie.minAge}</th>
            <th colspan="2" data-movieindex=${i}>${movie.category}</th>
        </tr>
        `
    });
    // loader.style.display = 'none';
    parentElement.innerHTML = HTML;
}


