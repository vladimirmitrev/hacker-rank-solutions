const res = document.getElementById('res');
const btns = document.querySelectorAll('#btns button');

let currentInput = '';
let operator = '';

function updateResult() {
    res.textContent = currentInput;
}

function clear() {
    currentInput = '';
    operator = '';
    updateResult();
}

function calculate() {
    const operands = currentInput.split(operator);
    const num1 = parseInt(operands[0], 2);
    const num2 = parseInt(operands[1], 2);

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = Math.floor(num1 / num2);
            break;
        default:
            return;
    }

    currentInput = result.toString(2);
    updateResult();
}

btns.forEach(button => {
    button.addEventListener('click', () => {
        switch (button.id) {
            case 'btn0':
            case 'btn1':
                currentInput += button.textContent;
                updateResult();
                break;
            case 'btnClr':
                clear();
                break;
            case 'btnEql':
                calculate();
                break;
            case 'btnSum':
            case 'btnSub':
            case 'btnMul':
            case 'btnDiv':
                if (currentInput !== '') {
                    operator = button.textContent;
                    currentInput += operator;
                    updateResult();
                }
                break;
        }
    });
});