
const input1 = document.querySelector("#js-input1");

const result = document.querySelector("#js-result");

function convertCelsiusToFahrenheit (valueInCelsius) {
  valueInsFahrenheit = (9 * (valueInCelsius / 5)) + 32;

  return valueInsFahrenheit;
}

function submit() {
  result.innerHTML = convertCelsiusToFahrenheit(input1.value);
}
