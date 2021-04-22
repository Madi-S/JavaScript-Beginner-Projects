
const button = document.querySelector('#calculateButton');
button.addEventListener('click', main)


function numsValidated (num1, num2) {
    if (!num1 || !num2) {
        alert('Please enter only numbers');
        return false;
    }
    return true;
}


function getOperator () {
    var radioButtons = document.getElementsByName('operator');
      
    for(const radioButton of radioButtons) {
        if (radioButton.checked) { 
            return radioButton.value;
        }
    }
}


function calculate (num1, num2, operator) {
    if (operator === '*'){
        return num1 * num2;
    } else if (operator === '/') {
        return num1 / num2;
    } else if (operator === '+') {
        return num1 + num2;
    } else {
        return num1 - num2;
    }
    // eval(a+operator+b)
}


function main () {
    const num1 = Number(document.querySelector('#firstNumber').value);
    const num2 = Number(document.querySelector('#secondNumber').value);
    if (numsValidated(num1, num2)) {
        operator = getOperator();
        result = calculate(num1, num2, operator);

        const output = document.querySelector('#output');
        output.value = result;
    }
}

// setInterval(
//     () => {
//         console.log(firstNumber, secondNumber);
//     }, 1000
// )