function fib(F0,F1,n) {
    for (let i = 3; i<=n; i++){
        let c = F0+F1;
        F0=F1;
        F1=c;
    }
    return F1;
}

function checkSimpleNumber(num){
    while (isNaN(Number (num))|| num === null || num < 0){
        num = prompt('Enter correct number', num);
    }
    return Number(num);
}

let start =  checkSimpleNumber (prompt('Enter range start number',''));
let finish =  checkSimpleNumber (prompt('Enter range end number',''));
let num = Number (prompt('Enter Fibonacci sequence number',''));
while (isNaN(Number (num))|| num === null ){
    num = Number (prompt('Enter Fibonacci sequence number',''));
}

alert('Fibonacci number in this sequence: '+fib(start, finish, num));
