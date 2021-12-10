export default () => {
    const headTag = document.querySelector("head");

    let link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "/resources/css/programPage.css");
    link.setAttribute("type", "text/css");
    headTag.appendChild(link);
}