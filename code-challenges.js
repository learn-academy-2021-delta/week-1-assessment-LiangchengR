// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a statement that determines if a temperature is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit.

// Create the code and test each of the variables provided. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

//var temp = 35
//var temp = 350
var temp = 212

if (temp === 212){ 
// if statement to test if temp is strictly equal to 212 (specific boiling point case)
    console.log(`${temp} is at boiling point`);
    //if true, console log a string using string interpolation to return temp + " is at boiling point"
} else if (temp < 212){
// else if statement to test if temp is less than 212     
    console.log(`${temp} is below boiling point`);   
    //if true, console log a string using string interpolation to return temp + " is below boiling point"      
} else { 
//catch all else statement that will execute code if temp is not strictly equal to 212 and if temp is not less than 212 (aka greater than 212)
    console.log(`${temp} is above boiing point`);      
    //console log a string using string interpolation to return temp + " is above boiling point"  
}



// --------------------2) Create the code that will combine two arrays and return the length using the variables provided below. Expected output: 10

var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 22, 9, 13]

console.log(myNumbers1.concat(myNumbers2).length);
//console log result of: use of concat() to concatenate myNumbers2 to MyNumbers1 and then used the .length array property to return the length of the combined arrays.


// --------------------3) Create the code that will reverse the letters of a string using the test variables provided below. Expected output: "eilrahc", "atled"

var myString1 = "charlie"
var myString2 = "delta"

console.log(myString1.split("").reverse().join(""));
//console log: use of split on myString1 to convert each character into an array element using (""), used the reverse method to then reverse that array, used join to then convert that array back into a string with no seperators using ("")
console.log(myString2.split("").reverse().join(""));
//console log: use of split on myString2 to convert each character into an array element using (""), used the reverse method to then reverse that array, used join to then convert that array back into a string with no seperators using ("")


// --------------------4) Create a statement that evaluates two numbers and subtracts the smaller number from the larger number using the two sets of test variables provided below. Expected output: 15, 12

// var number1 = 42
// var number2 = 27

var number1 = 7
var number2 = 19

// var number1 = 7
// var number2 = 7

if(number1 >= number2){
//if statement to determine if number1 is greater than OR equal to number2 
//i used greater than or equal because if the numbers are equal, order of numbers in the equation does not matter
    console.log(number1 - number2);
    //if true, console log the result of number1 - number2
} else{
//else catch all which would mean that number2 is greater than number1
    console.log(number2 - number1)
    //if true, console log the result of number2 - number1 
}


// --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. Inform your user if the variable is not a number using the two sets of test variables provided below. Expected output: "Your input is not a number", 3

// var numberRefactor1 = 42
// var numberRefactor2 = "hello"

var numberRefactor1 = 27
var numberRefactor2 = 24

if(typeof(numberRefactor1) !== "number" || typeof(numberRefactor2) !== "number"){
//if statement that uses the typeof operator to determine if either numberRefactor1 or typenumberRefactor2 are not strictly equal to "number"
    console.log("Your input is not a number");
    //if either statements are true, console log "Your input is not a number"
} else if(numberRefactor1 >= numberRefactor2){
//else if statement to determine if numberRefactor1 is greater than OR equal to numberRefactor2
//i used greater than or equal because if the numbers are equal, order of numbers in the equation does not matter
    console.log(numberRefactor1 - numberRefactor2);
    //if true, console log the result of numberRefactor1 - numberRefactor2
} else{
//else catch all which would mean that numberRefactor2 is greater than  numberRefactor1
    console.log(numberRefactor2 - numberRefactor1)
    //if true, console log the result of numberRefactor2 -  numberRefactor1 
}
    