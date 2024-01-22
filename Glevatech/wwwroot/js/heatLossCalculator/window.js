var firstMaterialsWindowLayer = document.getElementById("firstMaterialsWindowLayer");
var secondMaterialsWindowLayer = document.getElementById("secondMaterialsWindowLayer");
var thirdMaterialsWindowLayer = document.getElementById("thirdMaterialsWindowLayer");
var firstWindowArea = document.getElementById("firstWindowArea");
var secondWindowArea = document.getElementById("secondWindowArea");
var thirdWindowArea = document.getElementById("thirdWindowArea");

var parentWindowLayer = document.getElementById("parentWindowLayer");
var firstWindowLayer = document.getElementById("firstWindowLayer");
var secondWindowLayer = document.getElementById("secondWindowLayer");
var thirdWindowLayer = document.getElementById("thirdWindowLayer");
var plusMinusWindowButton = document.getElementById("plusMinusWindowButton");
var plusMinusButton1WindowLayer = document.getElementById("plusMinusButton1WindowLayer");
var plusMinusButton2WindowLayer = document.getElementById("plusMinusButton2WindowLayer");
var plusMinusButton3WindowLayer = document.getElementById("plusMinusButton3WindowLayer");

var resultWindowButton = document.getElementById("resultWindowButton");
var resultWindowButtonText = document.getElementById("resultWindowButtonText");
var resultWindowButtonTextBottom = document.getElementById("resultWindowButtonTextBottom");

function toggleParentWindowForm() {
    if (parentWindowLayer.style.display === "none" && plusMinusWindowButton.innerHTML === "+") {
        parentWindowLayer.style.display = "block";
        plusMinusWindowButton.innerHTML = "-";
    } else {
        parentWindowLayer.style.display = "none";
        plusMinusWindowButton.innerHTML = "+";
    }
}
function toggle1WindowForm() {
    if (firstWindowLayer.style.display === "none" && plusMinusButton1WindowLayer.innerHTML === "+") {
        firstWindowLayer.style.display = "block";
        plusMinusButton1WindowLayer.innerHTML = "-";
        firstMaterialsWindowLayer.selectedIndex = 0;
        firstWindowArea.value = "";
    } else {
        firstWindowLayer.style.display = "none";
        plusMinusButton1WindowLayer.innerHTML = "+";
        firstMaterialsWindowLayer.selectedIndex = 0;
        firstWindowArea.value = 0;
        firstMaterialsWindowLayer.classList.remove("error");
        firstWindowArea.classList.remove("error");
    }
}
function toggle2WindowForm() {
    if (secondWindowLayer.style.display === "none" && plusMinusButton2WindowLayer.innerHTML === "+") {
        secondWindowLayer.style.display = "block";
        plusMinusButton2WindowLayer.innerHTML = "-";
        secondMaterialsWindowLayer.selectedIndex = 0;
        secondWindowArea.value = "";
    } else {
        secondWindowLayer.style.display = "none";
        plusMinusButton2WindowLayer.innerHTML = "+";
        secondMaterialsWindowLayer.selectedIndex = 0;
        
        secondWindowArea.value = 0;
        secondMaterialsWindowLayer.classList.remove("error");
        secondWindowArea.classList.remove("error");
    }
}
function toggle3WindowForm() {
    if (thirdWindowLayer.style.display === "none" && plusMinusButton3WindowLayer.innerHTML === "+") {
        thirdWindowLayer.style.display = "block";
        plusMinusButton3WindowLayer.innerHTML = "-";
        thirdMaterialsWindowLayer.selectedIndex = 0;
        thirdWindowArea.value = "";
    } else {
        thirdWindowLayer.style.display = "none";
        plusMinusButton3WindowLayer.innerHTML = "+";
        thirdMaterialsWindowLayer.selectedIndex = 0;
        thirdWindowArea.value = 0;
        thirdMaterialsWindowLayer.classList.remove("error");
        thirdWindowArea.classList.remove("error");
    }
}


