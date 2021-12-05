export default (params) => {
    const content = document.querySelector("#content");

    console.log(params);

    return fetch("./pages/movie/movie.html")
        .then((response) => response.text())
        .then((theHtml) => {
            content.innerHTML = theHtml;
        })
}
