const numdisplay = document.querySelector('.num-display');
let currentValue = '';
let operator = '';
let operand1 = null;
let operand2 = null;

const digits = document.querySelectorAll('.digit');
digits.forEach(button => {
    button.addEventListener('click', () => {
        currentValue += button.textContent;
        numdisplay.textContent = currentValue;
    });
});

const operations = document.querySelectorAll('.operation');
operations.forEach(button => {
    button.addEventListener('click', () => {
        if (operand1 === null) {
            operand1 = parseFloat(currentValue);
        } else if (currentValue !== '') {
            operand2 = parseFloat(currentValue);
        }
        operator = button.dataset.op;
        currentValue = '';
        numdisplay.textContent = '0';
    });
});

document.querySelector('.equals').addEventListener('click', () => {
    if (currentValue !== '') {
        operand2 = parseFloat(currentValue);
        operate();
    }
});

document.querySelector('.percent').addEventListener('click', () => {
    if(operand1 === null){
        operand1 = parseFloat(currentValue) * 100; 
    }
    currentValue = '';
    numdisplay.textContent = operand1;
})

function operate() {
    if (operand1 !== null && operand2 !== null) {
        let result;
        switch (operator) {
            case 'plus':
                result = add(operand1, operand2);
                break;
            case 'minus':
                result = subtract(operand1, operand2);
                break;
            case 'times':
                result = multiply(operand1, operand2);
                break;
            case 'divide':
                result = divide(operand1, operand2);
                break;
        }

        numdisplay.textContent = result;
        operand1 = result;
        operand2 = null;
        currentValue = '';
    }
};

function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

document.querySelector('.clear').addEventListener('click', () => {
    currentValue = '';
    operator = '';
    operand1 = null;
    operand2 = null;
    numdisplay.textContent = '0';
});
