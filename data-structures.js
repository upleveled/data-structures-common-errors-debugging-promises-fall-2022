// Data structures in JS

/**
 * Use find function (cmd/ctl + F) in VS Code to navigate
 * Alternative select the hashtag and the heading (i.e ## String) and then hit cmd/ctl + D
 *
 * # Primitives
 * ## String
 * ## Number
 * ## Boolean
 * ## Undefined
 * ## Null
 * ## Symbol
 * ## BigInt
 *
 * # Non Primitives
 * ## Array
 * ## Object
 * ## Function
 *
 */

// # Primitives
// String, Number, Boolean, Undefined, Null, Symbol and BigInt

// ## String

// Using single quotation
const name1 = 'Marcela';

// Using double quotation with apostrophe
const accessory = "Marcela's hat";

// Using escape character (currently with our prettier configuration this is auto formatted but is still valid JS)
// const accessory = 'Marcela\'s hat';

// Template string (Using Backticks)
const name2 = `Alejandro`;

// Using template string embedding JavaScript expression
const StringGreeting = `hello ${name2}, nice to meet you`;
// Using template string to create a multiline string
const multilineString2 = `hi this is a very long
          string`;

// Using single quotes to create a multiline string
const multilineString = 'hi this is a very long  \nstring';
// Using single quotes to concatenate strings
const StringGreeting2 = 'hello ' + name2 + ', nice to meet you';

// ## number
let a = 0.1;
let b = 0.2;

const sum = a + b; // This is not intuitive and may cause problems
console.log(sum, 'This is very unexpected');

const typeOfNumber = typeof NaN; // number

const infinite = -Infinity;

// ## Boolean
const boolean1 = true;
const boolean2 = false;

// ## Undefined
const undefinedVariable = undefined;
const undefinedIsAType = typeof undefined; // undefined

// ## Null

const nullVariable = null;
const nullIsAType = typeof null; // null

// ## Symbol

/**
 * Symbols were added to the lineup of primitive data types in
 * JavaScript in 2015. It was part of ES6 specification and its sole
 * purpose is to act as a unique identifier of object properties, i.e.
 * it can be used as a key in objects.
 *
 * This is not going to be needed for completion of the bootcamp
 *
 * If you still have time. You can find more info here:
 * https://levelup.gitconnected.com/everything-you-need-to-know-about-javascript-symbols-24650a163038
 * */

// ## BigInt

/**
 *
 * BigInt is a primitive wrapper object used to represent and manipulate
 * primitive bigint values — which are too large to be represented by the
 * number primitive.
 *
 * BigInt values are similar to Number values in some ways, but also differ
 * in a few key matters: A BigInt value cannot be used with methods in the
 * built-in Math object and cannot be mixed with a Number value in operations;
 *
 * This is probably not going to be needed for completion of the bootcamp
 *
 * If you still have time. You can find more info here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
 */

// # Non Primitives
// Array, Object and function
// In some resources both are part of the same non-primitive type Object

// ## Object
const user = {
  name: 'Sofia', // this is a property
  age: 9,
};
const user2 = {
  name: 'Sofia', // this is a property
  age: 9,
};

console.log(user === user2); // false checked by reference

console.log(user.name === user2.name); // true  checked by value

const userAge = user.age;
const userAgeFromString = user['age'];

const propertyName = 'name';
const userNameFromVariable = user[propertyName];
// const userName = user.propertyName; // This is a mistake

// Add a new property to an object
user.hobbies = 'play violin';

// ## Arrays

const studentList = ['Michael', 'Timon', 'Varsha', 'Lisa'];
const otherStudents = ['Aaron', 'Denisa'];
const student1 = studentList[0]; // Michael

const newList = [...studentList, ...otherStudents]; // using spread operator
const newList2 = studentList.concat(otherStudents); // using a immutable method

// This mutates the original string
studentList.push('Aaron');

console.log(studentList);
console.log(newList);

// ## Functions

const run = function () {
  console.log('i am running');
};

function run2() {
  console.log('i am running');
}

const run3 = () => {
  console.log('i am running');
};

// Implicit return
const run4 = () => 'i am running';

// console.log(run4());

// IIFE

(function () {
  console.log('i am running from an IIFE');
})();

// Parts of a function

function greetSomeone(name /** Parameter */) {
  // body of the function with return keyword
  return `Hello ${name}`;
}

// this is an example of an arrow function with no return keyword
const greetSomeoneInArrowFunction = (name /** Parameter */) => `Hello ${name}`;

const userName = 'Jose';
const userName2 = 'Sofia';
const greeting = greetSomeone(userName /** Argument */);
const greeting2 = greetSomeoneInArrowFunction(userName2 /** Argument */);

console.log('userName', userName);
console.log('greeting', greeting);
console.log('greeting2', greeting2);
