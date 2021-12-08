export default() => {
    const bodyTag = document.querySelector("body");
    const headerTag = document.querySelector("header");

    return fetch("./pages/main/mainHeader.html")
        .then((response) => response.text())
        .then((theHtml) => {
            headerTag.innerHTML = theHtml;
            bodyTag.insertBefore(headerTag, bodyTag.firstChild);
        })
}
