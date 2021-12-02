export default() => {
    const content = document.querySelector("#content");

    return fetch("./pages/cinemaMovies/cinemaMovies.html")
        .then((response) => response.text())
        .then((theHtml) => {
            content.innerHTML = theHtml;
        })
}