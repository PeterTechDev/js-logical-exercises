
const input1 = document.querySelector("#js-input1");

const result = document.querySelector("#js-result");

function convertFahrenheitToCelsius(valueInFahrenheit) {
  valueInCelsius = (5 * (valueInFahrenheit - 32)) / 9;

  return valueInCelsius;
}

function submit() {
  result.innerHTML = convertFahrenheitToCelsius(input1.value);
}
