// each top-button will be given an id: firstContainerButton, secondContainerButton
//      which will trigger one of the functions provided here;
// each function controls a <div> (this <div> can have another child <div> inside if needed including two other buttons
//      that can trigger it's visibility) that can make the div appear/disappear
/* EXAMPLE:
- firstContainerButton --> hides all containers but firstContainer (IF there is a firstContainerChildOne <div> inside
        this container --> functionFirstContainerChildOne() may be commented out and that will control the child <div>
        in this container and it's show/hide buttons)
    -- this child <div> has a firstContainerChildOneButtonShow button which will show the firstContainerChildOne <div>
        by calling the functionShowFirstChildContainer()
    -- functionUnShowFirstChildContainer() will unshow the firstContainerChildOne..
 */

function functionHideContainers() {
    document.getElementById("firstContainer").style.display = 'none';
    document.getElementById("secondContainer").style.display = 'none';
    document.getElementById("thirdContainer").style.display = 'none';
    document.getElementById("fourthContainer").style.display = 'none';
}


if (document.getElementById("firstTable") !== null) {
    let firstTable = document.getElementById("firstTable");
    function getPartValueFromFirstTable(event) {
        let target = event.target;
        if (target.tagName.toLowerCase() === 'td') {
            firstTable.setAttribute('listener', 'true');
            $('#firstContainerChildOne > #firstContainerForm').trigger("reset");
            $('#firstContainerChildOne #firstContainerFormPlaceholder').text(target.textContent.valueOf());
            $('#firstContainerChildOne #firstContainerFormInput').val(target.textContent.valueOf());
        }
    }
    function startEventListenerFirstTable() {
        $('tr > .firstTableCompareValue').css("background", "#F0F8FF");
        $('tr > .firstTableCompareValue').hover(
            function () {
                $(this).css("background","#7FFF00");
                // console.log($(this).children('td')[1].innerHTML);
            },
            function () {
                $(this).css("background","#F0F8FF");
            },
        );
        let table = document.getElementById("firstTable");
        table.addEventListener('click', getPartValueFromFirstTable,false);
        firstTable.setAttribute('listener', 'true');
    }
    function closeEventListenerFirstTable() {
        document.getElementById('firstTable').removeEventListener('click', getPartValueFromFirstTable);
        $('tr > .firstTableCompareValue').css("background", "");
        $("tr > .firstTableCompareValue").hover(
            function () {
                $(this).css("background","");
                // console.log($(this).children('td')[1].innerHTML);
            },
            function () {
                $(this).css("background","");
            },
        );
        $('#firstContainerChildOneButtonUnShow').hide();
        $('#firstContainerChildOneButtonShow').show();
        firstTable.setAttribute('listener', 'false');
    }
    startEventListenerFirstTable();
}
if (document.getElementById("secondTable") !== null) {
    let secondTable = document.getElementById("secondTable");
    function getAssetValueFromSecondTable(event) {
        let target = event.target;
        if (target.tagName.toLowerCase() === 'td') {
            $('#secondContainerChildOne > #secondContainerForm').trigger("reset");
            $('#secondContainerChildOne #secondContainerFormPlaceholder').text(target.textContent.valueOf());
            $('#secondContainerChildOne #secondContainerFormInput').val(target.textContent.valueOf());
        }
    }
    function startEventListenerSecondTable() {
        $('tr > .secondTableCompareValue').css("background", "#F0F8FF");
        $("tr > .secondTableCompareValue").hover(
            function () {
                $(this).css("background","#7FFF00");
                // console.log($(this).children('td')[1].innerHTML);
            },
            function () {
                $(this).css("background","#F0F8FF");
            },
        );
        let table = document.getElementById("secondTable");
        table.addEventListener('click', getAssetValueFromSecondTable,false);
        secondTable.setAttribute('listener', 'true');
    }
    function closeEventListenerSecondTable() {
        document.getElementById('secondTable').removeEventListener('click', getAssetValueFromSecondTable);
        $('tr > .secondTableCompareValue').css("background", "");
        $("tr > .secondTableCompareValue").hover(
            function () {
                $(this).css("background","");
                // console.log($(this).children('td')[1].innerHTML);
            },
            function () {
                $(this).css("background","");
            },
        );
        $('#secondContainerChildOneButtonUnShow').hide();
        $('#secondContainerChildOneButtonShow').show();
        secondTable.setAttribute('listener', 'false');
    }
    startEventListenerSecondTable()
}
if (document.getElementById("thirdTable") !== null) {
    let thirdTable = document.getElementById("thirdTable");
    function getAssetValueFromThirdTable(event) {
        let target = event.target;
        if (target.tagName.toLowerCase() === 'td') {
            $('#thirdContainerChildOne > #thirdContainerForm').trigger("reset");
            $('#thirdContainerChildOne #thirdContainerFormPlaceholder').text(target.textContent.valueOf());
            $('#thirdContainerChildOne #thirdContainerFormInput').val(target.textContent.valueOf());
        }
    }
    function startEventListenerThirdTable() {
        $('tr > .thirdTableCompareValue').css("background", "#F0F8FF");
        $("tr > .thirdTableCompareValue").hover(
            function () {
                $(this).css("background","#7FFF00");
                // console.log($(this).children('td')[1].innerHTML);
            },
            function () {
                $(this).css("background","#F0F8FF");
            },
        );
        let table = document.getElementById("thirdTable");
        table.addEventListener('click', getAssetValueFromThirdTable,false);
        thirdTable.setAttribute('listener', 'true');
    }
    function closeEventListenerThirdTable() {
        document.getElementById('thirdTable').removeEventListener('click', getAssetValueFromThirdTable);
        $('tr > .thirdTableCompareValue').css("background", "");
        $("tr > .thirdTableCompareValue").hover(
            function () {
                $(this).css("background","");
                // console.log($(this).children('td')[1].innerHTML);
            },
            function () {
                $(this).css("background","");
            },
        );
        $('#thirdContainerChildOneButtonUnShow').hide();
        $('#thirdContainerChildOneButtonShow').show();
        thirdTable.setAttribute('listener', 'false');
    }
    startEventListenerThirdTable()
}
if (document.getElementById("fourthTable") !== null) {
    let fourthTable = document.getElementById("fourthTable");
    function getAssetValueFromFourthTable(event) {
        let target = event.target;
        if (target.tagName.toLowerCase() === 'td') {
            $('#fourthContainerChildOne > #fourthContainerForm').trigger("reset");
            $('#fourthContainerChildOne #fourthContainerFormPlaceholder').text(target.textContent.valueOf());
            $('#fourthContainerChildOne #fourthContainerFormInput').val(target.textContent.valueOf());
        }
    }
    function startEventListenerFourthTable() {
        $('tr > .fourthTableCompareValue').css("background", "#F0F8FF");
        $("tr > .fourthTableCompareValue").hover(
            function () {
                $(this).css("background","#7FFF00");
                // console.log($(this).children('td')[1].innerHTML);
            },
            function () {
                $(this).css("background","#F0F8FF");
            },
        );
        let table = document.getElementById("fourthTable");
        table.addEventListener('click', getAssetValueFromFourthTable,false);
        fourthTable.setAttribute('listener', 'true');
    }
    function closeEventListenerFourthTable() {
        document.getElementById('fourthTable').removeEventListener('click', getAssetValueFromFourthTable);
        $('tr > .fourthTableCompareValue').css("background", "");
        $("tr > .fourthTableCompareValue").hover(
            function () {
                $(this).css("background","");
                // console.log($(this).children('td')[1].innerHTML);
            },
            function () {
                $(this).css("background","");
            },
        );
        $('#fourthContainerChildOneButtonUnShow').hide();
        $('#fourthContainerChildOneButtonShow').show();
        fourthTable.setAttribute('listener', 'false');
    }
    startEventListenerFourthTable()
}


