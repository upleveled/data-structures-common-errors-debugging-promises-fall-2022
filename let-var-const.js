// let vs var vs const
// # Hoisting

// Not throwing and error what may cause a lot of errors
// having access to the variable before initialization is called hoisting
console.log(varAnimal); // undefined

// Throwing and error is good since prevent flaky code (let behave the same)
// console.log(constAnimal); // ❌ ReferenceError: Cannot access 'constAnimal' before initialization

var varAnimal = 'elephant';
const constAnimal = 'elephant';

console.log(varAnimal); // elephant
console.log(constAnimal); // elephant

// # Scope
// var is function scoped, let and const are block scoped

function doSomething() {
  var varB = 'something';
  console.log(varB);
}

if (true) {
  var varA = 'something';
  const constA = 'something';
  const letA = 'something';
  console.log(varA, constA, letA);
}

// The var variable is not encapsulated by blocks
console.log(varA);

// The const and let variables are encapsulated by blocks
/**
console.log(constA); // ❌ ReferenceError: constA is not defined
console.log(letA); // ❌ ReferenceError: letA is not defined
*/

// The var variable is encapsulated by blocks (same for let and const)
/**
console.log(varB); // ❌ ReferenceError: varB is not defined
*/

// const can't be reassigned but let can
const constExample = 123;
// constExample = 124; // ❌ TypeError: Assignment to constant variable.
let letExample = 123;
letExample = 124; // ✅
