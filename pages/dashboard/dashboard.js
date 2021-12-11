export default () => {
    const content = document.querySelector("#content");

    return fetch("./pages/dashboard/dashboard.html")
        .then((response) => response.text())
        .then((theHtml) => {
            content.innerHTML = theHtml;
        })
}