// BASIC FUNCTION - no input, no output
function greet() {
  console.log("Hello!");
}

greet(); // Call the function to execute it

// FUNCTION WITH INPUT (parameters)
function sayHello(name) {
  console.log("Hello, " + name);
}
sayHello("Piyush");  // Hello, Piyush
sayHello("Raj");     // Hello, Raj
sayHello("Priya");   // Hello, Priya


// FUNCTION WITH RETURN (gives back a value)
function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result);  // 8

console.log(add(10, 20));  // 30


// Another example: Calculate product price
function calculatePrice(quantity, pricePerItem) {
  let total = quantity * pricePerItem;
  return total;
}

console.log(calculatePrice(3, 50));    // 150
console.log(calculatePrice(5, 100));   // 500


// FUNCTION WITH DEFAULT PARAMETER
function welcome(name = "Friend") {
  console.log("Welcome, " + name);
}

welcome();           // Welcome, Friend (uses default)
welcome("Piyush");   // Welcome, Piyush (uses provided value)


// MODERN WAY - Arrow Function
const multiply = (a, b) => {
  return a * b;
};

console.log(multiply(4, 5));  // 20
console.log(multiply(3, 7));  // 21