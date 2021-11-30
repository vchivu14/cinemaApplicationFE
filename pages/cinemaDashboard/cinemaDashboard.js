export default() => {
    const content = document.querySelector(".content");

    return fetch("./pages/cinemaDashboard/cinemaDashboard.html")
        .then((response) => response.text())
        .then((theHtml) => {
            content.innerHTML = theHtml;
        })
}