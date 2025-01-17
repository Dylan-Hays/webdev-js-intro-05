"use strict";

const todos = [
  "Wash the dishes",
  "Clean the gutters",
  "Mow the yard",
  "Do some coding",
  "Rake the leaves",
];

// Declareing mutable variables
let shiftValue;
let popValue;

// Declaring constant variables to store references to the elements
const answerOneEl = document.getElementById("answer-one");
const answerTwoEl = document.getElementById("answer-two");
const answerThreeEl = document.getElementById("answer-three");
const answerFourEl = document.getElementById("answer-four");
const answerFiveEl = document.getElementById("answer-five");
const answerSixEl = document.getElementById("answer-six");
const submissionBtn = document.getElementById("submission-btn");

function updateAnswerOne() {
  // Output the todo array
  answerOneEl.textContent = todos.join(", ");
}

function updateAnswerTwo() {
  // Output the third value in the array
  answerTwoEl.textContent = todos[2];
}

function removeLastValue() {
  // Remove the last value and store it in popValue
  popValue = todos.pop();
  answerThreeEl.textContent = todos.join(", ");
}

function reverseTodoList() {
  // Reverse the array
  todos.reverse();
  answerFourEl.textContent = todos.join(", ");
}

function removeFirstValue() {
  // Remove the first value and store it in shiftValue
  shiftValue = todos.shift();
}

function addShiftAndPopValues() {
  // Add shiftValue and popValue to the end of the array
  todos.push(shiftValue, popValue);
  answerFiveEl.textContent = todos.join(", ");
}

function updateAnswerSix() {
  // Output the final todo array
  answerSixEl.textContent = todos.join(", ");
}

function render() {
  // Call functions in the correct order
  updateAnswerOne();
  updateAnswerTwo();
  removeLastValue();
  reverseTodoList();
  removeFirstValue();
  addShiftAndPopValues();
  updateAnswerSix();
}

// Add event listener for the submission button
submissionBtn.addEventListener("click", function () {
  render();
});
