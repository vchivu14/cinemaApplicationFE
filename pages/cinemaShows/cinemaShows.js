import { SERVER_URL } from "../../constants.js";

let showsList = [];

const fetchInitialData = async () => {
    try {
        const response = await fetch(`${SERVER_URL}/api/shows?theaterId=1`);
        const data = await response.json()
        showsList = data;
        console.log(showsList)
    } catch (error) {
        console.log(error)
    }
}

const getHTML = async () => {
    const content = document.querySelector("#content");
    const response = await fetch("./pages/cinemaShows/cinemaShows.html");
    const html = await response.text();
    content.innerHTML = html;
    fetchInitialData();
}

export default () => getHTML()