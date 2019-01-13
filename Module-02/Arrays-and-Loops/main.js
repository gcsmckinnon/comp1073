// Step 1: Assign the provide variable a 3 item array.
// Make all 3 items favourite foods.
let myFavFoods = ["Cheese", "Bacon", "Cheese Cake"];

// Step 2: Access the first item in the array
let mffFirst = myFavFoods[0];

// Step 3: Access the last item in the array
let mffLast = myFavFoods[2];

// Step 4: Open your console and copy and paste the
// the message into the provided variable (NOTE: Computers
// are literal, so copy&paste so you don't have a syntax error):
let theConsoleMessage = "The falcon flies south for the winter.";

// Step 5: Using the console.log syntax, output the
// value of 'mySecretVar', and copy and paste the
// the value in the following variable:
let mySecretVarWas = 256;

// Step 6: Using the console.log, output the
// array value 'mySecretArr'. Record how many
// elements there are in the following variable:
let numOfSecretElements = 5;


// For steps 7 to 12:
// Nested Array Syntax Stuff
let students = [
  [56789, 56790, 56791],
  ["Dave", "Bob", "Sally"],
  ["Smith", "Alto", "Struthers"],
  [
    ["math", "science", "english"],
    ["french", "science", "geography"],
    ["music", "communications", "english"],
  ],
  [
    [96, 53, 85],
    [76, 83, 82],
    [98, 21, 56],
  ]
];

// Step 7: Access and store Dave's science grade.
let davesSciGr = students[4][0][1];

// Step 8: Access and store Bob's last name.
let bobsLastName = students[1][1];

// Step 9: Access and store Bob's geography grade.
let bobsGeoGr = students[4][1][2];

// Step 10: Using .length, how many elements does the
// 'students' array have?
let numOfStudents = 5;

// Step 11: Using .length, how many elements does the
// 'students' first names array have?
let numOfStudentsFirstNames = 3;

// Step 12: Using .length, how many elements does the
// 'students' course list array have?
let numOfStudentsCourses = 3;


// For steps 13 to 17
let initArr = [1, 2, 3];
// Step 13: Using .push(), add the following 3 numbers
// to the array: 4, 5, and 6.
initArr.push(4, 5, 6);

// Step 14: Using .unshift(), add the following 2 numbers
// to the array: 7, 8.
initArr.unshift(7, 8);

// Step 15: Using .pop(), remove the last number from the 
// array.
initArr.pop();

// Step 16: Using .shift(), remove the first number from
// the array
initArr.shift();

// Step 17: Using .splice(), add the number 256 between
// 2 and 3
initArr.splice(3, 0, 256);

// Step 18: Write a while loop that increments the
// sentinel 8 times
let sentinel = 0;

while (sentinel < 8) {
  sentinel += 1;
}

// Step 19: Write a do while loop that increments the
// sentinel 2 more times
do {
  sentinel += 1;
} while (sentinel < 10)

// Step 20: Write a for loop that adds 0 to 10 together
let forLoopValue = 0;
for (let i = 0; i <= 10; i++) {
  forLoopValue += i;
}

// Step 21: Write a for loop that adds 0 to 10 together
let forOfLoopValue = 0;
let exArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let ele of exArr) {
  forOfLoopValue += ele;
}