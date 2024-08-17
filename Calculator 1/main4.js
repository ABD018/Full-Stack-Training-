function appendToDisplay(display, value) {
    display.value += value;
}

function clearToDisplay(display) {
    display.value = '';
}

function calculate(display) {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
