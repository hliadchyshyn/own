let someObject = {
    name: 'John',
    age: 30,
    rights: {isCanRead: true, isCanWrite: true, isCanDelete: true},
    currentDate: String(new Date()),
};

// let clone = Object.assign({}, someObject);
function cloneObject(objectName) {
    let clonedName ={};
    for (let key in objectName){
        // if (objectName.hasOwnProperty([key])) {
            if (typeof objectName[key]=== 'object') {
                cloneObject()
            } else {
                clonedName[key] = objectName[key];
            }
        // }
    }
    return clonedName;
}
let clone = cloneObject(someObject);
console.log(clone);