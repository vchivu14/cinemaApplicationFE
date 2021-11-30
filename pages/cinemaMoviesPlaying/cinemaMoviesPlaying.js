export default() => {
    const content = document.querySelector(".content");

    return fetch("./pages/cinemaMoviesPlaying/cinemaMoviesPlaying.html")
        .then((response) => response.text())
        .then((theHtml) => {
            content.innerHTML = theHtml;
        })
}