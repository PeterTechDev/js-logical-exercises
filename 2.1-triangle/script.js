
const input1 = document.querySelector(".js-input1");
const input2 = document.querySelector(".js-input2");
const input3 = document.querySelector(".js-input3");

const result = document.querySelector(".js-result");


function calcTriangle(sideA, sideB, sideC) {
  let result = 'Não é um triângulo'

  if(sideA == sideB && sideA == sideB && sideC == sideB){
    result ='Equilatero';
  }else if(sideA != sideB && sideA != sideC && sideB != sideC){
    result ='Escaleno';
  }else{
    result ='Isoceles';
  }

  return result;
}

function submit() {
  result.classList.add('active')
  result.innerHTML = calcTriangle(input1.value, input2.value, input3.value);
}

//TODO: Implement test to no allow empty values