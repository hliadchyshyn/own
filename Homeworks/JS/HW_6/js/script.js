function createNewUser(firstName, lastName) {
    let user = {
        createUser:()=>{
            user.firstName = validateName (prompt('Enter your first name', ''),'first name');
            user.lastName = validateName (prompt('Enter your last name', ''), 'last name');
            return user;
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
        default:
            if (firstName!=undefined) {
                user.setFirstName(firstName);
            } else {
                user.setLastName (lastName);
            }

    };
    return user;
};

function validateName(name, message) {
    while (name === "" || name === null){
        name = prompt(`Enter correct ${message}`, (name === null ? "" : name));
    }
    return name;
}

let user = createNewUser();
console.log(user);
