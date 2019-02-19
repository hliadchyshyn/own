function factorial(n) {
    // return n ? n * factorial(n - 1) : 1;
    let k = 1;
    while (n != 1) {
        k = k * n;
        n--;
    }
    return k;

}
function checkSimpleNumber(num){
    while (isNaN(Number (num))|| num === null || num < 0){
        num = prompt('Enter correct number', num);
    }
    return Number(num);
}

let num = checkSimpleNumber (prompt('Enter your number',''));
alert('Factorial of number '+num +' = '+factorial(num) );