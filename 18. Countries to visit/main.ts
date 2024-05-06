// Making a array of countries and print also its orginal order
let countriesTovisit: string[] = ["Afghanistan", "China", "Brazil", "Denmark"];
console.log("Orginal Order:", countriesTovisit);

// Print the array in alphabetical order without modifying the actual array list
console.log("Alphabetical Order:", [...countriesTovisit].sort());

// Show that the array is still in its orginal order
console.log("Still in Orginal Order:", countriesTovisit);

// Print the array in reverse order without modifying the actual array list
console.log("Reverse Order:", [...countriesTovisit].reverse());

// Show that the array is still in its orginal order
console.log("Still in Orginal Order:", countriesTovisit);

// We have changed the orginal array order now
console.log("Orginal Array Reverse", countriesTovisit.reverse());

// Print the array to show that its back to its orginal order
console.log("Back to orginal order:", countriesTovisit.reverse());

// Print the array to show that its order has been changed inalphabetical order now
console.log("Sorted in Alphabetical Order:", countriesTovisit.sort());

// We have changed again the orginal array order now
console.log("Orginal Array Reverse Again", countriesTovisit.reverse());