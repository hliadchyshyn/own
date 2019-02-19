function createNewUser(firstName, lastName) {
    let user = {
        createUser:()=>{
            user.firstName = validateName (prompt('Enter your first name', ''),'first name');
            user.lastName = validateName (prompt('Enter your last name', ''), 'last name');
            return user;
        },
        getLogin:()=> {
            let login = user.firstName.charAt(0)+user.lastName.charAt(0);
            return login.toLowerCase()
        },
        setFirstName: (name)=>{user.firstName = name},
        setLastName: (name)=>{user.lastName = name},
    };
    switch (arguments.length){
         case 0:
            user.createUser();
            user.getLogin();
            break;
         case 2:
             user.setFirstName(firstName);
             user.setLastName (lastName);
             break;
    }
    return user;
}

function validateName(name, message) {
    while (name === "" || name === null){
        name = prompt(`Enter correct ${message}`, (name === null ? "" : name));
    }
    return name;
}

let result = createNewUser();
console.log(`User: ${result.firstName} ${result.lastName}, Login: ${result.getLogin()}`);
