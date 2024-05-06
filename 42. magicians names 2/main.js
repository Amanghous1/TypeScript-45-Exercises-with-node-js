// define the function to show magicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// define an array of magicians names
var magician_names = ["Herry poter", "Spider man", "Super man"];
var great_magicians = make_great(magician_names);
show_magicians(great_magicians);
console.log(great_magicians);
