export default() => {
    const content = document.querySelector(".content");

    return fetch("./pages/shows/shows.html")
        .then((response) => response.text())
        .then((theHtml) => {
            content.innerHTML = theHtml;
        })
}