// Creating a guestlist array
var guestList = ["Aman", "Amin", "Ahmed", "Anwar"];
// Making veriable for those guest who cant come
var dontCome = guestList[0];
// Print the name of guest who cant come
console.log(dontCome, "nai Ahh skty hain");
// Add or remove value from guestlist array
guestList.splice(0, 1, "Ammar");
// Message print for bigger table
console.log("Good News ! We Have Found A Bigger Table For Dinner");
// Adding a new value at starting index of array
guestList.unshift("Mansoor");
// Adding a new value at ending index of array
guestList.push("ali");
// Get a middle index of our guestlist array
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Hamza");
// Print message of updated list
console.log("Updated list of our Guests");
// Sending a invitation message to our guest one by one with their names
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like dinner with me?")); });
// Inform that only two guest can be invited for dinner
console.log("unfortunately, the new dinner table wont arrive on time, so i can only invite two guest to dinner with me");
// Using whileloop to remove guest from the array untill only two names remain
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("Sorry, ".concat(removeGuest, " I cant invite you to dinner"));
}
// Printing a invitation to the last two guest on the list
console.log("Invitation to the last 2 guests");
guestList.forEach(function (lasttwo) { return console.log("luckly ".concat(lasttwo, ", you are still invited to dinner")); });
// Removing last two guest from the list
guestList.pop();
guestList.pop();
console.log("Empty list:", guestList);
