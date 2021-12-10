export default () => {
    const headTag = document.querySelector("head");

    let link1 = document.createElement("link");
    link1.setAttribute("rel", "preconnect");
    link1.setAttribute("href", "https://fonts.googleapis.com");
    headTag.appendChild(link1);

    let link2 = document.createElement("link");
    link2.setAttribute("rel", "preconnect");
    link2.setAttribute("href", "https://fonts.gstatic.com");
    headTag.appendChild(link2);

    let link3 = document.createElement("link");
    link3.setAttribute("rel", "stylesheet");
    link3.setAttribute("href", "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap");
    headTag.appendChild(link3);

    let link8 = document.createElement("link");
    link8.setAttribute("rel", "stylesheet");
    link8.setAttribute("href", "https://fonts.googleapis.com/css2?family=Bangers&display=swap");
    headTag.appendChild(link8);

    let link4 = document.createElement("link");
    link4.setAttribute("rel", "stylesheet");
    link4.setAttribute("href", "/resources/css/reset.css");
    link4.setAttribute("type", "text/css");
    headTag.appendChild(link4);

    let stylesCss = document.createElement("link");
    stylesCss.setAttribute("rel", "stylesheet");
    stylesCss.setAttribute("href", "/resources/css/styles.css");
    stylesCss.setAttribute("type", "text/css");
    headTag.appendChild(stylesCss);

    let link5 = document.createElement("link");
    link5.setAttribute("rel", "stylesheet");
    link5.setAttribute("href", "/resources/css/header.css");
    link5.setAttribute("type", "text/css");
    headTag.appendChild(link5);

    let link6 = document.createElement("link");
    link6.setAttribute("rel", "stylesheet");
    link6.setAttribute("href", "/resources/css/mainPage.css");
    link6.setAttribute("type", "text/css");
    headTag.appendChild(link6);

    let link7 = document.createElement("link");
    link7.setAttribute("rel", "stylesheet");
    link7.setAttribute("href", "/resources/css/videopage.css");
    link7.setAttribute("type", "text/css");
    headTag.appendChild(link7);
}