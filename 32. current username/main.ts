// List the array of currents user
let current_users = ["Usman", "areeba", "Abeeha", "Aman", "Usman"];

// array of new users
let new_user = ["Hamza", "Ayesha", "Abeeha", "Aman", "Areeba"]

// loopthrough new users check of usernames availablity
new_user.forEach(new_one_user => {
   
// Making a conditions for username already exist and save in our condition   
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

// Print different messages using if else statements    
    if(our_condition){
        console.log(`Sorry ${new_one_user}, is already taken.`)
    }else{
        console.log(`This Username ${new_one_user}, is available.`)
    }
})