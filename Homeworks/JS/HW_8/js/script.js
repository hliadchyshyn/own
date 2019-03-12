//filterCollection(vehicles, 'en_US Toyota', true, 'name', 'description', 'contentType.name', 'locales.name', 'locales.description')

function filterCollection(array, keyString, isStrong, ...props){
    let filterKeys = keyString.split(' ');
    props.forEach((item)=>{
        if (item.includes('.')){
            let key = item.split('.');
            let propName = key[key.length-1];
            key.pop();
        }
    });


    let filtredObjects =
        array.filter();

}

function filter() {
    for (let key in objectName){
        if (typeof objectName[key] === 'object') {
            clone[key]= cloneObject(objectName[key]);
        } else {
            clone[key] = objectName[key];
        }
        // }
    }
    return clone;
}

function compare(value, key, arr) { //function that check if included value from main array in Exclude array
    return arr.some(function (item) {
        return item[key] === value;
    });
}