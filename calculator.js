
function sum() {
    let number1, number2, result;
    number1 = document.getElementById('number1').value;
    number2 = document.getElementById('number2').value;
    result = Number(number1) + Number(number2);
    document.getElementById('result').innerHTML = result;
}

function subtraction() {
    let number1, number2, result;
    number1 = document.getElementById('number1').value;
    number2 = document.getElementById('number2').value;
    result = Number(number1) - Number(number2);
    document.getElementById('result').innerHTML = result;
}

function division() {
    let number1, number2, result;
    number1 = document.getElementById('number1').value;
    number2 = document.getElementById('number2').value;
    if(number2=='0') {
        alert('На ноль делить нельзя!')
    }
    result = Number(number1) / Number(number2);
    document.getElementById('result').innerHTML = result;
}

function multiplication() {
    let number1, number2, result;
    number1 = document.getElementById('number1').value;
    number2 = document.getElementById('number2').value;
    result = Number(number1) * Number(number2);
    document.getElementById('result').innerHTML = result;
}

/* function check() {
    let number2 = document.getElementById('number2').value;
    if(number2=='0') {
        alert('На ноль делить нельзя!')
    }
} */