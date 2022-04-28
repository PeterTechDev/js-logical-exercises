
const input1 = document.querySelector("#js-input1");
const input2 = document.querySelector("#js-input2");

const result = document.querySelector("#js-result");

function calcCarRental(daysRented, totalKilometers) {
  let pricePerDay = 60;
  let pricePerKilometers = 0.15;

  let rentalValue = (pricePerDay * daysRented) + (pricePerKilometers * totalKilometers);

  return rentalValue;
}

function submit() {
  result.innerHTML = calcCarRental(input1.value, input2.value);
}
