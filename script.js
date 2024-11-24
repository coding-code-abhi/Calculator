function appendToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function backspace() {
    let currentResult = document.getElementById('result').value;
    document.getElementById('result').value = currentResult.slice(0, -1);
}

function calculateResult() {
    let currentResult = document.getElementById('result').value;
    try {
        document.getElementById('result').value = eval(currentResult);
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}


const display = document.querySelector(".display");

document.addEventListener('keydown', (event) => {
    const key = event.key;
    if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.'].includes(key)) {
        display.value += key;
    } else if (key === 'Enter') {
        try {
            display.value = eval(display.value); // Evaluate the expression
        } catch {
            display.value = 'Error';
        }
    } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1); // Remove last character
    }
});