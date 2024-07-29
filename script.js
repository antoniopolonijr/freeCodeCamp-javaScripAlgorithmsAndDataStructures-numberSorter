// html elements

const sortButton = document.getElementById("sort");

// functions

// function to sort input
const sortInputArray = (event) => {
  event.preventDefault(); // buttons associated with a form element submit by default, you need to prevent that behavior. Call event.preventDefault()
  const inputValues = [
    ...document.getElementsByClassName("values-dropdown"),
  ].map((dropdown) => Number(dropdown.value)); // document.getElementsByClassName() to get all the elements with this class
  // .getElementsByClassName() returns an array-like object. You can use the spread operator to convert it into an array. [...element]
  // map function to iterate over the array to get the values from your select elements. These values will currently be strings
  // Number() function to convert those strings into numbers
  const sortedValues = bubbleSort(inputValues); // call the function to actually sort the array.
  updateUI(sortedValues); // call the function to update the display
};

// function to update the display with the sorted numbers
const updateUI = (array = []) => {
  // function that takes a single array parameter. Because you will be writing algorithms that won't immediately have a return value, set a fallback value for array to be an empty array.
  array.forEach((num, i) => {
    // To perform an action on each element in the array
    const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText = num;
  });
};

// Function to actually sort the array.
// Starts at the beginning of the array and 'bubbles up' unsorted values towards the end, iterating through the array until it is completely sorted.
const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      // for loop to iterate through the array
      // to compare elements, you'll need to use a nested for loop. This loop should iterate through every element in the array except the last one
      // console.log(array, array[j], array[j + 1]); // For debugging purposes, add a console.log() call in your inner loop
      if (array[j] > array[j + 1]) {
        // To achieve the "bubble up" result, you need to check if the current element is larger than the next element
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        // When your if condition is true, you need to swap the two elements, "bubbling" the larger element up toward the end of the array.
      }
    }
  }
  return array; // Finally, after your outer loop has finished executing, return the sorted array.
};

// event listeners

sortButton.addEventListener("click", sortInputArray);
