
const input1 = document.querySelector("#js-input1");
const input2 = document.querySelector("#js-input2");
const input3 = document.querySelector("#js-input3");
const input4 = document.querySelector("#js-input4");
const result = document.querySelector('#js-result');

function convertInSeconds(day, hour, minute, second) {
  day = day * 24 * (60 * 60);
  hour = hour * (60 * 60);
  minute = minute * 60;
  second = Number();

  console.log(day, hour, minute, second)

  return day + hour + minute + second;
}

console.log(convertInSeconds(2, 2, 2, 2))


function getValues() {
  return convertInSeconds(input1.value, input2.value, input3.value, Number(input4.value)); 
}

function submit() {
  result.innerHTML = getValues();
}

//TODO: Criar um objeto!