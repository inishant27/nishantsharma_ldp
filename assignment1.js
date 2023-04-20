// Passing Function as argument

function greeting(){
    return 'Hello'; 
}

function naming(user, func){
    const message = func();
    console.log(`${message} ${user}`)
}


naming('Nishant', greeting);


//Returning the first and last char 

let getInitials = (firstName, lastName) => {
    return firstName[0] + lastName[0]
}

let initials = getInitials('Nishant','Rohan');
console.log(initials);
