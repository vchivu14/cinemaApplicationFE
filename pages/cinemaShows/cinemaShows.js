export default() => {
    const content = document.querySelector(".content");

    return fetch("./pages/cinemaShows/cinemaShows.html")
        .then((response) => response.text())
        .then((theHtml) => {
            content.innerHTML = theHtml;
        })
}