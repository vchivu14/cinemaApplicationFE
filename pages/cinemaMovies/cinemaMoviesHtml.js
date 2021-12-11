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
        addListenerForCreateForm();
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
    rows.forEach(row => {
        row.addEventListener("click", (e) => {
            const movieIndex = e.target.getAttribute('data-movieindex');
            const movie = moviesList[movieIndex]
            // updateForm.name.value = name;
        })
    })
}

const addListenerForCreateForm = () => {
    const form = document.querySelector("#movieForm");
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        console.log("submited")
        const data = {
            actorList: [...form.actors.value],
            categoryId: form.category.value,
            description: form.description.value,
            image: form.image.value,
            minAge: form.minAge.value,
            rating: form.rating.value,
            title: form.title.value,
            trailer: form.trailer.value,
        }
        console.log(data)
        fetch(`${SERVER_URL}/api/movies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log("success")
                console.log(data)
            })
            .catch(error => console.log(error));
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


