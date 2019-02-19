let someObject = {
    name: 'John',
    age: 30,
    rights: {isCanRead: true, isCanWrite: true, isCanDelete: true},
};

let clone = Object.assign({}, someObject);

console.log(clone);