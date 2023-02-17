// Single-page application - using javascript to add and remove content based on interaction, e.g click

// Initialise HTML elements 
// BUTTONS
const modelButton = $(".modelBut");
const homeButton = $(".homeBut");
const configButton = $(".configBut");

// DIVS
const modelDiv = $("#modelDiv");
const bioDiv = $("#bioDiv");
const configDiv = $("#configDiv");




// HOME 
homeButton.on("click",() => {
    bioDiv.removeClass("hide");
    modelDiv.addClass("hide");
    configDiv.addClass("hide");
})

// MODELS & DESIGN
// Event listener for click on model button

// Homepage button
modelButton.on("click", () => {
    bioDiv.addClass("hide");
    modelDiv.removeClass("hide");
    $(".modelBut1").addClass("loaded");
    $(".configBut1").removeClass("loaded");
})
// Side navbar button
$(".modelBut1").on("click", () => {
    bioDiv.addClass("hide");
    modelDiv.removeClass("hide");
    configDiv.addClass("hide");
    $(".modelBut1").addClass("loaded");
    $(".configBut1").removeClass("loaded");
})








// CONFIGURATION FILE
// Event listener for click on config button
configButton.on("click", () => {
    bioDiv.addClass("hide");
    modelDiv.addClass("hide");
    configDiv.removeClass("hide");
    $(".modelBut1").removeClass("loaded");
    $(".configBut1").addClass("loaded");
})

$(".configBut1").on("click", () => {
    bioDiv.addClass("hide");
    modelDiv.addClass("hide");
    configDiv.removeClass("hide");
    $(".modelBut1").removeClass("loaded");
    $(".configBut1").addClass("loaded");
} )






// Remove content function
