// Single-page application - using javascript to add and remove content based on interaction, e.g click

// Initialise HTML elements 
// BUTTONS
const homeButton = $(".homeBut");
const modelButton = $(".modelBut");
const configButton = $(".configBut");
const owButton = $(".owBut");
const gmButton = $(".gmBut");
const dbButton = $(".dbBut");
const structButton = $(".structBut");
const feedBut = $(".feedBut");

// DIVS
const bioDiv = $("#bioDiv");
const modelDiv = $("#modelDiv");
const configDiv = $("#configDiv");
const owDiv = $("#owDiv");
const gmDiv = $("#gmDiv");
const dbDiv = $("#dbDiv");
const structDiv = $("#structDiv");
const feedDiv = $("#feedDiv");


// HOME BUTTON (navbar)
homeButton.on("click",() => {
    bioDiv.removeClass("hide");
    modelDiv.addClass("hide");
    structDiv.addClass("hide");
    configDiv.addClass("hide");
    owDiv.addClass("hide");
    gmDiv.addClass("hide");
    dbDiv.addClass("hide");
    feedDiv.addClass("hide");

})


// MODELS & DESIGN 

// Homepage button
modelButton.on("click", () => {
    bioDiv.addClass("hide");
    structDiv.addClass("hide");
    configDiv.addClass("hide");
    owDiv.addClass("hide");
    gmDiv.addClass("hide");
    dbDiv.addClass("hide");
    feedDiv.addClass("hide");
    modelDiv.removeClass("hide");
    $(".modelBut1").addClass("loaded");
    $(".structBut1").removeClass("loaded");
    $(".configBut1").removeClass("loaded");
    $(".owBut1").removeClass("loaded");
    $(".gmBut1").removeClass("loaded");
    $(".feedBut1").removeClass("loaded");
    $(".dbBut1").removeClass("loaded");
})
// Side navbar button
$(".modelBut1").on("click", () => {
    bioDiv.addClass("hide");
    structDiv.addClass("hide");
    configDiv.addClass("hide");
    owDiv.addClass("hide");
    gmDiv.addClass("hide");
    dbDiv.addClass("hide");
    feedDiv.addClass("hide");
    modelDiv.removeClass("hide");
    $(".modelBut1").addClass("loaded");
    $(".structBut1").removeClass("loaded");
    $(".configBut1").removeClass("loaded");
    $(".owBut1").removeClass("loaded");
    $(".gmBut1").removeClass("loaded");
    $(".feedBut1").removeClass("loaded");
    $(".dbBut1").removeClass("loaded");
})

// PAGE STRUCTURE FILE

// Homepage button
structButton.on("click", () => {
    bioDiv.addClass("hide");
    configDiv.addClass("hide");
    owDiv.addClass("hide");
    gmDiv.addClass("hide");
    dbDiv.addClass("hide");
    modelDiv.addClass("hide");
    feedDiv.addClass("hide");
    structDiv.removeClass("hide");
    $(".structBut1").addClass("loaded");
    $(".modelBut1").removeClass("loaded");
    $(".configBut1").removeClass("loaded");
    $(".owBut1").removeClass("loaded");
    $(".gmBut1").removeClass("loaded");
    $(".feedBut1").removeClass("loaded");
    $(".dbBut1").removeClass("loaded");
})

// Side navbar button
$(".structBut1").on("click", () => {
    bioDiv.addClass("hide");
    configDiv.addClass("hide");
    owDiv.addClass("hide");
    gmDiv.addClass("hide");
    dbDiv.addClass("hide");
    modelDiv.addClass("hide");
    feedDiv.addClass("hide");
    structDiv.removeClass("hide");
    $(".structBut1").addClass("loaded");
    $(".modelBut1").removeClass("loaded");
    $(".configBut1").removeClass("loaded");
    $(".owBut1").removeClass("loaded");
    $(".gmBut1").removeClass("loaded");
    $(".feedBut1").removeClass("loaded");
    $(".dbBut1").removeClass("loaded");
})

