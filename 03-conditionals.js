let age = 20;

// Simple if - only runs if condition is TRUE
if (age >= 18) {
  console.log("You are an adult");
}

// if-else - choose between two paths
let score = 45;
if (score >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// if-else if-else - multiple options
let grade = 75;
if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else {
  console.log("F");
}

// Comparison operators
console.log(5 == 5);    // true (equal)
console.log(5 === "5"); // false (strictly equal - type matters)
console.log(5 > 3);     // true (greater than)
console.log(5 < 3);     // false (less than)
console.log(5 >= 5);    // true (greater or equal)


// Logical operators (AND, OR)
let isAdult = age >= 18;
let hasLicense = true;
if (isAdult && hasLicense) {
  console.log("Can drive");
}

let isWeekend = true;
if (isWeekend || age >= 16) {
  console.log("Can go out");
}