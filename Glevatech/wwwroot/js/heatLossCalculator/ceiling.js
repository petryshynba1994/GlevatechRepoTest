var ceilingType = document.getElementById("ceilingType");
var ceilingArea = document.getElementById("ceilingArea");
var firstMaterialsCeilingLayer = document.getElementById("firstMaterialsCeilingLayer");
var secondMaterialsCeilingLayer = document.getElementById("secondMaterialsCeilingLayer");
var thirdMaterialsCeilingLayer = document.getElementById("thirdMaterialsCeilingLayer");
var firstCeilingLayerThickness = document.getElementById("firstCeilingLayerThickness");
var secondCeilingLayerThickness = document.getElementById("secondCeilingLayerThickness");
var thirdCeilingLayerThickness = document.getElementById("thirdCeilingLayerThickness");

var parentCeilingLayer = document.getElementById("parentCeilingLayer");
var firstCeilingLayer = document.getElementById("firstCeilingLayer");
var secondCeilingLayer = document.getElementById("secondCeilingLayer");
var thirdCeilingLayer = document.getElementById("thirdCeilingLayer");
var plusMinusButtonCeiling = document.getElementById("plusMinusButtonCeiling");
var plusMinusButton1CeilingLayer = document.getElementById("plusMinusButton1CeilingLayer");
var plusMinusButton2CeilingLayer = document.getElementById("plusMinusButton2CeilingLayer");
var plusMinusButton3CeilingLayer = document.getElementById("plusMinusButton3CeilingLayer");

var resultCeilingButton = document.getElementById("resultCeilingButton");
var resultCeilingButtonText = document.getElementById("resultCeilingButtonText");
var resultCeilingButtonTextBottom = document.getElementById("resultCeilingButtonTextBottom");


function toggleParentCeilingForm() {
    if (parentCeilingLayer.style.display === "none" && plusMinusButtonCeiling.innerHTML === "+") {
        parentCeilingLayer.style.display = "block";
        plusMinusButtonCeiling.innerHTML = "-";
    } else {
        parentCeilingLayer.style.display = "none";
        plusMinusButtonCeiling.innerHTML = "+";
    }
}
function toggle1CeilingForm() {
    if (firstCeilingLayer.style.display === "none" && plusMinusButton1CeilingLayer.innerHTML === "+") {
        firstCeilingLayer.style.display = "block";
        plusMinusButton1CeilingLayer.innerHTML = "-";
        firstMaterialsCeilingLayer.selectedIndex = 0;
        firstCeilingLayerThickness.value = "";
    } else {
        firstCeilingLayer.style.display = "none";
        plusMinusButton1CeilingLayer.innerHTML = "+";
        firstMaterialsCeilingLayer.selectedIndex = 0;
        firstCeilingLayerThickness.value = 0;
        firstMaterialsCeilingLayer.classList.remove("error");
        firstCeilingLayerThickness.classList.remove("error");   
    }
}
function toggle2CeilingForm() {
    if (secondCeilingLayer.style.display === "none" && plusMinusButton2CeilingLayer.innerHTML === "+") {
        secondCeilingLayer.style.display = "block";
        plusMinusButton2CeilingLayer.innerHTML = "-";
        secondMaterialsCeilingLayer.selectedIndex = 0;
        secondCeilingLayerThickness.value = "";
    } else {
        secondCeilingLayer.style.display = "none";
        plusMinusButton2CeilingLayer.innerHTML = "+";
        secondMaterialsCeilingLayer.selectedIndex = 0;
        secondCeilingLayerThickness.value = 0;
        secondMaterialsCeilingLayer.classList.remove("error");
        secondCeilingLayerThickness.classList.remove("error"); 
    }
}
function toggle3CeilingForm() {
    if (thirdCeilingLayer.style.display === "none" && plusMinusButton3CeilingLayer.innerHTML === "+") {
        thirdCeilingLayer.style.display = "block";
        plusMinusButton3CeilingLayer.innerHTML = "-";
        thirdMaterialsCeilingLayer.selectedIndex = 0;
        thirdCeilingLayerThickness.value = "";
    } else {
        thirdCeilingLayer.style.display = "none";
        plusMinusButton3CeilingLayer.innerHTML = "+";
        thirdMaterialsCeilingLayer.selectedIndex = 0;
        thirdCeilingLayerThickness.value = 0;
        thirdMaterialsCeilingLayer.classList.remove("error");
        thirdCeilingLayerThickness.classList.remove("error"); 
    }
}