// CONFIGURATION FILE

// Homepage button
configButton.on("click", () => {
    bioDiv.addClass("hide");
    structDiv.addClass("hide");
    modelDiv.addClass("hide");
    owDiv.addClass("hide");
    gmDiv.addClass("hide");
    dbDiv.addClass("hide");
    feedDiv.addClass("hide");
    configDiv.removeClass("hide");
    $(".configBut1").addClass("loaded");
    $(".structBut1").removeClass("loaded");
    $(".modelBut1").removeClass("loaded");
    $(".owBut1").removeClass("loaded");
    $(".gmBut1").removeClass("loaded");
    $(".feedBut1").removeClass("loaded");
    $(".dbBut1").removeClass("loaded");
})
// Side navbar button
$(".configBut1").on("click", () => {
    bioDiv.addClass("hide");
    structDiv.addClass("hide");
    modelDiv.addClass("hide");
    owDiv.addClass("hide");
    gmDiv.addClass("hide");
    dbDiv.addClass("hide");
    feedDiv.addClass("hide");
    configDiv.removeClass("hide");
    $(".configBut1").addClass("loaded");
    $(".structBut1").removeClass("loaded");
    $(".modelBut1").removeClass("loaded");
    $(".owBut1").removeClass("loaded");
    $(".gmBut1").removeClass("loaded");
    $(".feedBut1").removeClass("loaded");
    $(".dbBut1").removeClass("loaded");
})


// OPENWEATHER API

// Homepage button
owButton.on("click", () => {
    bioDiv.addClass("hide");
    structDiv.addClass("hide");
    modelDiv.addClass("hide");
    configDiv.addClass("hide");
    gmDiv.addClass("hide");
    dbDiv.addClass("hide");
    feedDiv.addClass("hide");
    owDiv.removeClass("hide");
    $(".owBut1").addClass("loaded");
    $(".structBut1").removeClass("loaded");
    $(".modelBut1").removeClass("loaded");
    $(".configBut1").removeClass("loaded");
    $(".gmBut1").removeClass("loaded");
    $(".feedBut1").removeClass("loaded");
    $(".dbBut1").removeClass("loaded");
})
// Side navbar button
$(".owBut1").on("click", () => {
    bioDiv.addClass("hide");
    structDiv.addClass("hide");
    modelDiv.addClass("hide");
    configDiv.addClass("hide");
    gmDiv.addClass("hide");
    dbDiv.addClass("hide");
    feedDiv.addClass("hide");
    owDiv.removeClass("hide");
    $(".owBut1").addClass("loaded");
    $(".structBut1").removeClass("loaded");
    $(".modelBut1").removeClass("loaded");
    $(".configBut1").removeClass("loaded");
    $(".gmBut1").removeClass("loaded");
    $(".feedBut1").removeClass("loaded");
    $(".dbBut1").removeClass("loaded");
})

// GOOGLE MAPS API

// Homepage button
gmButton.on("click", () => {
    bioDiv.addClass("hide");
    structDiv.addClass("hide");
    modelDiv.addClass("hide");
    configDiv.addClass("hide");
    owDiv.addClass("hide");
    dbDiv.addClass("hide");
    feedDiv.addClass("hide");
    gmDiv.removeClass("hide");
    $(".gmBut1").addClass("loaded");
    $(".structBut1").removeClass("loaded");
    $(".owBut1").removeClass("loaded");
    $(".modelBut1").removeClass("loaded");
    $(".configBut1").removeClass("loaded");
    $(".feedBut1").removeClass("loaded");
    $(".dbBut1").removeClass("loaded");
})
// Side navbar button
$(".gmBut1").on("click", () => {
    bioDiv.addClass("hide");
    structDiv.addClass("hide");
    modelDiv.addClass("hide");
    configDiv.addClass("hide");
    owDiv.addClass("hide");
    dbDiv.addClass("hide");
    feedDiv.addClass("hide");
    gmDiv.removeClass("hide");
    $(".gmBut1").addClass("loaded");
    $(".structBut1").removeClass("loaded");
    $(".owBut1").removeClass("loaded");
    $(".modelBut1").removeClass("loaded");
    $(".configBut1").removeClass("loaded");
    $(".feedBut1").removeClass("loaded");
    $(".dbBut1").removeClass("loaded");
})


