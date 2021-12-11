export default () => {
    // properties removal & adding page specific resources
    const headTag = document.querySelector("head");
    while (headTag.firstChild) {
        headTag.removeChild(headTag.firstChild);
    }
    let link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "/resources/css/styles.css");
    link.setAttribute("type", "text/css");
    headTag.appendChild(link);

    let link2 = document.createElement("link");
    link2.setAttribute("crossorigin", "anonymous");
    link2.setAttribute("rel", "stylesheet");
    link2.setAttribute("href", "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css");
    link2.setAttribute("integrity", "sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l");
    headTag.appendChild(link2);

    // header removal & replacement
    if (document.querySelector("footer")) {
        document.querySelector("footer").remove();
    }
    if (document.querySelector("header")) {
        document.querySelector("header").innerHTML = "";
    }
    const headerTag = document.querySelector("header");
    return fetch("./pages/dashboard/header.html")
        .then((response) => response.text())
        .then((theHtml) => {
            headerTag.innerHTML = theHtml;
        })
}