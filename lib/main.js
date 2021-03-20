"use strict";

// Immediately print 112 as boiling temp
var boilingTemp = document.getElementById("boiling-temp");
var displayBoilingTemp = function displayBoilingTemp() {
    return boilingTemp.innerHTML = "212";
};
displayBoilingTemp();

// Immediately print 32 as freezing temp
var freezingTemp = document.getElementById("freezing-temp");
var displayFreezingTemp = function displayFreezingTemp() {
    return freezingTemp.innerHTML = "32";
};
displayFreezingTemp();

// Immediately print 80 as water
var waterTemp = document.getElementById("water-temp");
var displayWaterTemp = function displayWaterTemp() {
    return waterTemp.innerHTML = "80";
};
displayWaterTemp();

//Display appropriate message after 3 seconds based on water temp 
var boiling = document.getElementById("boiling");
var frozen = document.getElementById("frozen");
var goodTemp = document.getElementById("good-temp");
var waterTempNumber = document.getElementById("water-temp").innerHTML;

var displayMessage = function displayMessage() {
    if (waterTempNumber > 212) {
        boiling.classList.remove("hide");
        boiling.classList.add("show");
    }

    if (waterTempNumber < 32) {
        frozen.classList.remove("hide");
        frozen.classList.add("show");
    }

    if (waterTempNumber >= 32 && waterTempNumber <= 212) {
        goodTemp.classList.remove("hide");
        goodTemp.classList.add("show");
    }
};

setTimeout(displayMessage, 3000);