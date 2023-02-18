// Single-page application - using javascript to add and remove content based on interaction, e.g click

// Initialise HTML elements 
// BUTTONS
const homeButton = $(".homeBut");
const modelButton = $(".modelBut");
const configButton = $(".configBut");
const owButton = $(".owBut");
const gmButton = $(".gmBut");

// DIVS
const bioDiv = $("#bioDiv");
const modelDiv = $("#modelDiv");
const configDiv = $("#configDiv");
const owDiv = $("#owDiv");
const gmDiv = $("#gmDiv");


// HOME BUTTON (navbar)
homeButton.on("click",() => {
    bioDiv.removeClass("hide");
    modelDiv.addClass("hide");
    configDiv.addClass("hide");
    owDiv.addClass("hide");
    gmDiv.addClass("hide");
})


// MODELS & DESIGN 

// Homepage button
modelButton.on("click", () => {
    bioDiv.addClass("hide");
    configDiv.addClass("hide");
    owDiv.addClass("hide");
    gmDiv.addClass("hide");
    modelDiv.removeClass("hide");
    $(".modelBut1").addClass("loaded");
    $(".configBut1").removeClass("loaded");
    $(".owBut1").removeClass("loaded");
    $(".gmBut1").removeClass("loaded");
})
// Side navbar button
$(".modelBut1").on("click", () => {
    bioDiv.addClass("hide");
    configDiv.addClass("hide");
    owDiv.addClass("hide");
    gmDiv.addClass("hide");
    modelDiv.removeClass("hide");
    $(".modelBut1").addClass("loaded");
    $(".configBut1").removeClass("loaded");
    $(".owBut1").removeClass("loaded");
    $(".gmBut1").removeClass("loaded");
})

// CONFIGURATION FILE

// Homepage button
configButton.on("click", () => {
    bioDiv.addClass("hide");
    modelDiv.addClass("hide");
    owDiv.addClass("hide");
    gmDiv.addClass("hide");
    configDiv.removeClass("hide");
    $(".configBut1").addClass("loaded");
    $(".modelBut1").removeClass("loaded");
    $(".owBut1").removeClass("loaded");
    $(".gmBut1").removeClass("loaded");
})
// Side navbar button
$(".configBut1").on("click", () => {
    bioDiv.addClass("hide");
    modelDiv.addClass("hide");
    owDiv.addClass("hide");
    gmDiv.addClass("hide");
    configDiv.removeClass("hide");
    $(".configBut1").addClass("loaded");
    $(".modelBut1").removeClass("loaded");
    $(".owBut1").removeClass("loaded");
    $(".gmBut1").removeClass("loaded");
})


// OPENWEATHER API

// Homepage button
owButton.on("click", () => {
    bioDiv.addClass("hide");
    modelDiv.addClass("hide");
    configDiv.addClass("hide");
    gmDiv.addClass("hide");
    owDiv.removeClass("hide");
    $(".owBut1").addClass("loaded");
    $(".modelBut1").removeClass("loaded");
    $(".configBut1").removeClass("loaded");
    $(".gmBut1").removeClass("hide");
})
// Side navbar button
$(".owBut1").on("click", () => {
    bioDiv.addClass("hide");
    modelDiv.addClass("hide");
    configDiv.addClass("hide");
    gmDiv.addClass("hide");
    owDiv.removeClass("hide");
    $(".owBut1").addClass("loaded");
    $(".modelBut1").removeClass("loaded");
    $(".configBut1").removeClass("loaded");
    $(".gmBut1").removeClass("loaded");
})

// GOOGLE MAPS API

// Homepage button
gmButton.on("click", () => {
    bioDiv.addClass("hide");
    modelDiv.addClass("hide");
    configDiv.addClass("hide");
    owDiv.addClass("hide");
    gmDiv.removeClass("hide");
    $(".gmBut1").addClass("loaded");
    $(".owBut1").removeClass("loaded");
    $(".modelBut1").removeClass("loaded");
    $(".configBut1").removeClass("loaded");
})
// Side navbar button
$(".gmBut1").on("click", () => {
    bioDiv.addClass("hide");
    modelDiv.addClass("hide");
    configDiv.addClass("hide");
    owDiv.addClass("hide");
    gmDiv.removeClass("hide");
    $(".gmBut1").addClass("loaded");
    $(".owBut1").removeClass("loaded");
    $(".modelBut1").removeClass("loaded");
    $(".configBut1").removeClass("loaded");
})
