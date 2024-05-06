var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a array of countries and print also its orginal order
var countriesTovisit = ["Afghanistan", "China", "Brazil", "Denmark"];
console.log("Orginal Order:", countriesTovisit);
// Print the array in alphabetical order without modifying the actual array list
console.log("Alphabetical Order:", __spreadArray([], countriesTovisit, true).sort());
// Show that the array is still in its orginal order
console.log("Still in Orginal Order:", countriesTovisit);
// Print the array in reverse order without modifying the actual array list
console.log("Reverse Order:", __spreadArray([], countriesTovisit, true).reverse());
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