function functionCheckTablesEventListeners() {
    let firstTable = document.getElementById("firstTable");
    if (firstTable !== null && firstTable.getAttribute('listener') === 'true') {
        closeEventListenerFirstTable();
    }
    let secondTable = document.getElementById("secondTable");
    if (secondTable !== null && secondTable.getAttribute('listener') === 'true') {
        closeEventListenerSecondTable();
    }
    let thirdTable = document.getElementById("thirdTable");
    if (thirdTable !== null && thirdTable.getAttribute('listener') === 'true') {
        closeEventListenerThirdTable();
    }
    let fourthTable = document.getElementById("fourthTable");
    if (fourthTable !== null && fourthTable.getAttribute('listener') === 'true') {
        closeEventListenerFourthTable();
    }
}


function functionHideChildContainers() {
    if (document.getElementById("firstContainerChildOneButtonShow") !== null) {
        document.getElementById("firstContainerChildOne").style.display = 'none';
    }
    if (document.getElementById("firstContainerChildTwoButtonShow") !== null) {
        document.getElementById("firstContainerChildTwo").style.display = 'none';
        document.getElementById("firstContainerChildTwoButtonShow").style.display = 'initial';
    }
    if (document.getElementById("secondContainerChildOneButtonShow") !== null) {
        document.getElementById("secondContainerChildOne").style.display = 'none';
    }
    if (document.getElementById("secondContainerChildTwoButtonShow") !== null) {
        document.getElementById("secondContainerChildTwo").style.display = 'none';
        document.getElementById("secondContainerChildTwoButtonShow").style.display = 'initial';
    }
    if (document.getElementById("thirdContainerChildOneButtonShow") !== null) {
        document.getElementById("thirdContainerChildOne").style.display = 'none';
    }
    if (document.getElementById("thirdContainerChildTwoButtonShow") !== null) {
        document.getElementById("thirdContainerChildTwo").style.display = 'none';
        document.getElementById("thirdContainerChildTwoButtonShow").style.display = 'initial';
    }
    if (document.getElementById("fourthContainerChildOneButtonShow") !== null) {
        document.getElementById("fourthContainerChildOne").style.display = 'none';
    }
    if (document.getElementById("fourthContainerChildTwoButtonShow") !== null) {
        document.getElementById("fourthContainerChildTwo").style.display = 'none';
        document.getElementById("fourthContainerChildTwoButtonShow").style.display = 'initial';
    }
}


function functionCheckAllContent() {
    functionCheckTablesEventListeners();
    functionHideChildContainers();
    functionHideContainers();
}
functionCheckAllContent();


function functionFirstContainer() {
    functionCheckAllContent();
    $('#firstContainer').show();
}
let firstButton = document.querySelector("#firstContainerButton");
firstButton.addEventListener("click", functionFirstContainer);

function functionSecondContainer() {
    functionCheckAllContent();
    $('#secondContainer').show();
}
let secondButton = document.querySelector("#secondContainerButton");
secondButton.addEventListener("click", functionSecondContainer);

function functionThirdContainer() {
    functionCheckAllContent();
    $('#thirdContainer').show();
}
let thirdButton = document.querySelector("#thirdContainerButton");
thirdButton.addEventListener("click", functionThirdContainer);

function functionFourthContainer() {
    functionCheckAllContent();
    $('#fourthContainer').show();
}
let fourthButton = document.querySelector("#fourthContainerButton");
fourthButton.addEventListener("click", functionFourthContainer);