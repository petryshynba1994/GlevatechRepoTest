var floorArea = document.getElementById("floorArea");
var floorType = document.getElementById("floorType");
var firstMaterialsFloorLayer = document.getElementById("firstMaterialsFloorLayer");
var secondMaterialsFloorLayer = document.getElementById("secondMaterialsFloorLayer");
var thirdMaterialsFloorLayer = document.getElementById("thirdMaterialsFloorLayer");
var firstFloorLayerThickness = document.getElementById("firstFloorLayerThickness");
var secondFloorLayerThickness = document.getElementById("secondFloorLayerThickness");
var thirdFloorLayerThickness = document.getElementById("thirdFloorLayerThickness");

var parentFloorLayer = document.getElementById("parentFloorLayer");
var firstFloorLayer = document.getElementById("firstFloorLayer");
var secondFloorLayer = document.getElementById("secondFloorLayer");
var thirdFloorLayer = document.getElementById("thirdFloorLayer");
var plusMinusButtonFloor = document.getElementById("plusMinusButtonFloor");
var plusMinusButton1FloorLayer = document.getElementById("plusMinusButton1FloorLayer");
var plusMinusButton2FloorLayer = document.getElementById("plusMinusButton2FloorLayer");
var plusMinusButton3FloorLayer = document.getElementById("plusMinusButton3FloorLayer");

var resultFloorButton = document.getElementById("resultFloorButton");
var resultFloorButtonText = document.getElementById("resultFloorButtonText");
var resultFloorButtonTextBottom = document.getElementById("resultFloorButtonTextBottom");

function toggleParentFloorForm() {
    if (parentFloorLayer.style.display === "none" && plusMinusButtonFloor.innerHTML === "+") {
        parentFloorLayer.style.display = "block";
        plusMinusButtonFloor.innerHTML = "-";
    } else {
        parentFloorLayer.style.display = "none";
        plusMinusButtonFloor.innerHTML = "+";
    }
}
function toggleFloor1Form() {
    if (firstFloorLayer.style.display === "none" && plusMinusButton1FloorLayer.innerHTML === "+") {
        firstFloorLayer.style.display = "block";
        plusMinusButton1FloorLayer.innerHTML = "-";
        firstMaterialsFloorLayer.selectedIndex = 0;
        firstFloorLayerThickness.value = "";
    } else {
        firstFloorLayer.style.display = "none";
        plusMinusButton1FloorLayer.innerHTML = "+";
        firstMaterialsFloorLayer.selectedIndex = 0;
        firstFloorLayerThickness.value = 0;
        firstMaterialsFloorLayer.classList.remove("error");
        firstFloorLayerThickness.classList.remove("error");
    }
}
function toggleFloor2Form() {
    if (secondFloorLayer.style.display === "none" && plusMinusButton2FloorLayer.innerHTML === "+") {
        secondFloorLayer.style.display = "block";
        plusMinusButton2FloorLayer.innerHTML = "-";
        secondMaterialsFloorLayer.selectedIndex = 0;
        secondFloorLayerThickness.value = "";
    } else {
        secondFloorLayer.style.display = "none";
        plusMinusButton2FloorLayer.innerHTML = "+";
        secondMaterialsFloorLayer.selectedIndex = 0;
        secondFloorLayerThickness.value = 0;
        secondMaterialsFloorLayer.classList.remove("error");
        secondFloorLayerThickness.classList.remove("error");
    }
}
function toggleFloor3Form() {
    if (thirdFloorLayer.style.display === "none" && plusMinusButton3FloorLayer.innerHTML === "+") {
        thirdFloorLayer.style.display = "block";
        plusMinusButton3FloorLayer.innerHTML = "-";
        thirdMaterialsFloorLayer.selectedIndex = 0;
        thirdFloorLayerThickness.value = "";
    } else {
        thirdFloorLayer.style.display = "none";
        plusMinusButton3FloorLayer.innerHTML = "+";
        thirdMaterialsFloorLayer.selectedIndex = 0;
        thirdFloorLayerThickness.value = 0;
        thirdMaterialsFloorLayer.classList.remove("error");
        thirdFloorLayerThickness.classList.remove("error");
    }
}


