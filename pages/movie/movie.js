export default() => {
    const content = document.querySelector(".content");

    return fetch("./pages/movie/movie.html")
        .then((response) => response.text())
        .then((theHtml) => {
            content.innerHTML = theHtml;
        })
}