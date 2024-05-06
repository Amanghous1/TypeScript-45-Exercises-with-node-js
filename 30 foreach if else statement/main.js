// Creating a array
var userNames = ["Mahad", "Zeeshan", "Admin", "Usman", "Saad"];
// Using foreach loop on array
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thankyou for logging in again."));
    }
});
