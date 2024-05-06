// List the array of currents user
var current_users = ["Usman", "areeba", "Abeeha", "Aman", "Usman"];
// array of new users
var new_user = ["Hamza", "Ayesha", "Abeeha", "Aman", "Areeba"];
// loopthrough new users check of usernames availablity
new_user.forEach(function (new_one_user) {
    // Making a conditions for username already exist and save in our condition   
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // Print different messages using if else statements    
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, ", is already taken."));
    }
    else {
        console.log("This Username ".concat(new_one_user, ", is available."));
    }
});
