export default() => {
    const content = document.querySelector(".content");

    return fetch("./pages/login/login.html")
        .then((response) => response.text())
        .then((theHtml) => {
            content.innerHTML = theHtml;
        })
}