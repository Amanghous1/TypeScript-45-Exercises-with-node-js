// Making a function
function make_shirt (size: string = "Large", printMessage: string = "I Love TypeScript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`)
}

// calling a function
make_shirt();

// calling a function with now medium size and default message
make_shirt("Medium");

// calling a function now with small size and different print message
make_shirt("small", "I Love JavaScript");