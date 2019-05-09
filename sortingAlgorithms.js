// Bubble sort
// On each After iteration: bubble the largest value to the current end of the array

const bubbleSort = (array) => {
  console.info(`Bubble Sort`);
  const sortedArray = array.slice();
  console.log(`Initial:`, sortedArray);

  for (let i = sortedArray.length - 1; i > 0; i--) {
    let largestElementIndex = i;

    for (let j = 0; j < i; j++) {
      if (sortedArray[j] > sortedArray[largestElementIndex]) {
        largestElementIndex = j;
      }
    }

    [sortedArray[i], sortedArray[largestElementIndex]] = [sortedArray[largestElementIndex], sortedArray[i]];
    console.log(`After iteration:`, sortedArray);
  }

  return sortedArray;
};

console.log(bubbleSort([4, 50, -1, 20, -30]));
console.log(``);

// Selection sort
// On each After iteration: select the smallest element to the current start of the array

const selectionSort = (array) => {
  console.info(`Selection Sort`);
  const sortedArray = array.slice();
  console.log(`Initial:`, sortedArray);

  for (let i = 0; i < sortedArray.length - 1; i++) {
    let smallestElementIndex = i;

    for (let j = i + 1; j < sortedArray.length; j++) {
      if (sortedArray[j] < sortedArray[smallestElementIndex]) {
        smallestElementIndex = j;
      }
    }

    [sortedArray[i], sortedArray[smallestElementIndex]] = [sortedArray[smallestElementIndex], sortedArray[i]];
    console.log(`After iteration:`, sortedArray);
  }

  return sortedArray;
};

console.log(selectionSort([4, 50, -1, 20, -30]));
console.log(``);

// Insertion sort
// On each After iteration: select the smallest element to the current start of the array

const insertionSort = (array) => {
  console.info(`Insertion Sort`);
  const sortedArray = array.slice();
  console.log(`Initial:`, sortedArray);

  for (let i = 1; i < sortedArray.length; i++) {
    let currentElementIndex = i;

    for (let j = i - 1; j >= 0; j--) {
      if (sortedArray[currentElementIndex] < sortedArray[j]) {
        [sortedArray[currentElementIndex], sortedArray[j]] = [sortedArray[j], sortedArray[currentElementIndex]];
        currentElementIndex = j;
      }
    }

    console.log(`After iteration:`, sortedArray);
  }

  return sortedArray;
};

console.log(insertionSort([4, 50, -1, 20, -30]));
console.log(``);