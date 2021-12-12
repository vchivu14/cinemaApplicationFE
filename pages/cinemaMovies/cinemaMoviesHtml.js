import { SERVER_URL } from "../../constants.js";
let moviesList = [];

const fetchInitialData = async () => {
    try {
        const response = await fetch(`${SERVER_URL}/api/movies?theaterId=1`);
        const data = await response.json()
        //assign to global variable to be used for updating
        moviesList = data;
        console.log(moviesList)
        const tableBody = document.querySelector("tbody");
        generateHtml(tableBody, data)
        addListenerForRows();
        addListenerToCloseUpdateModal();
        addListenerForCreateMovieForm();
        addListenerForUpdateMovieForm();
    } catch (error) {
        console.log(error)
    }
}

const addListenerForRows = () => {
    const rows = Array.from(document.querySelectorAll("tbody tr"));
    rows.forEach(row => {
        row.addEventListener("click", (e) => {
            const movieIndex = e.target.getAttribute('data-movieindex');
            const movie = moviesList[movieIndex];
            displayUpdateModal(movie);
        })
    })
}

const addListenerToCloseUpdateModal = () => {
    document.getElementById("hideUpdateMovieModal").addEventListener("click", () => {
        document.getElementById("updateMovieModal").style.display = "none";
    })
}

const addListenerForCreateMovieForm = () => {
    const form = document.querySelector("#movieForm");
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        const data = {
            actorList: JSON.parse(form.actors.value),
            categoryId: form.category.value,
            description: form.description.value,
            image: form.image.value,
            minAge: form.minAge.value,
            rating: form.rating.value,
            title: form.title.value,
            trailer: form.trailer.value,
        }
        //sending actor list needs to be in JSON as input. Example below
        //[{"firstName": "S", "lastName":"B"}] 

        fetch(`${SERVER_URL}/api/movies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                //easy and primitive way how we can do this
                fetchInitialData()
                //reset form
                form.reset()
                //hide modal and display button
                document.getElementById("firstContainerChildOne").style.display = "none"
                document.getElementById("firstContainerChildOneButtonShow").style.display = "block"
            })
            .catch(error => console.log(error));
    })
}

const addListenerForUpdateMovieForm = () => {
    const form = document.querySelector("#movieUpdateForm");
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        const data = {
            id: form.movieId.value,
            actorList: JSON.parse(form.actors.value),
            categoryId: form.category.value,
            description: form.description.value,
            image: form.image.value,
            minAge: form.minAge.value,
            rating: form.rating.value,
            title: form.title.value,
            trailer: form.trailer.value,
        }
        //sending actor list needs to be in JSON as input. Example below
        //[{"firstName": "S", "lastName":"B"}] 

        fetch(`${SERVER_URL}/api/movies?replace=true`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                //easy and primitive way how we can refresh html table
                fetchInitialData()
                //reset form
                form.reset()
                //hide modal and display button
                document.getElementById("updateMovieModal").style.display = "none"
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

const displayUpdateModal = movie => {
    document.getElementById("updateMovieModal").style.display = "block";
    const form = document.querySelector("#movieUpdateForm");
    form.movieId.value = movie.id;
    form.title.value = movie.title;
    form.rating.value = movie.rating;
    form.minAge.value = movie.minAge;
    form.category.value = movie.categoryId;
    form.image.value = movie.image;
    form.trailer.value = movie.trailer;
    form.description.value = movie.description;
    form.actors.value = JSON.stringify(movie.actorList);
}