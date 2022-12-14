// Question #2: Array Deduping

// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.
// Example

// Input: [7, 9, "hi", 12, "hi", 7, 53]

// Output: [7, 9, "hi", 12, 53

const deduper = () => {
  const charsArr = [7, 9, "hi", 12, "hi", 7, 53, 9, 12, 53];
  let uniqueCharsArr = [...new Set(charsArr)];
  return uniqueCharsArr;
};

const deduperWithFilter = () => {
  const arr = [7, 9, "hi", 12, "hi", 7, 53, 9, 12, 53];
    return arr.filter((item, index) => arr.indexOf(item) === index);
};