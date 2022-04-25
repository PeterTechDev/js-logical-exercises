
const input1 = document.querySelector("#js-input1");
const input2 = document.querySelector("#js-input2");

const result = document.querySelector("#js-result");

function calcEstimateTime (speed, time) {
  let result = speed / time;

  return result;
}

function submit() {
  result.innerHTML = calcEstimateTime(input1.value, input2.value);
}
