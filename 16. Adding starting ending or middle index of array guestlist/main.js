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
