export default() => {
    const content = document.querySelector("#content");

    console.log(content);

    return fetch("./pages/movie/movie.html")
        .then((response) => response.text())
        .then((theHtml) => {
            content.innerHTML = theHtml;
        })
}
