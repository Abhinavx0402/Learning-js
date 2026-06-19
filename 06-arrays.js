// ===== CREATE AN ARRAY =====
let fruits = ["apple", "banana", "orange"];

console.log("=== Array Basics ===");
console.log(fruits);  // ["apple", "banana", "orange"]

// ===== ACCESS ITEMS (Remember: starts at 0) =====
console.log("\n=== Access Items ===");
console.log(fruits[0]);  // apple (first item)
console.log(fruits[1]);  // banana (second item)
console.log(fruits[2]);  // orange (third item)

// ===== GET LENGTH (how many items) =====
console.log("\n=== Array Length ===");
console.log(fruits.length);  // 3

// ===== ADD ITEMS =====
console.log("\n=== Add Items ===");
fruits.push("mango");      // Add to end
console.log(fruits);       // ["apple", "banana", "orange", "mango"]
console.log(fruits.length); // 4

// ===== REMOVE ITEMS =====
console.log("\n=== Remove Items ===");
let lastFruit = fruits.pop();  // Remove from end and get it
console.log(lastFruit);     // mango
console.log(fruits);        // ["apple", "banana", "orange"]

// ===== LOOP THROUGH ARRAY (Traditional way) =====
console.log("\n=== Loop with for =====");
for (let i = 0; i < fruits.length; i++) {
  console.log(i + ": " + fruits[i]);
}
// Output:
// 0: apple
// 1: banana
// 2: orange

// ===== LOOP THROUGH ARRAY (Modern way - forEach) =====
console.log("\n=== Loop with forEach ===");
fruits.forEach(function(fruit) {
  console.log("I like " + fruit);
});
// Output:
// I like apple
// I like banana
// I like orange

// ===== ARRAY OF NUMBERS =====
console.log("\n=== Array of Numbers ===");
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// ===== MAP - Transform each item =====
console.log("\n=== Map: Double each number ===");
let doubled = numbers.map(function(num) {
  return num * 2;
});
console.log(doubled);  // [2, 4, 6, 8, 10]

// ===== FILTER - Keep only items that match =====
console.log("\n=== Filter: Keep only big numbers ===");
let bigNumbers = numbers.filter(function(num) {
  return num > 2;
});
console.log(bigNumbers);  // [3, 4, 5]

// ===== FIND - Get first item that matches =====
console.log("\n=== Find: First number > 3 ===");
let firstBig = numbers.find(function(num) {
  return num > 3;
});
console.log(firstBig);  // 4

// ===== INCLUDE - Check if item exists =====
console.log("\n=== Include: Does array have 3? ===");
console.log(numbers.includes(3));   // true
console.log(numbers.includes(10));  // false