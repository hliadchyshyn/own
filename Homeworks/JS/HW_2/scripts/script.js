function checkSimpleNumber(num){
    while (isNaN(Number (num))|| num === null || num < 1){
        num = prompt('Enter correct start check number', num);
    }
    return Number(num);
}

function compareNums (num1, num2){
    if (num1 >= num2){
        return {bigger:num1, smaller:num2};
    } else {
        return {bigger:num2, smaller:num1}
    }
}
function isNatural(num) {
    if(num < 2) {
        return false
    }
    for (let i = 2; i <= num/2; i++) {
        if(num%i===0){
            return false;
        }
    }
    return true;
}

let startNumber = checkSimpleNumber (prompt('Enter your start check number',''));
let endNumber = checkSimpleNumber (prompt('Enter your end check number',''));

let compare = compareNums(startNumber, endNumber);
let i = compare.smaller;
let k = compare.bigger;

for(i; i < k; i++){
    if(isNatural(i)) console.log(i);
}
