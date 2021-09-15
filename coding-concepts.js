// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2021"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: .length will return the (property) length of the string. There are 10 characters in the string "Delta 2021".


// --------------------2) What will this log?

var greeting = "Hello World!"
// console.log(greeting[3])

// a) Your answer: l (specifically second l in Hello)
// b) Verify and explain: By using the square brackets, we are calling on the specific index or location of a character in the value of the variable greeting. Since we use 0 indexing, the second l in Hello is returned. This is because at index 0 = H, 1 = e, 2 = l, 3 = l, and so on. 


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
// console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: We first initiated a var index as 1. When we console logged the array languages and then passed in the variable index, it then looked for the element in the languages array at index 1 which is Ruby.


// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: ["SATURDAY", "SUNDAY"]
// b) Verify and explain: My answer was wrong because I forgot that to use .toUpperCase(), we need a data type of string. It will not work on an array. We could technically just call a specific index to convert the array items to uppercase. Bonus for loop to get my answer is below :P :

// for(i = 0; i < weekendDays.length; i++){
//     weekendDays[i] = weekendDays[i].toUpperCase();
// }
// console.log(weekendDays);


// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// a) Your answer: it will throw some error
// b) Verify and explain: Originally, I thought that you needed parentheses for typeof but I just figured out it is considered an operator rather than a method. I understand why the correct return is "number". The dataTypes.length is returning the length property of the array dataTypes which is 3. The typeof 3 is a number. 
