var infiltrArea = document.getElementById("infiltrArea");

var parentInfiltrLayer = document.getElementById("parentInfiltrLayer");
var plusMinusButtonInfiltr = document.getElementById("plusMinusButtonInfiltr");

var resultInfiltrButton = document.getElementById("resultInfiltrButton");
var resultInfiltrButtonText = document.getElementById("resultInfiltrButtonText");
var resultInfiltrButtonTextBottom = document.getElementById("resultInfiltrButtonTextBottom");


function toggleParentInfiltrForm() {
    if (parentInfiltrLayer.style.display === "none" && plusMinusButtonInfiltr.innerHTML === "+") {
        parentInfiltrLayer.style.display = "block";
        plusMinusButtonInfiltr.innerHTML = "-";
    } else {
        parentInfiltrLayer.style.display = "none";
        plusMinusButtonInfiltr.innerHTML = "+";
    }
}


//Validation
resultInfiltrButton.addEventListener('click', function () {

    if (cityTemperature.value === "" || innerTemperature.value === "" || infiltrArea.value === "") {

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
        if (infiltrArea.value === "") {
            infiltrArea.classList.add("error");
        } else {
            infiltrArea.classList.remove("error");
        }
    }

    if (cityTemperature.classList.contains("error") || innerTemperature.classList.contains("error") || infiltrArea.classList.contains("error")) {
        infiltrButtonErrorMessage.textContent = "Заповніть поля виділені червоним кольором";
        resultInfiltrButtonText.textContent = "";
        resultInfiltrButtonTextBottom.textContent = "";
        resultInfiltrButtonText.style.padding = "0";

        return;
    } else {


        const sum = ((0.28 * 3 * parseFloat(infiltrArea.value) * 1.1 * (parseFloat(innerTemperature.value) - parseFloat(cityTemperature.value))) / 1000).toFixed(2);
       
        resultInfiltrButtonText.style.padding = "5px";
        resultInfiltrButtonText.textContent = `${sum} кВт`;
        resultInfiltrButtonTextBottom.textContent = `${sum} кВт`;
        infiltrButtonErrorMessage.textContent = "";
        updateSum();
    }
});

infiltrArea.addEventListener("input", function () {
    this.classList.remove("error");
});


