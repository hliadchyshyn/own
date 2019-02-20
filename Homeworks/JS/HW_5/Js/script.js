let someObject = {
    currentDate: new Date(),
    rights: {isCanRead: true, isCanWrite: true, isCanDelete: true},
    name: 'John',
    age: 30,
};
function cloneObject(objectName) {
    let clone = {};
    for (let key in objectName){
        // if (objectName.hasOwnProperty(key)) {
        if (typeof objectName[key] === 'object'&& typeof objectName[key].getMonth === 'function') {
            clone[key]= new Date(objectName[key].getTime())
        } else if (typeof objectName[key] === 'object') {
            clone[key]= cloneObject(objectName[key]);
        } else {
            clone[key] = objectName[key];
            }
        // }
    }
    return clone;
}
let clone = cloneObject(someObject);
console.log(clone);