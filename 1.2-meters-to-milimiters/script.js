
const input1 = document.querySelector("#js-input1");
const result = document.querySelector('#js-result');

function convertInMillimeters(valueInMeters) {
  return valueInMeters * 1000;
}

function getValues() {
  return convertInMillimeters(input1.value);
}

function submit() {
  result.innerHTML = getValues();
}
