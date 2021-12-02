export default() => {
    if (document.querySelector("#header") !== null) {
        const linkHeader = document.querySelector("#header");
        linkHeader.remove();
        const headTag = document.querySelector("head");
        const newLink = document.createElement("link");
        const bootstrapLink = '<link crossorigin="anonymous" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" rel="stylesheet"></link>';
        newLink.innerHTML = bootstrapLink;
        headTag.appendChild(newLink);
    }
    const header = document.querySelector("header");

    return fetch("./pages/cinemaDashboard/cinemaDashboardHeader.html")
        .then((response) => response.text())
        .then((theHtml) => {
            header.innerHTML = theHtml;
        })
}