
const input1 = document.querySelector(".js-input1");

const result = document.querySelector(".js-result");


function checkFee(fishWeight) {
  let feeCost = 0;
  let result = 'Não há multa';
  
  if (fishWeight >= 50) {
    feeCost = calcFee(fishWeight - 50);
    result = `R$ ${feeCost},00`;
  } 

  return result;
}

function calcFee (surplus) {
  surplus = surplus * 4;

  return surplus
}

function submit() {
  result.classList.add('active')
  result.innerHTML = checkFee(input1.value);
}

//TODO: Implement test to no allow empty values