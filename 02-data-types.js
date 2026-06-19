// STRING - text (use quotes)
let message = "I am learning JavaScript";
let singleQuote = 'This works too';
let template = `I can insert variables like ${message}`;

console.log(message);
console.log(template);
console.log(singleQuote);


// NUMBER - integers and decimals
let count = 42;
let prices = 19.99;
let negative = -5;

console.log(count);
console.log(price);
console.log(negative);

// BOOLEAN - true or false (only 2 options)
let isLoggedIn = true;
let isEmpty = false;

console.log(isLoggedIn);
console.log(isEmpty);

let productName = "A";      // A product name (string)
let price = 19.99;              // Its price (number)
let inStock = true;            // Is it available (boolean)

// Print them with labels
console.log("Product: " + productName);
console.log("Price: ₹" + price);
console.log("In Stock: " + inStock);

// Print their types
console.log(typeof productName);
console.log(typeof price);
console.log(typeof inStock);