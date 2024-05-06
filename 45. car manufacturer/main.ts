// Define a function to create a car object with optional option
function create_car(menufacturer, model, ...options){
    // intialize a car object with manufaturer with manufacturer and model
    let car = {
        menufacturer: menufacturer,
        model: model
    };

    // add aditional option to the car object
    options.forEach(option => {
        let [key, value] = option.split(":")
        car[key.trim()] = value.trim();
    });

    return car;
}

// call the function to create the car object
let my_car = create_car("Toyota", "Corolla", "Color: Black", "Sunroof: true", "Year: 2024");

// Print the variable to insure all the information is stored correctly in the car object
console.log(my_car);