let displayValue = '';

function appendValue(str) {
    displayValue += str;
    document.display.result.value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.display.result.value = '';
}

function calculate() {
    try {
        if (displayValue.includes('^')) {
            const parts = displayValue.split('^');
            if (parts.length === 2) {
                const base = eval(parts[0]);
                const exponent = eval(parts[1]);
                displayValue = Math.pow(base, exponent).toString();
            } else {
                throw new Error("Invalid exponentiation format");
            }
        } else {
            displayValue = eval(displayValue).toString();
        }
        document.display.result.value = displayValue;
    } catch (e) {
        document.display.result.value = 'Error';
    }
}

function trigFunction(operation) {
    const n = parseInt(displayValue);
    const rad = n * (Math.PI / 180);
    switch (operation) {
        case 'sin':
            displayValue = Math.sin(rad).toString();
            break;
        case 'cos':
            displayValue = Math.cos(rad).toString();
            break;
        case 'tan':
            displayValue = Math.tan(rad).toString();
            break;
        default:
            break;
    }
    document.display.result.value = displayValue;
}

function mathFunction(operation) {
    switch (operation) {
        case 'sqrt':
            displayValue = Math.sqrt(parseFloat(displayValue)).toString();
            break;
        case 'log':
            displayValue = Math.log(parseFloat(displayValue)).toString();
            break;
        case 'square':
            displayValue = Math.pow(parseFloat(displayValue), 2).toString();
            break;
        case 'pie':
            displayValue+='3.14'
            document.display.result.value=displayValue;
            break;
        default:
            break;
    }
    document.display.result.value = displayValue;
}
