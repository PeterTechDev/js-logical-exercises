
const input1 = document.querySelector(".js-input1");

const result = document.querySelector(".js-result");


function verifyLeapYear(year) {
  let result = (year % 4 == 0) ? 'é' : 'não é';

  let leapYear = `O ano ${year} ${result} bisexto`;

  return leapYear;
}

verifyLeapYear(2022)

function submit() {
  result.classList.add('active')
  result.innerHTML = verifyLeapYear(input1.value);
}

//TODO: Implement test to no allow empty values