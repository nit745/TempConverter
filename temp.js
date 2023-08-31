document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.getElementById("convertButton");
    const inputTemperature = document.getElementById("inputTemperature");
    const fromUnit = document.getElementById("fromUnit");
    const toUnit = document.getElementById("toUnit");
    const result = document.getElementById("result");

    convertButton.addEventListener("click", function () {
        const temperature = parseFloat(inputTemperature.value);
        const from = fromUnit.value;
        const to = toUnit.value;

        if (isNaN(temperature)) {
            result.textContent = "Please enter a valid temperature.";
            return;
        }

        let convertedTemperature;

        if (from === "celsius") {
            if (to === "fahrenheit") {
                convertedTemperature = (temperature * 9/5) + 32;
            } else if (to === "kelvin") {
                convertedTemperature = temperature + 273.15;
            } else {
                convertedTemperature = temperature;
            }
        } else if (from === "fahrenheit") {
            if (to === "celsius") {
                convertedTemperature = (temperature - 32) * 5/9;
            } else if (to === "kelvin") {
                convertedTemperature = (temperature - 32) * 5/9 + 273.15;
            } else {
                convertedTemperature = temperature;
            }
        } else if (from === "kelvin") {
            if (to === "celsius") {
                convertedTemperature = temperature - 273.15;
            } else if (to === "fahrenheit") {
                convertedTemperature = (temperature - 273.15) * 9/5 + 32;
            } else {
                convertedTemperature = temperature;
            }
        }

        result.textContent = `${temperature.toFixed(2)} ${from} is ${convertedTemperature.toFixed(2)} ${to}.`;
    });
});
