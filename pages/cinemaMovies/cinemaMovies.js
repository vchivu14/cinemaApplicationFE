if (!document.getElementById) document.write('<link rel="stylesheet" type="text/css" href="/css/styles.css">');

export default() => {
    const content = document.querySelector(".content");

    return fetch("./pages/cinemaMovies/cinemaMovies.html")
        .then((response) => response.text())
        .then((theHtml) => {
            content.innerHTML = theHtml;
        })
}