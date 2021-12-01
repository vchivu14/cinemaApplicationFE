function functionShowFirstChildContainerOne() {
    document.querySelector("#firstContainerChildOne").style.visibility = 'visible';
    document.querySelector("#firstContainerChildOneButtonShow").style.visibility = 'hidden';
    document.querySelector("#firstContainerChildOneButtonUnShow").style.visibility = 'visible';
}
let firstContainerChildOneButtonShow = document.querySelector("#firstContainerChildOneButtonShow");
firstContainerChildOneButtonShow.addEventListener("click", functionShowFirstChildContainerOne);

function functionUnShowFirstChildContainerOne() {
    document.querySelector("#firstContainerChildOne").style.visibility = 'hidden';
    document.querySelector("#firstContainerChildOneButtonShow").style.visibility = 'visible';
    document.querySelector("#firstContainerChildOneButtonUnShow").style.visibility = 'hidden';
}
let firstContainerChildOneButtonUnShow = document.querySelector("#firstContainerChildOneButtonUnShow");
firstContainerChildOneButtonUnShow.addEventListener("click", functionUnShowFirstChildContainerOne);

functionUnShowFirstChildContainerOne();