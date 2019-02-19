let propSize = {
    SMALL: {
        price: 15,
        cal: 250,
    },
    LARGE: {
        price: 25,
        cal: 340,
    },
};
let propStuff = {
    CHEESE: {
        price: 4,
        cal: 25,
    },
    SALAD: {
        price: 5,
        cal: 5,
    },
    BEEF: {
        price: 10,
        cal: 50
    },
};
let burger = {
    addResult: ({size, stuffing})=>{

        let resPrice =0;
        let resCal=0;

        resPrice += propSize[size].price;
        resCal += propStuff[stuffing].price;
        resPrice += propSize[size].cal;
        resCal += propStuff[stuffing].cal;

        return {price: resPrice, cal:resCal};
    },

    validation: (sizeToValidate, stuffingToValidate)=>{
        while ((sizeToValidate === null || sizeToValidate ==="" ) || (stuffingToValidate === null || stuffingToValidate ==="" ) || !(sizeToValidate.toUpperCase() in propSize) || !(stuffingToValidate.toUpperCase() in propStuff)) {
            if (sizeToValidate === null || sizeToValidate ===""  || !(sizeToValidate.toUpperCase() in propSize)) {
                sizeToValidate = prompt('Enter correct burger size', '');
            } else {
                stuffingToValidate = prompt('Enter correct burger stuffing', '');

            }
        }


        return {size:sizeToValidate.toUpperCase(), stuffing:stuffingToValidate.toUpperCase()};
    },

    getBurgerPrice: ()=>{
        let burgerProps = {size: prompt('Enter  burger size', 'SMALL or LARGE'), stuffing: prompt('Enter  burger stuffing', 'CHEESE or SALAD or BEEF')};
        let CorrectSizeStuffing = burger.validation(...burgerProps);
        let total = burger.addResult(CorrectSizeStuffing);
        return console.log (`Total price: ${total.price}, Total cal:${total.cal}`);

    },
};


burger.getBurgerPrice ();



