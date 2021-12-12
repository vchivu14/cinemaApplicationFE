import { SERVER_URL } from "../../constants.js";
let moviesList = [];
let moviesPlayingList = []

const fetchInitialData = async () => {
    try {
        const response = await fetch(`${SERVER_URL}/api/movies?theaterId=1`);
        //assign to global variable to be used for updating
        moviesList = await response.json()
        console.log(moviesList)
        const responsePlaying = await fetch(`${SERVER_URL}/api/playing?theaterId=1`);
        moviesPlayingList = await responsePlaying.json()
        console.log(moviesPlayingList)
        const tableBody = document.querySelector("tbody");
        const categoryCreateSelect = document.querySelector("#movieCategoryCreate");
        generateMoviesOptions(categoryCreateSelect);
        generateHtml(tableBody, moviesPlayingList)
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
            const listIndex = e.target.getAttribute('data-movieindex');
            const movie = moviesPlayingList[listIndex];
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
            fromDate: form.fromDate.value,
            toDate: form.toDate.value,
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
            fromDate: form.fromDate.value,
            toDate: form.toDate.value,
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
    const response = await fetch("./pages/cinemaMoviesPlaying/cinemaMoviesPlaying.html")
    const html = await response.text()
    content.innerHTML = html;
    fetchInitialData()
}

export default () => getHTML()

const generateHtml = (parentElement, moviesPlaying) => {
    let HTML = ``;
    moviesPlaying.forEach((movie, i) => {
        HTML += `
        <tr data-movieindex=${i}>
            <th data-movieindex=${i}>${movie.movieDTOFull.id}</th>
            <th data-movieindex=${i}>${movie.movieDTOFull.title}</th>
            <th data-movieindex=${i}>${new Date(movie.dateStarts).toLocaleDateString()}</th>
            <th data-movieindex=${i}>${new Date(movie.dateEnds).toLocaleDateString()}</th>
        </tr>
        `
    });
    // loader.style.display = 'none';
    parentElement.innerHTML = HTML;
}

const generateMoviesOptions = (parentElement) => {
    let HTML = ``;
    moviesList.forEach((movie, i) => {
        HTML += `
            <option value=${movie.id}>${movie.title}</option>
        `
    });
    parentElement.innerHTML = HTML;
}

const displayUpdateModal = movie => {
    console.log()
    document.getElementById("updateMovieModal").style.display = "block";
    const form = document.querySelector("#movieUpdateForm");
    form.movieId.value = movie.movieDTOFull.id;
    form.category.value = movie.movieDTOFull.title;
    form.fromDate.value = movie.dateStarts;
    form.toDate.value = movie.dateEnds;
}


