// Single-page application - using javascript to add and remove content based on interaction, e.g click

// Initialise HTML elements 
var modelButton = $("#modelBut");
var homeButton = $("#homeBut");
var modelDiv = $("#modelDiv");
var bioDiv = $("#bioDiv");






homeButton.on("click",function(){
    removeModel();
    bioDiv.removeClass("hide");
})




// MODELS & DESIGN
// Event listener for click on model button
modelButton.on("click", function(){
    removeModel();
    bioDiv.addClass("hide");
})






// Remove content function
var removeModel = function(){
    modelDiv.removeClass("hide");
}