// DATABASE FILE

// Homepage button
dbButton.on("click", () => {
    bioDiv.addClass("hide");
    structDiv.addClass("hide");
    modelDiv.addClass("hide");
    configDiv.addClass("hide");
    owDiv.addClass("hide");
    gmDiv.addClass("hide");
    feedDiv.addClass("hide");
    dbDiv.removeClass("hide");
    $(".gmBut1").removeClass("loaded");
    $(".structBut1").removeClass("loaded");
    $(".owBut1").removeClass("loaded");
    $(".modelBut1").removeClass("loaded");
    $(".configBut1").removeClass("loaded");
    $(".feedBut1").removeClass("loaded");
    $(".dbBut1").addClass("loaded");
})

// Side navbar buttton
$(".dbBut1").on("click", () => {
    bioDiv.addClass("hide");
    structDiv.addClass("hide");
    modelDiv.addClass("hide");
    configDiv.addClass("hide");
    owDiv.addClass("hide");
    gmDiv.addClass("hide");
    feedDiv.addClass("hide");
    dbDiv.removeClass("hide");
    $(".gmBut1").removeClass("loaded");
    $(".owBut1").removeClass("loaded");
    $(".structBut1").removeClass("loaded");
    $(".modelBut1").removeClass("loaded");
    $(".configBut1").removeClass("loaded");
    $(".feedBut1").removeClass("loaded");
    $(".dbBut1").addClass("loaded");
})


// RSS FEED FILE

// Homepage button
feedBut.on("click", () => {
    bioDiv.addClass("hide");
    structDiv.addClass("hide");
    modelDiv.addClass("hide");
    configDiv.addClass("hide");
    owDiv.addClass("hide");
    gmDiv.addClass("hide");
    dbDiv.addClass("hide");
    feedDiv.removeClass("hide");
    $(".gmBut1").removeClass("loaded");
    $(".owBut1").removeClass("loaded");
    $(".structBut1").removeClass("loaded");
    $(".modelBut1").removeClass("loaded");
    $(".configBut1").removeClass("loaded");
    $(".dbBut1").removeClass("loaded");
    $(".feedBut1").addClass("loaded");
})

// Sidebar Button
$(".feedBut1").on("click", () => {
    bioDiv.addClass("hide");
    structDiv.addClass("hide");
    modelDiv.addClass("hide");
    configDiv.addClass("hide");
    owDiv.addClass("hide");
    gmDiv.addClass("hide");
    dbDiv.addClass("hide");
    feedDiv.removeClass("hide");
    $(".gmBut1").removeClass("loaded");
    $(".owBut1").removeClass("loaded");
    $(".structBut1").removeClass("loaded");
    $(".modelBut1").removeClass("loaded");
    $(".configBut1").removeClass("loaded");
    $(".dbBut1").removeClass("loaded");
    $(".feedBut1").addClass("loaded");
})


// Hover on image to change photo
// NAVBAR
$("#navbarImage").on("mouseover", () => {
    $("#navbarImage").attr("src","./assets/images/navbarCode.png");
})
$("#navbarImage").on("mouseout", () => {
    $("#navbarImage").attr("src","./assets/images/navBar.png");
})

// MAP
$("#mapImage").on("mouseover", () => {
    $("#mapImage").attr("src","./assets/images/twinMapCode.png");
})

$("#mapImage").on("mouseout", () => {
    $("#mapImage").attr("src","./assets/images/twinMap.png");
})

// WEATHER
$("#weatherImage").on("mouseover", () => {
    $("#weatherImage").attr("src","./assets/images/currentCode.png");
})

$("#weatherImage").on("mouseout", () => {
    $("#weatherImage").attr("src","./assets/images/currentweather.png");
})

