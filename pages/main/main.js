if (!document.getElementById) {
    let oldHeader = document.getElementById("index");
    document.removeChild(oldHeader);

    // FONTS
    document.write('<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,600%7CUbuntu:300,400,500,700">');

    //CSS
    document.write('<link rel="stylesheet" type="text/css" href="/css/bootstrap-reboot.min.css">');
    document.write('<link rel="stylesheet" type="text/css" href="/css/bootstrap-grid.min.css">');
    document.write('<link rel="stylesheet" type="text/css" href="/css/owl.carousel.min.css">');
    document.write('<link rel="stylesheet" type="text/css" href="/css/jquery.mCustomScrollbar.min.css">');
    document.write('<link rel="stylesheet" type="text/css" href="/css/nouislider.min.css">');
    document.write('<link rel="stylesheet" type="text/css" href="/css/ionicons.min.css">');
    document.write('<link rel="stylesheet" type="text/css" href="/css/plyr.css">');
    document.write('<link rel="stylesheet" type="text/css" href="/css/photoswipe.css">');
    document.write('<link rel="stylesheet" type="text/css" href="/css/default-skin.css">');
    document.write('<link rel="stylesheet" type="text/css" href="/css/main.css">');

    //Favicons
    document.write('<link rel="icon" type="image/png" href="/icon/favicon-32x32.png" sizes="32x32">');
    document.write('<link rel="apple-touch-icon" href="icon/favicon-32x32.png">');
    document.write('<link rel="apple-touch-icon" href="/icon/apple-touch-icon-72x72.png" sizes="72x72">');
    document.write('<link rel="apple-touch-icon" href="/icon/apple-touch-icon-114x114.png" sizes="114x114">');
    document.write('<link rel="apple-touch-icon" href="/icon/apple-touch-icon-144x144.png" sizes="144x144">');
}

    export default() => {
        const content = document.querySelector("body");
    
        return fetch("./pages/main/main.html")
            .then((response) => response.text())
            .then((theHtml) => {
                content.innerHTML = theHtml;
            })
    }