let prop = {
    SIZE_SMALL: {
        price: 15,
        cal: 250,
    },
    SIZE_LARGE: {
        price: 25,
        cal: 340,
    },

    STUFFING_CHEESE: {
        price: 4,
        cal: 25,
    },
    STUFFING_SALAD: {
        price: 5,
        cal: 5,
    },
    STUFFING_BEEF:{
        price: 10,
        cal: 50,
    },
};

function addResult({size, stuffing}){

    let resPrice =0;
    let resCal=0;

    resPrice += prop[size].price;
    resCal += prop[stuffing].price;
    resPrice += prop[size].cal;
    resCal += prop[stuffing].cal;

    return {price: resPrice, cal:resCal};
}

function validation(sizeToValidate, stuffingToValidate) {
        while ((sizeToValidate === undefined|| sizeToValidate ==="" )|| (stuffingToValidate === undefined||stuffingToValidate ==="" )) {
            if (sizeToValidate === undefined) {
                sizeToValidate = prompt('Enter correct burger size', '');
            } else {
                stuffingToValidate = prompt('Enter correct burger stuffing', '');

            }
        }
        return {size:sizeToValidate, stuffing:stuffingToValidate};
}



function getBurgerPrice (size, stuffing) {
    let CorrectSizeStuffing = validation(size, stuffing);
    let total = addResult(CorrectSizeStuffing);
    return console.log (`Total price: ${total.price}, Total cal:${total.cal}`);

}



getBurgerPrice ((prompt('Enter  burger size', 'SIZE_SMALL or SIZE_LARGE')).toUpperCase(), (prompt('Enter  burger stuffing', 'STUFFING_CHEESE or STUFFING_SALAD or STUFFING_BEEF')).toUpperCase())



