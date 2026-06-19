console.log("=== For Loop ===");
for (let i = 0; i < 5; i++) {
  console.log("Count: " + i);
}

// WHILE LOOP - repeat while condition is true
console.log("\n=== While Loop ===");
let counter = 0;
while (counter < 3) {
  console.log("Counter: " + counter);
  counter++;
}

// Practical example: Print numbers 1 to 10
console.log("\n=== Numbers 1 to 10 ===");
for (let num = 1; num <= 10; num++) {
  console.log(num);
}

// Practical example: Print multiplication table of 5
console.log("\n=== 5 Times Table ===");
for (let num = 1; num <= 10; num++) {
  console.log("5 × " + num + " = " + (5 * num));
}