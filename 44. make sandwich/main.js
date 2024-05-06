// define a function with a rest parameter that accept items arguments representing our sandwich
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(function (singleItems) { return console.log(singleItems); });
    console.log("\nNow enjoy sandwich");
}
// call the function3 times with three different numbers of arguments
makeSandwich("Chicken", "Cheese", "Mayonese", "Ketchup");
makeSandwich("Bread", "Butter");
makeSandwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Ketchup");
