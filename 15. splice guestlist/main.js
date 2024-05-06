var guestList = ["Aman", "Amin", "Anwar", "Ahmed"];
var dontCome = guestList[0];
console.log(dontCome, "nai Ahh skta");
guestList.splice(0, 1, "Ammar");
guestList.forEach(function (guest) { return console.log("salam ".concat(guest, ", would you like to dinner with me?")); });
