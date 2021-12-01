function functionFirstContainerChildOne() {
    $('#firstContainerChildOne').hide();
    $('#firstContainerChildOneButtonShow').show();
    $('#firstContainerChildOneButtonUnShow').hide();
}
functionFirstContainerChildOne();

function functionFirstContainerChildTwo() {
    $('#firstContainerChildTwo').hide();
    $('#firstContainerChildTwoButtonShow').show();
    $('#firstContainerChildTwoButtonUnShow').hide();
}
functionFirstContainerChildTwo();

function functionShowFirstChildContainerOne() {
    startEventListenerFirstTable()
    $('#firstContainerChildOne').show();
    $('#firstContainerChildOneButtonShow').hide();
    $('#firstContainerChildOneButtonUnShow').show();
}
let firstContainerChildOneButtonShow = document.querySelector("#firstContainerChildOneButtonShow");
firstContainerChildOneButtonShow.addEventListener("click", functionShowFirstChildContainerOne);

function functionUnShowFirstChildContainerOne() {
    closeEventListenerFirstTable();
    $('#firstContainerChildOne').hide();
    $('#firstContainerChildOneButtonShow').show();
    $('#firstContainerChildOneButtonUnShow').hide();
}
let firstContainerChildOneButtonUnShow = document.querySelector("#firstContainerChildOneButtonUnShow");
firstContainerChildOneButtonUnShow.addEventListener("click", functionUnShowFirstChildContainerOne);

function functionShowSecondChildContainerOne() {
    $('#firstContainerChildTwo').show();
    $('#firstContainerChildTwoButtonShow').hide();
    $('#firstContainerChildTwoButtonUnShow').show();
}
let firstContainerChildTwoButtonShow = document.querySelector("#firstContainerChildTwoButtonShow");
firstContainerChildTwoButtonShow.addEventListener("click", functionShowSecondChildContainerOne);

function functionUnShowSecondChildContainerOne() {
    $('#firstContainerChildTwo').hide();
    $('#firstContainerChildTwoButtonShow').show();
    $('#firstContainerChildTwoButtonUnShow').hide();
}
let firstContainerChildTwoButtonUnShow = document.querySelector("#firstContainerChildTwoButtonUnShow");
firstContainerChildTwoButtonUnShow.addEventListener("click", functionUnShowSecondChildContainerOne);



function functionSecondContainerChildTwo() {
    $('#secondContainerChildTwo').hide();
    $('#secondContainerChildTwoButtonShow').hide();
    $('#secondContainerChildTwoButtonUnShow').hide();
}
functionSecondContainerChildTwo();

function functionShowSecondChildContainerTwo() {
    $('#secondContainerChildTwo').show();
    $('#secondContainerChildTwoButtonShow').hide();
    $('#secondContainerChildTwoButtonUnShow').show();
}
let secondContainerChildTwoButtonShow = document.querySelector("#secondContainerChildTwoButtonShow");
secondContainerChildTwoButtonShow.addEventListener("click", functionShowSecondChildContainerTwo);

function functionUnShowSecondChildContainerTwo() {
    $('#secondContainerChildTwo').hide();
    $('#secondContainerChildTwoButtonShow').show();
}
let secondContainerChildTwoButtonUnShow = document.querySelector("#secondContainerChildTwoButtonUnShow");
secondContainerChildTwoButtonUnShow.addEventListener("click", functionUnShowSecondChildContainerTwo);



function functionThirdContainerChildOne() {
    $('#thirdContainerChildOne').hide();
    $('#thirdContainerChildOneButtonShow').show();
    $('#thirdContainerChildOneButtonUnShow').hide();
}
functionThirdContainerChildOne();

function functionThirdContainerChildTwo() {
    $('#thirdContainerChildTwo').hide();
    $('#thirdContainerChildTwoButtonShow').show();
    $('#thirdContainerChildTwoButtonUnShow').hide();
}
functionThirdContainerChildTwo();

function functionShowFirstChildContainerThree() {
    startEventListenerThirdTable();
    $('#thirdContainerChildOne').show();
    $('#thirdContainerChildOneButtonShow').hide();
    $('#thirdContainerChildOneButtonUnShow').show();
}
let thirdContainerChildOneButtonShow= document.querySelector("#thirdContainerChildOneButtonShow");
thirdContainerChildOneButtonShow.addEventListener("click", functionShowFirstChildContainerThree);

function functionUnShowFirstChildContainerThree() {
    closeEventListenerThirdTable();
    $('#thirdContainerChildOne').hide();
    $('#thirdContainerChildOneButtonShow').show();
    $('#thirdContainerChildOneButtonUnShow').hide();
}
let thirdContainerChildOneButtonUnShow = document.querySelector("#thirdContainerChildOneButtonUnShow");
thirdContainerChildOneButtonUnShow.addEventListener("click", functionUnShowFirstChildContainerThree);

function functionShowSecondChildContainerThree() {
    $('#thirdContainerChildTwo').show();
    $('#thirdContainerChildTwoButtonShow').hide();
    $('#thirdContainerChildTwoButtonUnShow').show();
}
let thirdContainerChildTwoButtonShow= document.querySelector("#thirdContainerChildTwoButtonShow");
thirdContainerChildTwoButtonShow.addEventListener("click", functionShowSecondChildContainerThree);

function functionUnShowSecondChildContainerThree() {
    $('#thirdContainerChildTwo').hide();
    $('#thirdContainerChildTwoButtonShow').show();
    $('#thirdContainerChildTwoButtonUnShow').hide();
}
let thirdContainerChildTwoButtonUnShow = document.querySelector("#thirdContainerChildOneButtonUnShow");
thirdContainerChildTwoButtonUnShow.addEventListener("click", functionUnShowSecondChildContainerThree);



function functionFourthContainerChildTwo() {
    $('#fourthContainerChildTwo').hide();
    $('#fourthContainerChildTwoButtonShow').hide();
    $('#fourthContainerChildTwoButtonUnShow').hide();
}
functionFourthContainerChildTwo();

function functionShowSecondChildContainerFour() {
    $('#fourthContainerChildTwo').show();
    $('#fourthContainerChildTwoButtonShow').hide();
    $('#fourthContainerChildTwoButtonUnShow').show();
}
let fourthContainerChildTwoButtonShow = document.querySelector("#fourthContainerChildTwoButtonShow");
fourthContainerChildTwoButtonShow.addEventListener("click", functionShowSecondChildContainerFour);

function functionUnShowSecondChildContainerFour() {
    $('#fourthContainerChildTwo').hide();
    $('#fourthContainerChildTwoButtonShow').show();
    $('#fourthContainerChildTwoButtonUnShow').hide();
}
let fourthContainerChildTwoButtonUnShow = document.querySelector("#fourthContainerChildTwoButtonUnShow");
fourthContainerChildTwoButtonUnShow.addEventListener("click", functionUnShowSecondChildContainerFour);