//Validation
resultCeilingButton.addEventListener('click', function () {

    if (window.getComputedStyle(firstCeilingLayer).display === "block" || window.getComputedStyle(secondCeilingLayer).display === "block" ||
        window.getComputedStyle(thirdCeilingLayer).display === "block" || cityTemperature.value === "" || innerTemperature.value === "" ||
        ceilingArea.value === "") {

        if (cityTemperature.value === "" || innerTemperature.value === "" || ceilingArea.value === "") {
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
            if (ceilingArea.value === "") {
                ceilingArea.classList.add("error");
            } else {
                ceilingArea.classList.remove("error");
            }
        }
        if (window.getComputedStyle(firstCeilingLayer).display === "block") {

            if (firstMaterialsCeilingLayer.selectedIndex === 0) {
                firstMaterialsCeilingLayer.classList.add("error");
            } else {
                firstMaterialsCeilingLayer.classList.remove("error");
            }

            if (firstCeilingLayerThickness.value === "") {
                firstCeilingLayerThickness.classList.add("error");
            } else {
                firstCeilingLayerThickness.classList.remove("error");
            }
        }



        if (window.getComputedStyle(secondCeilingLayer).display === "block") {

            if (secondMaterialsCeilingLayer.selectedIndex === 0) {
                secondMaterialsCeilingLayer.classList.add("error");
            } else {
                secondMaterialsCeilingLayer.classList.remove("error");
            }

            if (secondCeilingLayerThickness.value === "") {
                secondCeilingLayerThickness.classList.add("error");
            } else {
                secondCeilingLayerThickness.classList.remove("error");
            }
        }

        if (window.getComputedStyle(thirdCeilingLayer).display === "block") {

            if (thirdMaterialsCeilingLayer.selectedIndex === 0) {
                thirdMaterialsCeilingLayer.classList.add("error");
            } else {
                thirdMaterialsCeilingLayer.classList.remove("error");
            }

            if (thirdCeilingLayerThickness.value === "") {
                thirdCeilingLayerThickness.classList.add("error");
            } else {
                thirdCeilingLayerThickness.classList.remove("error");
            }
        }

        if (cityTemperature.classList.contains("error") || innerTemperature.classList.contains("error") || ceilingArea.classList.contains("error") ||
            firstMaterialsCeilingLayer.classList.contains("error") || firstCeilingLayerThickness.classList.contains("error") ||
            secondMaterialsCeilingLayer.classList.contains("error") || secondCeilingLayerThickness.classList.contains("error") ||
            thirdMaterialsCeilingLayer.classList.contains("error") || thirdCeilingLayerThickness.classList.contains("error")) {
            ceilingButtonErrorMessage.textContent = "Заповніть поля виділені червоним кольором";
            resultCeilingButtonText.style.padding = "0";
            resultCeilingButtonText.textContent = "";
            resultCeilingButtonTextBottom.textContent = "";
            return;
        }
        var firstMaterialsCeilingLayerValue = firstMaterialsCeilingLayer.value === "0" ? 1 : parseFloat(firstMaterialsCeilingLayer.value);
        var secondMaterialsCeilingLayerValue = secondMaterialsCeilingLayer.value === "0" ? 1 : parseFloat(secondMaterialsCeilingLayer.value);
        var thirdMaterialsCeilingLayerValue = thirdMaterialsCeilingLayer.value === "0" ? 1 : parseFloat(thirdMaterialsCeilingLayer.value);
        var firstCeilingLayerThicknessValue = firstCeilingLayerThickness.value === "" ? 0 : parseFloat(firstCeilingLayerThickness.value);
        var secondCeilingLayerThicknessValue = secondCeilingLayerThickness.value === "" ? 0 : parseInt(secondCeilingLayerThickness.value);
        var thirdCeilingLayerThicknessValue = thirdCeilingLayerThickness.value === "" ? 0 : parseInt(thirdCeilingLayerThickness.value);


        //conditions for calculation            
        const sum = (parseFloat((parseFloat(ceilingArea.value) * (parseFloat(innerTemperature.value) - parseFloat(cityTemperature.value))) /
            (

            (parseFloat((firstCeilingLayerThicknessValue * 0.01) / firstMaterialsCeilingLayerValue)
                + parseFloat((secondCeilingLayerThicknessValue * 0.01) / secondMaterialsCeilingLayerValue)
                + parseFloat((thirdCeilingLayerThicknessValue * 0.01) / thirdMaterialsCeilingLayerValue)
                    + parseFloat(1 / 8.7)
                    + parseFloat(1 / ceilingType.value)) * 1000
            ))).toFixed(2);
        resultCeilingButtonText.style.padding = "5px";
        resultCeilingButtonText.textContent = `${sum} кВт`;
        resultCeilingButtonTextBottom.textContent = `${sum} кВт`;
        ceilingButtonErrorMessage.textContent = "";
        updateSum();

    } else {


        ceilingButtonErrorMessage.textContent = "Заповніть хоча б один шар стіни";
        resultCeilingButtonText.style.padding = "0";
        resultCeilingButtonText.textContent = "";
        resultCeilingButtonTextBottom.textContent = "";
    }

});

ceilingArea.addEventListener("input", function () {
    this.classList.remove("error");
});

firstMaterialsCeilingLayer.addEventListener("input", function () {
    this.classList.remove("error");
});
firstCeilingLayerThickness.addEventListener("input", function () {
    this.classList.remove("error");
});
secondMaterialsCeilingLayer.addEventListener("input", function () {
    this.classList.remove("error");
});
secondCeilingLayerThickness.addEventListener("input", function () {
    this.classList.remove("error");
});
thirdMaterialsCeilingLayer.addEventListener("input", function () {
    this.classList.remove("error");
});
thirdCeilingLayerThickness.addEventListener("input", function () {
    this.classList.remove("error");
});