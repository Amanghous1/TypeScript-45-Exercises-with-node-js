// Define variables
let apple = "apple";
let uppercaseapple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "banana", "orange"];

// Test for equality and inequality with string
console.log("is apple is equal to apple");
console.log(apple == "apple");

console.log("\nis apple is not equal to apple");
console.log(apple != "apple");

// Test using lowercase function
console.log("\nIS APPLE is equal to after converting to lowercase?");
console.log(uppercaseapple.toLowerCase() == "apple");

console.log("\nIS APPLE is equal to after converting to lowercase?");
console.log(uppercaseapple.toLowerCase() != "apple");

// Numerical tests
// Equals to
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);

// Not equals to
console.log("\n Is ten is not equal to twenty?");
console.log(ten != twenty);

// Greater than
console.log("\n Is ten is greater  than zero?");
console.log(ten > 0);

// Less than
console.log("\n Is twenty is less than ten");
console.log(twenty < 10);

// Greater than or equal to
console.log("\n Is ten is greater than or eqaul to 5?");
console.log(ten >= 5);

// Less than or eqaul to
console.log("\n twenty is less than or equal to 10");
console.log(twenty <= 10);

// Tests using "and" & "or" operater

// using &&
console.log("\n twenty is not eqaul to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);

console.log("\n twenty is not eqaul to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);

// Using || (OR)
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 < 50 || 20 == 20);

console.log("\n 20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);

// Tests whether an item is include in array
console.log("\n Is orange include in my fruits array");
console.log(fruits.includes("orange"));

// Not include
console.log("\n Is orange not include in my fruits array");
console.log(!fruits.includes("orange"));