const number2Input = document.getElementById('number2');
const resultInput = document.getElementById('result');

number2Input.addEventListener('input', updateResult);

function updateResult() {
    const number2 = parseFloat(number2Input.value);
    const result = 50 * number2;
    resultInput.value = isNaN(result) ? '' : result;
  }