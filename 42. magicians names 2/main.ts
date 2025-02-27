// define the function to show magicians names
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// functions to make magicians great through .map()it will modify array
function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

// define an array of magicians names
let magician_names = ["Herry poter", "Spider man", "Super man"]

// call make_great function to modify magicians names
let great_magicians = make_great(magician_names);

// call show_magicians that show modified list of magicians
show_magicians(great_magicians)

console.log(great_magicians)