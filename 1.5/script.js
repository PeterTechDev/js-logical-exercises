
const input1 = document.querySelector("#js-input1");
const input2 = document.querySelector("#js-input2");

const result = document.querySelector("#js-result");
const $discount = document.querySelector("#js-result2");

function getDiscount (price, discount) {
  let discountValue = (price / 100) * discount;

  result.innerHTML = discountValue;
}

function calcDiscount (price, discount) {
  let result = price - ((price / 100) * discount);

  console.log(discount);
  $discount.innerHTML = result;
}


function submit() {
  getDiscount(input1.value, input2.value);
  calcDiscount(input1.value, input2.value);
}
