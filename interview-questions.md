# ASSESSMENT 1: Tech Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is git? What is the difference between git and Github?

  Your answer: Git is version control for code. Github is a service offered to people to share their git repositories. Git is on your local computer but when you push to Github, it can be accessed by others and is considered open source.

  Researched answer: Git is software and a control system for tracking changes to source code. Github is a web-based service that hosts git repositories which allows for the usual features of git plus extra features. The differences include: 
  
  Git: free open-source software distributed version control system, installed locally on the system, maintained by Linux Foundation, 

  Github: web-based hosting service for git repositories, lives on the cloud, acquired by Microsoft in 2018 



2. What types of evaluations will return a Boolean value?

  Your answer: Relational, logical, and equality operators return Boolean values.

  Researched answer: 
  We can return Booleans using Equality operators ( == === !== !=), Relational operators ( > >= < <= ), and Logical operators (and &&, or ||, and not !).
  We can  also return a Boolean by using the method Boolean() which is used to get the Boolean value of other types of values in terms of true or false. Specifically, falsy values are considered 0, -0, null, false, NaN, undefined, or (" ") empty string and anything other than those falsy values are considered truthy.


3. What is an index? What is the difference between index and value?

  Your answer: An index is the equivalent of a location within a specified value. A value is what something has been assigned to. Indexing starts at 0 (with -1 as an index does not exist) and references the location of a value where a value could be any type of number, boolean, string, etc that is assigned or inputted.

  Researched answer: An index is a property that is read only. It contains the position of a element and can only be an integer. A value, specifically referring to data, is referring to a primitive value that the object wrapper contains. In reference to variable or property, it can either be a primitive or vaue or an object reference.



4. What is a built-in method?

  Your answer: A built-in method is a function that is used so often, that they've built it into the language. 

  Researched answer: A built-in method or aso referred to as a built-in function is a function that is already set up in a program or framework that has a set of statements to perform the same task when called upon each time.



5. Give a brief description of proper pair programming techniques. What are the roles of each person?

  Your answer: In pair programming, there is a driver and a navigator. The driver is simply the person who types out the code and the navigator is the one who vocalizes the logic and says what code the driver should type. Proper technique would be to switch every 25 minutes and to take breaks. The navigator is liable for typos.

  Researched answer: Pair programming is where two programmers work on the same code on a single workstation. One is the driver who writes the code and the other is considered as the observer or navigator who reviews each line of code as it is typed. Every few minutes or so, the programmers should switch.



6. What is something we did in class this week you found helpful?  

  Your answer: I really enjoyed the office hours! Reviewing processes step by step and then overviewing the big picture process was very helpful. I think it was also great that we were able to review concepts we were struggling with and freely ask questions. 



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Iteration: Iterations means to repeat a process or set of steps. In JavaScript, it is usually used in referrence to iterating through an array to access each element of the array one by one or paired with loops to do something repeatedly. I see that it has also been referred to as "iteration methods".

2. Higher Order Functions: A high order function is a function that can accept another function as a parameter and/or return another function. Common examples are the array methods map, reduce, or filter. 

3. Jest: Jest is a JavaScript testing framework. It is maintained by Facebook and it is used to work with projects using Babel, TypeScript, Node.js, React, Angular, Vue.js, and Svelte. It is used to test code to make sure that the code is performing effectively and prevents regression. Some of it's features include snapshots that allow you to compare change and an interactive mode. It is praised for being "zero config" and working straight of the box as well as having a great application programming interface.

4. Objects: An object is one of JavaScripts's data types. Objects are a collection of properties with many different typeofs (string, number, etc). Essentially, the properties are variables that are attached to the object. Any unassigned properties will return undefined. It can be initialized as follows:
  var someObject = { 
    property1: value1, 
    property2: value2, 
    property3: value3
  };

Objects can be accessed using dot or bracket notation. Dot notation can only be used when we know the value of the variable and if the property name has no spaces.

5. Classes: Classes are considered templates for creating objects. They are considered special functions and have two components: 1)class expressions 2)class declarations. They are declared as follows:

class declaredClass {

}

Important: class declarations do not have hoisting which is the process where they premptively allocate memory for the variable and function declarations before executing the code. We would first need to declare the class to access it.
