function convertTemperature() {
    const inputTemp = document.getElementById("inputTemp").value;
    const inputUnit = document.getElementById("inputUnit").value;

    let celsius, fahrenheit, kelvin;

    if (inputUnit === "celsius") {
        celsius = parseFloat(inputTemp);
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = celsius + 273.15;
    } else if (inputUnit === "fahrenheit") {
        fahrenheit = parseFloat(inputTemp);
        celsius = (fahrenheit - 32) * 5/9;
        kelvin = celsius + 273.15;
    } else if (inputUnit === "kelvin") {
        kelvin = parseFloat(inputTemp);
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
    }

    // Display results
    document.getElementById("fahrenheitResult").innerText = fahrenheit.toFixed(2);
    document.getElementById("celsiusResult").innerText = celsius.toFixed(2);
    document.getElementById("kelvinResult").innerText = kelvin.toFixed(2);
}
