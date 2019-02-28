/*test data*/
const peopleList = [{
    name: "Ivan",
    surname: "Ivanov",
    gender: "male",
    age: 30
}, {
    name: "Anna",
    surname: "Ivanova",
    gender: "female",
    age: 22
}];
const excluded = [{
    name: "Ivan",
    surname: "Ivanov",
    gender: "male",
    age: 30
}, {
    name: "Maria",
    surname: "Petrova",
    gender: "female",
    age: 35
},];
/*end of test data*/

//function declaration
function excludeBy(arrayBase, arrayExclude, field) {
    let result = [];
    let i = arrayBase.length;
    for (i; i !== 0; i--) { // for each value check
        let item = arrayBase[i - 1];
        if (!(compare(item[field], field, arrayExclude))) { //if included - push to result of function
            result.push(item);
        }
    }
    return result;
}

function compare(value, key, arr) { //function that check if included value from main array in Exclude array
    return arr.some(function (item) {
        return item[key] === value;
    });
}


console.log(excludeBy(peopleList, excluded, 'name'));
