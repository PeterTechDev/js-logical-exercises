
const input1 = document.querySelector(".js-input1");
const input2 = document.querySelector(".js-input2");
const input3 = document.querySelector(".js-input3");

const result = document.querySelector(".js-result");


function checkHighestNumber(numberA, numberB, numberC) {
  let numbers = [numberA, numberB, numberC];

  let highestNumber = Math.max(...numbers);

  console.log(highestNumber);

  return highestNumber;
}

function submit() {
  result.classList.add('active')
  result.innerHTML = checkHighestNumber(input1.value, input2.value, input3.value);
}

//TODO: Implement test to no allow empty values