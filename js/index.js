//Calculator
const display = document.querySelector('.calculator .display')

document.querySelectorAll('.digits button').forEach( digit => digit.addEventListener('click', digitPressed))

function digitPressed(ev) {
    display.value += ev.target.innerText;
}

document.querySelectorAll('.opers button').forEach( oper => oper.addEventListener('click', operPressed))


function operPressed(ev) {
    display.value += ev.target.innerText;
//    if
}

document.querySelector('.equal').addEventListener('click', equalPressed);

function equalPressed() {
    display.value = eval(display.value)

    if (display.value === "Infinity") {
        alert("None");
        display.value = "";
    }
}

document.querySelector('.clean').addEventListener('click', resetPressed);

function resetPressed() {
    display.value = "";
}