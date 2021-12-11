function waitForElement() {
    if (document.getElementById("firstContainerChildOne") !== null) {
        function functionShowFirstChildContainerOne() {
            document.querySelector("#firstContainerChildOne").style.display = 'block';
            document.querySelector("#firstContainerChildOneButtonShow").style.display = 'none';
            document.querySelector("#firstContainerChildOneButtonUnShow").style.display = 'block';
        }
        let firstContainerChildOneButtonShow = document.querySelector("#firstContainerChildOneButtonShow");
        firstContainerChildOneButtonShow.addEventListener("click", functionShowFirstChildContainerOne);

        function functionUnShowFirstChildContainerOne() {
            document.querySelector("#firstContainerChildOne").style.display = 'none';
            document.querySelector("#firstContainerChildOneButtonShow").style.display = 'block';
            document.querySelector("#firstContainerChildOneButtonUnShow").style.display = 'none';
        }
        let firstContainerChildOneButtonUnShow = document.querySelector("#firstContainerChildOneButtonUnShow");
        firstContainerChildOneButtonUnShow.addEventListener("click", functionUnShowFirstChildContainerOne);

    } else {
        setTimeout(waitForElement, 250);
    }
}

waitForElement();