var wallArea = document.getElementById("wallArea");
var wallType = document.getElementById("wallType");
var firstMaterialsWallLayer = document.getElementById("firstMaterialsWallLayer");
var secondMaterialsWallLayer = document.getElementById("secondMaterialsWallLayer");
var thirdMaterialsWallLayer = document.getElementById("thirdMaterialsWallLayer");
var firstWallLayerThickness = document.getElementById("firstWallLayerThickness");
var secondWallLayerThickness = document.getElementById("secondWallLayerThickness");
var thirdWallLayerThickness = document.getElementById("thirdWallLayerThickness");

var parentWallLayer = document.getElementById("parentWallLayer");
var firstWallLayer = document.getElementById("firstWallLayer");
var secondWallLayer = document.getElementById("secondWallLayer");
var thirdWallLayer = document.getElementById("thirdWallLayer");
var plusMinusButton = document.getElementById("plusMinusButton");
var plusMinusButton1WallLayer = document.getElementById("plusMinusButton1WallLayer");
var plusMinusButton2WallLayer = document.getElementById("plusMinusButton2WallLayer");
var plusMinusButton3WallLayer = document.getElementById("plusMinusButton3WallLayer");

var resultWallButton = document.getElementById("resultWallButton");
var resultWallButtonText = document.getElementById("resultWallButtonText");
var resultWallButtonTextBottom = document.getElementById("resultWallButtonTextBottom");

