let guestList = ["Aman", "Amin", "Anwar", "Ahmed"];

let dontCome = guestList [0];

console.log(dontCome, "nai Ahh skta");

guestList.splice(0, 1, "Ammar");

guestList.forEach(guest => console.log(`salam ${guest}, would you like to dinner with me?`));