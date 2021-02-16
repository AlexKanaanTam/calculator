const buttonNumbers = document.getElementsByName('data-number');
const buttonOperators = document.getElementsByName('data-opera');
const buttonEqual = document.getElementsByName('data-igual')[0];
const buttonReset = document.getElementsByName('data-delete')[0];
var result = document.getElementById('result');
var opeActual = "";
var opeAnterior = "";
var operacion = undefined;


buttonNumbers.forEach(function (button) {
    button.addEventListener('click', function () {
        agregarNumero(button.innerText);
    });

});

buttonOperators.forEach(function (operator) {
    operator.addEventListener('click', function () {
        selectOperacion(operator.innerText);
    });
});

buttonEqual.addEventListener("click", function () {
    calcular();
    actualizarDisplay();
});

buttonReset.addEventListener("click", function () {
    clear();
    actualizarDisplay();
});

function agregarNumero(num) {
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
}

function clear() {
    opeActual = '';
    opeAnterior = '';
    operacion = undefined;
}

function actualizarDisplay() {
    result.value = opeActual;
}

function selectOperacion(op) {
    if (opeActual === '') return;
    if (opeActual !== '') {
        calcular()
    }
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = '';
}

function calcular() {
    var calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    if (isNaN(anterior) || isNaN(actual)) return
    switch (operacion) {
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            console.log(calculo)
            break;
        case '/':
            calculo = anterior / actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        default:
            return;
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = ''
}






