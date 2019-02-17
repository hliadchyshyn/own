let name = prompt("Enter your name","");
while (name === "" || name === null){
    name = prompt('Enter correct name', (name === null ? "" : name));
}
let age = Number(prompt("Enter your age",""));
while (isNaN(Number (age))|| age === undefined || age === null){
    age = Number(prompt('Enter correct age', age));
}
if(age < 18){
    alert('You are not allowed to visit this website');
} else if(18 <= age && age <= 22){
    if (confirm('Are you sure you want to continue?')){
        alert('Welcome,' +name);
    } else {
        alert('You are not allowed to visit this website');
    }
} else {
    alert('Welcome,' +name);
}

