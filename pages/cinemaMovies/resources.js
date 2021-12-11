export default () => {
    const headTag = document.querySelector("head");

    let link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "/resources/css/cinemaMoviesPage.css");
    link.setAttribute("type", "text/css");
    headTag.appendChild(link);
}