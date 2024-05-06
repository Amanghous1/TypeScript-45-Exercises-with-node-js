// Define a function to create a car object with optional option
function create_car(menufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // intialize a car object with manufaturer with manufacturer and model
    var car = {
        menufacturer: menufacturer,
        model: model
    };
    // add aditional option to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// call the function to create the car object
var my_car = create_car("Toyota", "Corolla", "Color: Black", "Sunroof: true", "Year: 2024");
// Print the variable to insure all the information is stored correctly in the car object
console.log(my_car);
