// Single-page application - using javascript to add and remove content based on interaction, e.g click

// Initialise HTML elements 
// BUTTONS
var modelButton = $(".modelBut");
var homeButton = $(".homeBut");
var configButton = $(".configBut");

// DIVS
var modelDiv = $("#modelDiv");
var bioDiv = $("#bioDiv");




// HOME 
homeButton.on("click",() => {
    modelDiv.addClass("hide");
    bioDiv.removeClass("hide");
})

// MODELS & DESIGN
// Event listener for click on model button
modelButton.on("click", () => {
    bioDiv.addClass("hide");
    modelDiv.removeClass("hide");
    $(".modelBut1").addClass("loaded");
})

configButton.on("click", () => {
    bioDiv.addClass("hide");
    modelDiv.addClass("hide");
} )






// Remove content function
