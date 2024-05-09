

let display =
document.getElementById('diplay');

function press(num) {
    if (num === "=") {
        display.value =
        eval(display.value);
    } else {
        display.value += num;
    }
}