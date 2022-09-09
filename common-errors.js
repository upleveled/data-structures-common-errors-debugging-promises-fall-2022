// x(); // ReferenceError: x is not defined

// const x = '';
// x(); // TypeError: x is not a function

const object = {
  run: () => {
    console.log('i am running');
  },
  x: 'jose',
};
console.log(object.user.name); // TypeError: Cannot read properties of undefined (reading 'name')
