function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}
function checkSimpleNumber(num){
    while (isNaN(Number (num))|| num === null || num < 0){
        num = prompt('Enter correct start check number', num);
    }
    return Number(num);
}

let num = checkSimpleNumber (prompt('Enter your number',''));
alert( factorial(num) );