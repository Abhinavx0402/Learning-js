// ===== QUIZ DATA =====
let questions = [
  {
    question: "What is the capital of India?",
    options: ["A) Delhi", "B) Mumbai", "C) Bangalore"],
    answer: "A"
  },
  {
    question: "What is 5 + 3?",
    options: ["A) 6", "B) 8", "C) 10"],
    answer: "B"
  },
  {
    question: "Which planet is closest to the sun?",
    options: ["A) Earth", "B) Venus", "C) Mercury"],
    answer: "C"
  },
  {
    question: "What is the largest ocean?",
    options: ["A) Atlantic", "B) Indian", "C) Pacific"],
    answer: "C"
  },
   {
    question: "What is the most popular JavaScript framework for frontend development?",
    options: ["A) React", "B) Django", "C) MySQL"],
    answer: "A"
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["A) Python", "B) CSS", "C) Java"],
    answer: "B"
  }

];

// ===== SCORE TRACKER =====
let score = 0;

// ===== FUNCTION TO SHOW QUESTION =====
function askQuestion(questionNum) {
  let q = questions[questionNum];
  console.log("\n" + (questionNum + 1) + ". " + q.question);
  console.log(q.options[0]);
  console.log(q.options[1]);
  console.log(q.options[2]);
}

// ===== FUNCTION TO CHECK ANSWER =====
function checkAnswer(userAnswer, questionNum) {
  let correctAnswer = questions[questionNum].answer;
  
  if (userAnswer === correctAnswer) {
    console.log("✅ Correct!");
    score++;
  } else {
    console.log("❌ Wrong! Answer was: " + correctAnswer);
  }
}

// ===== START THE QUIZ =====
console.log("========== QUIZ GAME ==========");
console.log("Answer with A, B, or C\n");

// Question 1
askQuestion(0);
checkAnswer("B", 0);  // Change "A" to your answer

// Question 2
askQuestion(1);
checkAnswer("B", 1);  // Change "B" to your answer

// Question 3
askQuestion(2);
checkAnswer("C", 2);  // Change "C" to your answer

// Question 4
askQuestion(3);
checkAnswer("C", 3);

// Question 5
askQuestion(4);
checkAnswer("A", 4);

// Question 6
askQuestion(5);
checkAnswer("B", 5);// Change "C" to your answer



// ===== SHOW RESULTS =====
console.log("\n========== RESULTS ==========");
console.log("Your score: " + score + " out of " + questions.length);
let percentage = (score / questions.length) * 100;
console.log("Percentage: " + percentage + "%");

if (score === questions.length) {
  console.log("🏆 Perfect score! Genius!");
} else if (score >= 3) {
  console.log("🎉 Great job!");
} else {
  console.log("📚 Keep practicing!");
}