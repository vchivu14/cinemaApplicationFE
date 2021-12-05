import { SERVER_URL } from "../../constants.js";


const fetchData = async (movieId) => {
    try {
        const response = await fetch(`${SERVER_URL}/api/movies/${movieId}`);
        const data = await response.json()
        const videopage = document.querySelector("#videopage");
        generateHtml(videopage, data)
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
    let HTML = `
    <section class="videopage">
        <div class="mainIMG">
            <img src="${movie.image}" alt=${movie.title}">
        </div>
        <div class="title_movie">
            <h5>${movie.title}</h5>
            <br>
            <ul>
                <li>
                    <p>Min age: ${movie.minAge}</p>
                </li>
                <li>
                    <p>Category: ${movie.category}</p>
                </li>
                <li>
                    <p>Rating: ${movie.rating}/10</p>
                </li>
                <li>
                    <p>${movie.actorList.map(actor => `${actor.firstName} ${actor.lastName}`)}</p>
                </li>
            </ul>
            <br>
            <h4>Description:</h4>
            <br>
            <p class="desc">${movie.description}</p>
        </div>
        <div class="videoPage">
            <iframe class="iframe" src="${movie.trailer}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </section>
    `;
    // loader.style.display = 'none';
    parentElement.innerHTML = HTML;
}
