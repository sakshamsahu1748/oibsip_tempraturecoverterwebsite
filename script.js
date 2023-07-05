function convertTemperature() {
  const inputTemp = parseFloat(document.getElementById("inputTemp").value);
  const inputUnit = document.getElementById("inputUnit").value;
  let outputTemp;

  if (inputUnit === "celsius") {
    outputTemp = (inputTemp * 9/5) + 32;
  } else {
    outputTemp = (inputTemp - 32) * 5/9;
  }

  document.getElementById("output").innerText = `Converted Temperature: ${outputTemp.toFixed(2)} ${inputUnit === "celsius" ? "Fahrenheit" : "Celsius"}`;
}
