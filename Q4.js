// Question #4: Checking for Uniqueness

// Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.
// Example

// Input: "hello"

// Output: false

// Input: "copyright"

// Output: true

const stringIsUnique = (input) => {
  const newInput = input.replace(/\s+/g, '');
  for (i = 0; i < newInput.length; i++) {
    if (newInput.indexOf(newInput[i]) !== newInput.lastIndexOf(newInput[i])) {
      return false;
    };
  };
  return true;
};