//Validation
resultFloorButton.addEventListener('click', function () {

    if (window.getComputedStyle(firstFloorLayer).display === "block" || window.getComputedStyle(secondFloorLayer).display === "block" ||
        window.getComputedStyle(thirdFloorLayer).display === "block" || cityTemperature.value === "" || innerTemperature.value === "" ||
        floorArea.value === "") {

        if (cityTemperature.value === "" || innerTemperature.value === "" || floorArea.value === "") {
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
            if (floorArea.value === "") {
                floorArea.classList.add("error");
            } else {
                floorArea.classList.remove("error");
            }
        }
        if (window.getComputedStyle(firstFloorLayer).display === "block") {

            if (firstMaterialsFloorLayer.selectedIndex === 0) {
                firstMaterialsFloorLayer.classList.add("error");
            } else {
                firstMaterialsFloorLayer.classList.remove("error");
            }

            if (firstFloorLayerThickness.value === "") {
                firstFloorLayerThickness.classList.add("error");
            } else {
                firstFloorLayerThickness.classList.remove("error");
            }
        }



        if (window.getComputedStyle(secondFloorLayer).display === "block") {

            if (secondMaterialsFloorLayer.selectedIndex === 0) {
                secondMaterialsFloorLayer.classList.add("error");
            } else {
                secondMaterialsFloorLayer.classList.remove("error");
            }

            if (secondFloorLayerThickness.value === "") {
                secondFloorLayerThickness.classList.add("error");
            } else {
                secondFloorLayerThickness.classList.remove("error");
            }
        }

        if (window.getComputedStyle(thirdFloorLayer).display === "block") {

            if (thirdMaterialsFloorLayer.selectedIndex === 0) {
                thirdMaterialsFloorLayer.classList.add("error");
            } else {
                thirdMaterialsFloorLayer.classList.remove("error");
            }

            if (thirdFloorLayerThickness.value === "") {
                thirdFloorLayerThickness.classList.add("error");
            } else {
                thirdFloorLayerThickness.classList.remove("error");
            }
        }

        if (cityTemperature.classList.contains("error") || innerTemperature.classList.contains("error") || floorArea.classList.contains("error") ||
            firstMaterialsFloorLayer.classList.contains("error") || firstFloorLayerThickness.classList.contains("error") ||
            secondMaterialsFloorLayer.classList.contains("error") || secondFloorLayerThickness.classList.contains("error") ||
            thirdMaterialsFloorLayer.classList.contains("error") || thirdFloorLayerThickness.classList.contains("error")) {
            floorButtonErrorMessage.textContent = "Заповніть поля виділені червоним кольором";
            resultFloorButtonText.textContent = "";
            resultFloorButtonTextBottom.textContent = "";
            return;
        }
        var firstMaterialsFloorLayerValue = firstMaterialsFloorLayer.value === "0" ? 1 : parseFloat(firstMaterialsFloorLayer.value);
        var secondMaterialsFloorLayerValue = secondMaterialsFloorLayer.value === "0" ? 1 : parseFloat(secondMaterialsFloorLayer.value);
        var thirdMaterialsFloorLayerValue = thirdMaterialsFloorLayer.value === "0" ? 1 : parseFloat(thirdMaterialsFloorLayer.value);
        var firstFloorLayerThicknessValue = firstFloorLayerThickness.value === "" ? 0 : parseFloat(firstFloorLayerThickness.value);
        var secondFloorLayerThicknessValue = secondFloorLayerThickness.value === "" ? 0 : parseInt(secondFloorLayerThickness.value);
        var thirdFloorLayerThicknessValue = thirdFloorLayerThickness.value === "" ? 0 : parseInt(thirdFloorLayerThickness.value);


        //conditions for calculation 
        if (floorType.selectedIndex === 0) {
            const sum = (parseFloat((parseFloat(floorArea.value) * parseFloat(innerTemperature.value)) /
                (
                    (2.1 + parseFloat((firstFloorLayerThicknessValue * 0.01) / firstMaterialsFloorLayerValue) +
                        parseFloat((secondFloorLayerThicknessValue * 0.01) / secondMaterialsFloorLayerValue) +
                        parseFloat((thirdFloorLayerThicknessValue * 0.01) / thirdMaterialsFloorLayerValue)) * 1000
                ))).toFixed(2);

            resultFloorButtonText.style.padding = "5px";
            resultFloorButtonText.textContent = `${sum} кВт`;
            resultFloorButtonTextBottom.textContent = `${sum} кВт`;
            floorButtonErrorMessage.textContent = "";
            updateSum();
        }
        if (floorType.selectedIndex === 1) {
            const sum = (parseFloat((parseFloat(floorArea.value) * parseFloat(innerTemperature.value)) /
                (
                    (parseFloat(1 / 6) + parseFloat(1 / floorType.value) + parseFloat((firstFloorLayerThicknessValue * 0.01) / firstMaterialsFloorLayerValue) +
                        parseFloat((secondFloorLayerThicknessValue * 0.01) / secondMaterialsFloorLayerValue) +
                        parseFloat((thirdFloorLayerThicknessValue * 0.01) / thirdMaterialsFloorLayerValue)) * 1000
                ))).toFixed(2);

            resultFloorButtonText.style.padding = "5px";
            resultFloorButtonText.textContent = `${sum} кВт`;
            resultFloorButtonTextBottom.textContent = `${sum} кВт`;
            floorButtonErrorMessage.textContent = "";
            updateSum();
        }

    } else {

        resultFloorButtonText.style.padding = "0";
        floorButtonErrorMessage.textContent = "Заповніть хоча б один шар підлоги";
        resultFloorButtonText.textContent = "";
        resultFloorButtonTextBottom.textContent = "";
    }

});

floorArea.addEventListener("input", function () {
    this.classList.remove("error");
});
firstMaterialsFloorLayer.addEventListener("input", function () {
    this.classList.remove("error");
});
firstFloorLayerThickness.addEventListener("input", function () {
    this.classList.remove("error");
});
secondMaterialsFloorLayer.addEventListener("input", function () {
    this.classList.remove("error");
});
secondFloorLayerThickness.addEventListener("input", function () {
    this.classList.remove("error");
});
thirdMaterialsFloorLayer.addEventListener("input", function () {
    this.classList.remove("error");
});
thirdFloorLayerThickness.addEventListener("input", function () {
    this.classList.remove("error");
});

