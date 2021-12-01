function functionEnableConfigurationPartsContainer() {
    $('.configurationParts').hide();
    $('#configurationPartsButtonShow').show();
    $('#configurationPartsButtonUnShow').hide();
}
functionEnableConfigurationPartsContainer();
function functionShowConfigurationParts() {
    $('.configurationParts').show();
    $('#configurationPartsButtonShow').hide();
    $('#configurationPartsButtonUnShow').show();
}
function functionUnShowConfigurationParts() {
    $('.configurationParts').hide();
    $('#configurationPartsButtonShow').show();
    $('#configurationPartsButtonUnShow').hide();
}
let buttonShowConfigurationParts = document.querySelector("#configurationPartsButtonShow");
buttonShowConfigurationParts.addEventListener("click", functionShowConfigurationParts);
let buttonUnShowConfigurationParts = document.querySelector("#configurationPartsButtonUnShow");
buttonUnShowConfigurationParts.addEventListener("click", functionUnShowConfigurationParts);