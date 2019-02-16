function askTwoNumbers() {
// ///////////////////////////WITH INTERACTION////////////////////////////////

    let start = Number(prompt("Enter numer start", "0")); //спрашиваем число С которого
    let finish = Number(prompt("Enter numer finish", "10")); //спрашиваем число ДО которого

    /////////////////////DUMMY USER CHECKING START//////////////////////
    while ((start >= finish) ||  (isNaN(start) || isNaN(finish))){ //до тех пор, пока пользователь вводит не корректные данные
        start = Number(prompt("Enter correct start number ")); //переприсваиваем в переменную start новое значение, которое введет пользователь
        finish = Number(prompt("Enter correct finish number "));//переприсваиваем в переменную finish новое значение, которое введет пользователь
    }
    return{
        outerStart:start,
        outerFinish:finish,
    }
}
/////////////////////DUMMY USER CHECKING END//////////////////////
function askMeAgain(start, finish) {

    let number = Number(prompt("Enter number", "2")); //спрашиваем число кратные которого нужно вывести в консоль

    for (start /*переменная-бегунок которая будет изменяться на каждой итерации*/;
         start <= finish /*условие, которое на каждой итерации будет проверяться на истинность*/;
         start++ /*то КАК будет изменяться переменная-бегунок*/) {

        if (start % number === 0) {
            console.log('Number:', start)
        }
    }
}

do{
    let twoNumber = askTwoNumbers();
    askMeAgain(twoNumber.outerStart,twoNumber.outerFinish);
} while (confirm('Do you wanna to try again?'))

