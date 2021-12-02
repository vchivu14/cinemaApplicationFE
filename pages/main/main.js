import { SERVER_URL } from "../../constants.js";

const fetchData = async () => {
    try {
        const response = await fetch(`${SERVER_URL}/api/playing?theaterId=1`);
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

const getHTML = async () => {
    const content = document.querySelector("#content");
    const response = await fetch("./pages/main/main.html")
    const html = await response.text()
    content.innerHTML = html;
    fetchData()
}

export default () => getHTML()