//Validation
resultWindowButton.addEventListener('click', function () {

    if (window.getComputedStyle(firstWindowLayer).display === "block" || window.getComputedStyle(secondWindowLayer).display === "block" ||
        window.getComputedStyle(thirdWindowLayer).display === "block" || cityTemperature.value === "" || innerTemperature.value === "" ) {

        if (cityTemperature.value === "" || innerTemperature.value === "" ) {
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

        }
        if (window.getComputedStyle(firstWindowLayer).display === "block") {


            if (firstWindowArea.value === "") {
                firstWindowArea.classList.add("error");
            } else {
                firstWindowArea.classList.remove("error");
            }
        }



        if (window.getComputedStyle(secondWindowLayer).display === "block") {


            if (secondWindowArea.value === "") {
                secondWindowArea.classList.add("error");
            } else {
                secondWindowArea.classList.remove("error");
            }
        }

        if (window.getComputedStyle(thirdWindowLayer).display === "block") {

            if (thirdWindowArea.value === "") {
                thirdWindowArea.classList.add("error");
            } else {
                thirdWindowArea.classList.remove("error");
            }
        }

        if (cityTemperature.classList.contains("error") || innerTemperature.classList.contains("error") || 
             firstWindowArea.classList.contains("error") || secondWindowArea.classList.contains("error") ||
             thirdWindowArea.classList.contains("error")) {
            windowButtonErrorMessage.textContent = "Заповніть поля виділені червоним кольором";
            resultWindowButtonText.textContent = "";
            resultWindowButtonTextBottom.textContent = "";
            return;
        }
        var firstMaterialsWindowLayerValue = firstMaterialsWindowLayer.value === "" ? 0 : parseFloat(firstMaterialsWindowLayer.value);
        var secondMaterialsWindowLayerValue = secondMaterialsWindowLayer.value === "" ? 0 : parseFloat(secondMaterialsWindowLayer.value);
        var thirdMaterialsWindowLayerValue = thirdMaterialsWindowLayer.value === "" ? 0 : parseFloat(thirdMaterialsWindowLayer.value);
        var firstWindowAreaValue = firstWindowArea.value === "" ? 0 : parseFloat(firstWindowArea.value);
        var secondWindowAreaValue = secondWindowArea.value === "" ? 0 : parseInt(secondWindowArea.value);
        var thirdWindowAreaValue = thirdWindowArea.value === "" ? 0 : parseInt(thirdWindowArea.value);
        if (window.getComputedStyle(firstWindowLayer).display === "none") {
            firstWindowAreaValue = 0;
        }
        if (window.getComputedStyle(secondWindowLayer).display === "none") {
            secondWindowAreaValue = 0;
        }
        if (window.getComputedStyle(thirdWindowLayer).display === "none") {
            thirdWindowAreaValue = 0;
        }

        //conditions for calculation            
        const sum = ((parseFloat(innerTemperature.value) - parseFloat(cityTemperature.value)) *
                    (
                        (parseFloat(firstWindowAreaValue) / parseFloat(firstMaterialsWindowLayerValue * 0.01)) +
                        (parseFloat(secondWindowAreaValue) / parseFloat(secondMaterialsWindowLayerValue * 0.01)) +
                        (parseFloat(thirdWindowAreaValue) / parseFloat(thirdMaterialsWindowLayerValue * 0.01))
                    ) / 1000).toFixed(2);

            
        resultWindowButtonText.style.padding = "5px";
        resultWindowButtonText.textContent = `${sum} кВт`;
        resultWindowButtonTextBottom.textContent = `${sum} кВт`;
        windowButtonErrorMessage.textContent = "";
        updateSum();
    } else {

        resultWindowButtonText.style.padding = "0";
        windowButtonErrorMessage.textContent = "Заповніть хоча б один тип вікон";
        resultWindowButtonText.textContent = "";
        resultWindowButtonTextBottom.textContent = "";
    }

});



firstWindowArea.addEventListener("input", function () {
    this.classList.remove("error");
});
secondWindowArea.addEventListener("input", function () {
    this.classList.remove("error");
});
thirdWindowArea.addEventListener("input", function () {
    this.classList.remove("error");
});

