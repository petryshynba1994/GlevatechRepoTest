//General
var cityTemperatureDropdownList = document.getElementById("city");
var cityTemperature = document.getElementById("cityTemperature");
var innerTemperature = document.getElementById("innerTemperature");



var generalHeatLossResult = document.getElementById("generalHeatLossResult");

//put value from dropdownlist 'city' into input 'cityTemperature'
cityTemperatureDropdownList.addEventListener('change', function () {
    var selectedCity = cityTemperatureDropdownList.options[cityTemperatureDropdownList.selectedIndex];
    var selectedTemperature = selectedCity.value;
    cityTemperature.value = selectedTemperature;
    cityTemperature.classList.remove("error");
});
//calculate wall heat loss

cityTemperature.addEventListener("change", function () {
    if (cityTemperature.value !== "") {
        this.classList.remove("error");
    }
    generalHeatLossResult.textContent = cityTemperature.value;
});
innerTemperature.addEventListener("input", function () {
    this.classList.remove("error");
});





function updateSum() {
    const num1 = resultWallButtonTextBottom.textContent === "" ? 0 : parseFloat(resultWallButtonTextBottom.textContent.slice(0, -4));
    const num2 = resultFloorButtonTextBottom.textContent === "" ? 0 : parseFloat(resultFloorButtonTextBottom.textContent.slice(0, -4));
    const num3 = resultWindowButtonTextBottom.textContent === "" ? 0 : parseFloat(resultWindowButtonTextBottom.textContent.slice(0, -4));
    const num4 = resultCeilingButtonTextBottom.textContent === "" ? 0 : parseFloat(resultCeilingButtonTextBottom.textContent.slice(0, -4));
    const num5 = resultInfiltrButtonTextBottom.textContent === "" ? 0 : parseFloat(resultInfiltrButtonTextBottom.textContent.slice(0, -4));
    if (num1 === 0 && num2 === 0 && num3 === 0 && num4 === 0 && num5 === 0) {
        generalHeatLossResult.textContent = "";
    } else {

        const sum = parseFloat(num1 + num2 + num3 + num4 + num5).toFixed(2);
        generalHeatLossResult.textContent = `${sum} кВт`;
    }
}
