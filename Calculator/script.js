let displayValue = '0';
let operator = '';
let firstOperand = '';
let waitingForSecondOperand = false;

function appendToDisplay(value) {
    if (waitingForSecondOperand) {
        displayValue = value;
        waitingForSecondOperand = false;
    } else {
        displayValue = displayValue === '0' ? value : displayValue + value;
    }
    updateDisplay();
}

function appendOperator(op) {
    if (waitingForSecondOperand) {
        operator = op;
    } else {
        calculate();
        operator = op;
        waitingForSecondOperand = true;
    }
}

function appendDecimal() {
    if (waitingForSecondOperand) {
        displayValue = '0.';
        waitingForSecondOperand = false;
    } else if (!displayValue.includes('.')) {
        displayValue += '.';
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    operator = '';
    firstOperand = '';
    waitingForSecondOperand = false;
    updateDisplay();
}

function calculate() {
    const currentOperand = parseFloat(displayValue);

    if (firstOperand !== '' && operator !== '') {
        switch (operator) {
            case '+':
                displayValue = (parseFloat(firstOperand) + currentOperand).toString();
                break;
            case '-':
                displayValue = (parseFloat(firstOperand) - currentOperand).toString();
                break;
            case '*':
                displayValue = (parseFloat(firstOperand) * currentOperand).toString();
                break;
            case '/':
                if (currentOperand !== 0) {
                    displayValue = (parseFloat(firstOperand) / currentOperand).toString();
                } else {
                    displayValue = 'Error';
                }
                break;
            default:
                break;
        }
        operator = '';
        waitingForSecondOperand = true;
        firstOperand = displayValue;
        updateDisplay();
    } else {
        firstOperand = displayValue;
        waitingForSecondOperand = true;
    }
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = displayValue;
}