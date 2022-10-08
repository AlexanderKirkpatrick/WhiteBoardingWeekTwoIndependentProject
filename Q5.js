// Question #5: Array Sorting

// Write an algorithm that sorts an array without using the sort() method. There are many different sorting algorithms — take the time to read about the following:

//     Quick sort
//     Merge sort
//     Heap sort
//     Insertion sort
//     Bubble sort
//     Selection sort

// You may implement any of the above algorithms (or your own) to solve the problem — as long as it doesn't use sort().
// Example

// Input: [9, 2, 7, 12]

// Output: [2, 7, 9, 12]

const sorted = () => {
  const arr = [9, 2, 7, 12, 1]
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      };
    };
  };
  return arr;
};
