const SIZE_SMALL = {
    name: 'SIZE_SMALL',
    price: 15,
    cal: 250,
};

const SIZE_LARGE = {
    name: 'SIZE_LARGE',
    price: 25,
    cal: 340,
};

const STUFFING_CHEASE = {
    name: 'STUFFING_CHEASE',
    price: 4,
    cal: 25,
};

const STUFFING_SALAD = {
    name: 'STUFFING_SALAD',
    price: 5,
    cal: 5,
};

const STUFFING_BEEF = {
    name: 'STUFFING_BEEF',
    price: 10,
    cal: 50,
};

function addResult(ObjectName){
    let resPrice =0;
    let resCal=0;

    resPrice += ObjectName.price;
    resCal+=ObjectName.cal;

    return {Price: resPrice, Cal: resCal};
}

function getBurgerPrice (size, stuffing) {

    while ((size === undefined|| size ==="" )|| (stuffing === undefined||stuffing ==="" )) {
        if (size === undefined) {
            size = prompt('Enter correct burger size', '');
        } else {
            stuffing = prompt('Enter correct burger stuffing', '');
        }
    };
    let ResultSize = {}
    let  ResultStuff = {}
    switch (size) {
        case SIZE_SMALL.name:
             ResultSize = addResult (SIZE_SMALL);
            break;

        case SIZE_LARGE.name:
             ResultSize =  addResult (SIZE_LARGE);
            break;

        default: alert("Dont have such");
    }


    switch (stuffing) {

        case STUFFING_CHEASE.name:
            ResultStuff = addResult (STUFFING_CHEASE);
            break;

        case STUFFING_SALAD.name:
            ResultStuff= addResult (STUFFING_SALAD);
            break;


        case STUFFING_BEEF.name:
            ResultStuff= addResult (STUFFING_BEEF);
            break;

        default: alert("Dont have such")
    }
    return console.log (`Total price: ${ResultSize.Price+ResultStuff.Price}, Total cal:${ResultSize.Cal+ResultStuff.Cal}`);

}

getBurgerPrice ((prompt('Enter  burger size', '')).toUpperCase(), (prompt('Enter  burger stuffing', '')).toUpperCase())



