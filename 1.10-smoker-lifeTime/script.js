
const input1 = document.querySelector("#js-input1");
const input2 = document.querySelector("#js-input2");

const result = document.querySelector("#js-result");

function calcDaysGone(cigarettesPerDay, yearsSmoke) {
  const minutesLostPerCigarette = 10;
  const minutesPerDay = 1440;

  yearsSmoke = yearsSmoke * 365;

  let totalCigarettes = cigarettesPerDay * yearsSmoke ;

  let daysLost = parseInt((totalCigarettes * minutesLostPerCigarette) / minutesPerDay);
  
  return daysLost;
}

function submit() {
  result.innerHTML = calcDaysGone(input1.value, input2.value);
}