//Layers dropdown
function toggleParentWallForm() {
    if (parentWallLayer.style.display === "none" && plusMinusButton.innerHTML === "+") {
        parentWallLayer.style.display = "block";
        plusMinusButton.innerHTML = "-";
    } else {
        parentWallLayer.style.display = "none";
        plusMinusButton.innerHTML = "+";
    }
}
function toggleWall1Form() {
    if (firstWallLayer.style.display === "none" && plusMinusButton1WallLayer.innerHTML === "+") {
        firstWallLayer.style.display = "block";
        plusMinusButton1WallLayer.innerHTML = "-";
        firstMaterialsWallLayer.selectedIndex = 0;
        firstWallLayerThickness.value = "";
    } else {
        firstWallLayer.style.display = "none";
        plusMinusButton1WallLayer.innerHTML = "+";
        firstMaterialsWallLayer.selectedIndex = 0;
        firstWallLayerThickness.value = 0;
        firstMaterialsWallLayer.classList.remove("error");
        firstWallLayerThickness.classList.remove("error");
        
    }
}
function toggleWall2Form() {
    if (secondWallLayer.style.display === "none" && plusMinusButton2WallLayer.innerHTML === "+") {
        secondWallLayer.style.display = "block";
        plusMinusButton2WallLayer.innerHTML = "-";
        secondMaterialsWallLayer.selectedIndex = 0;
        secondWallLayerThickness.value = "";        
    } else {
        secondWallLayer.style.display = "none";
        plusMinusButton2WallLayer.innerHTML = "+";
        secondMaterialsWallLayer.selectedIndex = 0;
        secondWallLayerThickness.value = 0;
        secondMaterialsWallLayer.classList.remove("error");
        secondWallLayerThickness.classList.remove("error");
    }
}
function toggleWall3Form() {
    if (thirdWallLayer.style.display === "none" && plusMinusButton3WallLayer.innerHTML === "+") {
        thirdWallLayer.style.display = "block";
        plusMinusButton3WallLayer.innerHTML = "-";
        thirdMaterialsWallLayer.selectedIndex = 0;
        thirdWallLayerThickness.value = "";   
    } else {
        thirdWallLayer.style.display = "none";
        plusMinusButton3WallLayer.innerHTML = "+";
        thirdMaterialsWallLayer.selectedIndex = 0;
        thirdWallLayerThickness.value = 0;
        thirdMaterialsWallLayer.classList.remove("error");
        thirdWallLayerThickness.classList.remove("error");
    }
}
//Validation
resultWallButton.addEventListener('click', function () {

    if (window.getComputedStyle(firstWallLayer).display === "block" || window.getComputedStyle(secondWallLayer).display === "block" ||
        window.getComputedStyle(thirdWallLayer).display === "block" || cityTemperature.value === "" || innerTemperature.value === "" ||
        wallArea.value === "") {

        if (cityTemperature.value === "" || innerTemperature.value === "" || wallArea.value === "") {
            if (cityTemperature.value === "") {
                cityTemperature.classList.add("error");
            } else {
                cityTemperature.classList.remove("error");
            }
            if (innerTemperature.value === "") {
                innerTemperature.classList.add("error");
            } else {
                innerTemperature.classList.remove("error");
            }
            if (wallArea.value === "") {
                wallArea.classList.add("error");
            } else {
                wallArea.classList.remove("error");
            }
        }
        if (window.getComputedStyle(firstWallLayer).display === "block") {

            if (firstMaterialsWallLayer.selectedIndex === 0) {
                firstMaterialsWallLayer.classList.add("error");
            } else {
                firstMaterialsWallLayer.classList.remove("error");
            }

            if (firstWallLayerThickness.value === "") {
                firstWallLayerThickness.classList.add("error");
            } else {
                firstWallLayerThickness.classList.remove("error");
            }
        }
        if (window.getComputedStyle(secondWallLayer).display === "block") {

            if (secondMaterialsWallLayer.selectedIndex === 0) {
                secondMaterialsWallLayer.classList.add("error");
            } else {
                secondMaterialsWallLayer.classList.remove("error");
            }

            if (secondWallLayerThickness.value === "") {
                secondWallLayerThickness.classList.add("error");
            } else {
                secondWallLayerThickness.classList.remove("error");
            }
        }

        if (window.getComputedStyle(thirdWallLayer).display === "block") {

            if (thirdMaterialsWallLayer.selectedIndex === 0) {
                thirdMaterialsWallLayer.classList.add("error");
            } else {
                thirdMaterialsWallLayer.classList.remove("error");
            }

            if (thirdWallLayerThickness.value === "") {
                thirdWallLayerThickness.classList.add("error");
            } else {
                thirdWallLayerThickness.classList.remove("error");
            }
        }
        if (cityTemperature.classList.contains("error") || innerTemperature.classList.contains("error") || wallArea.classList.contains("error") ||
            firstMaterialsWallLayer.classList.contains("error") || firstWallLayerThickness.classList.contains("error") ||
            secondMaterialsWallLayer.classList.contains("error") || secondWallLayerThickness.classList.contains("error") ||
            thirdMaterialsWallLayer.classList.contains("error") || thirdWallLayerThickness.classList.contains("error")) {
            wallButtonErrorMessage.textContent = "Заповніть поля виділені червоним кольором";
            resultWallButtonText.style.padding = "0";
            resultWallButtonText.textContent = "";
            resultWallButtonTextBottom.textContent = "";
            return;
        }
        var firstMaterialsWallLayerValue = firstMaterialsWallLayer.value === "0" ? 1 : parseFloat(firstMaterialsWallLayer.value);
        var secondMaterialsWallLayerValue = secondMaterialsWallLayer.value === "0" ? 1 : parseFloat(secondMaterialsWallLayer.value);
        var thirdMaterialsWallLayerValue = thirdMaterialsWallLayer.value === "0" ? 1 : parseFloat(thirdMaterialsWallLayer.value);
        var firstWallLayerThicknessValue = firstWallLayerThickness.value === "" ? 0 : parseInt(firstWallLayerThickness.value);
        var secondWallLayerThicknessValue = secondWallLayerThickness.value === "" ? 0 : parseInt(secondWallLayerThickness.value);
        var thirdWallLayerThicknessValue = thirdWallLayerThickness.value === "" ? 0 : parseInt(thirdWallLayerThickness.value);
        //conditions for calculation            
        const sum = (parseFloat((parseFloat(wallArea.value) * (parseFloat(innerTemperature.value) - parseFloat(cityTemperature.value))) /
            (               
            (parseFloat((firstWallLayerThicknessValue  * 0.01 )/ firstMaterialsWallLayerValue)
             + parseFloat((secondWallLayerThicknessValue  * 0.01) / secondMaterialsWallLayerValue)
                + parseFloat((thirdWallLayerThicknessValue * 0.01) / thirdMaterialsWallLayerValue)
                + parseFloat(1 / 8.7)
                + parseFloat(1 / wallType.value)) * 1000
             ))) .toFixed(2);

        resultWallButtonText.style.padding = "5px";
        resultWallButtonText.textContent = `${sum} кВт`;
        resultWallButtonTextBottom.textContent = `${sum} кВт`;
        wallButtonErrorMessage.textContent = "";
        updateSum();
    } else {
        wallButtonErrorMessage.textContent = "Заповніть хоча б один шар стіни";
        resultWallButtonText.style.padding = "0";
        resultWallButtonText.textContent = "";
        resultWallButtonTextBottom.textContent = "";
    }
});
wallArea.addEventListener("input", function () {
    this.classList.remove("error");
});

firstMaterialsWallLayer.addEventListener("input", function () {
    this.classList.remove("error");
});
firstWallLayerThickness.addEventListener("input", function () {
    this.classList.remove("error");
});
secondMaterialsWallLayer.addEventListener("input", function () {
    this.classList.remove("error");
});
secondWallLayerThickness.addEventListener("input", function () {
    this.classList.remove("error");
});
thirdMaterialsWallLayer.addEventListener("input", function () {
    this.classList.remove("error");
});
thirdWallLayerThickness.addEventListener("input", function () {
    this.classList.remove("error");
});

