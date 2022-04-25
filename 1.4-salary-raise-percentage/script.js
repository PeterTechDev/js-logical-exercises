
const input1 = document.querySelector("#js-input1");
const input2 = document.querySelector("#js-input2");

const result = document.querySelector('#js-result'); 

function raiseSalary(salary, raise) {
  raise = (raise / 100);
  
  let newSalary = salary + (raise * salary);

  return newSalary;
}


console.log(raiseSalary(2000, 10))

function getValues() {
  raiseSalary(parseInt(input1.value), parseInt(input2.value)); 
  console.log(input1.value, input2.value);

}

function submit() {
  result.innerHTML = getValues();
}

//TODO: Criar um objeto!