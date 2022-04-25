
const input1 = document.querySelector("#js-input1");
const input2 = document.querySelector('#js-input2');
const result = document.querySelector('#js-result');

function sumNumbers() {
  return Number(input1.value) + Number(input2.value);
}

function submit() {
  result.innerHTML = sumNumbers();
}
