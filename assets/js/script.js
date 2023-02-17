// Single-page application - using javascript to add and remove content based on interaction, e.g click

// Initialise HTML elements 
var modelButton = $("#modelBut");
var homeButton = $("#homeBut");
var modelDiv = $("#modelDiv");
var bioDiv = $("#bioDiv");





homeButton.on("click",function(){
    modelDiv.addClass("hide");
    bioDiv.removeClass("hide");
})




// MODELS & DESIGN
// Event listener for click on model button
modelButton.on("click", function(){
    bioDiv.addClass("hide");
    modelDiv.removeClass("hide");
    $("#modelBut1").addClass("loaded");
})






// Remove content function
