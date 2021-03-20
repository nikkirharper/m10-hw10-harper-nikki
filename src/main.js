// Immediately print 112 as boiling temp
const boilingTemp = document.getElementById("boiling-temp"); 
const displayBoilingTemp = () => boilingTemp.innerHTML = "212";
displayBoilingTemp(); 

// Immediately print 32 as freezing temp
const freezingTemp = document.getElementById("freezing-temp"); 
const displayFreezingTemp = () => freezingTemp.innerHTML = "32";
displayFreezingTemp();

// Immediately print 80 as water
const waterTemp = document.getElementById("water-temp"); 
const displayWaterTemp = () => waterTemp.innerHTML = "80";
displayWaterTemp();

//Display appropriate message after 3 seconds based on water temp 
const boiling = document.getElementById("boiling");
const frozen = document.getElementById("frozen"); 
const goodTemp = document.getElementById("good-temp");
const waterTempNumber = document.getElementById("water-temp").innerHTML; 

const displayMessage = () =>
    {
        if (waterTempNumber > 212) {
            boiling.classList.remove("hide");
            boiling.classList.add("show");
        }

        if (waterTempNumber < 32) {
            frozen.classList.remove("hide");
            frozen.classList.add("show");
        }

        if (waterTempNumber >= 32 && waterTempNumber <=212) {
            goodTemp.classList.remove("hide");
            goodTemp.classList.add("show");
        }
    }; 

setTimeout(displayMessage, 3000); 

