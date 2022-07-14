
// Time Complexity of O(nlogn)


// HOW IT WORKS 

// DIVIDE AND CONQUER

// the array is initially divided into two equal halves and then they are combined in a sorted manner. 
// We can think of it as a recursive algorithm that continuously splits the array in half until it cannot be further divided. 
// This means that if the array becomes empty or has only one element left, the dividing will stop, i.e. it is the base case to stop the recursion.
// If the array has multiple elements, we split the array into halves and recursively invoke the merge sort on each of the halves. 
// Finally, when both the halves are sorted, the merge operation is applied. Merge operation is the process of taking two smaller sorted 
// arrays and combining them to eventually make a larger one.


// Merge Sort Implentation (Recursive)
function mergeSort (unsortedArray) {
    // No need to sort the array if the array only has one element or empty
    if (unsortedArray.length <= 1) {
      return unsortedArray;
    }
    // In order to divide the array in half, we need to figure out the middle
    const middle = Math.floor(unsortedArray.length / 2);
  
    // This is where we will be dividing the array into left and right
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);
  
    // Using recursion to combine the left and right
    return merge(
      mergeSort(left), mergeSort(right)
    );
}


// The code above will be our main function that will divide the given array into smaller arrays in every iteration of the recursive call.
// Don’t forget that recursion requires a base case in order to avoid infinite recursion. In our case, we have:

if (unsortedArray.length <= 1) { 
    return unsortedArray; 
}

// After we set up the base case, we can go ahead to identify the middle index and split the array into left and right just as we had in the diagram above. 
// Then we need to merge the left side and the right side which we will implement now:

// Merge the two arrays: left and right
function merge (left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;
  
    // We will concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++; // move left array cursor
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++; // move right array cursor
      }
    }
  
    // We need to concat here because there will be one element remaining
    // from either left OR the right
    return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
}

// In the merge function above, we need to make sure we are sorting all the elements in the left and the right. The way we will do this is using a while loop. 
// In addition, we will need to make sure we keep track of which element from each left and right we are comparing by using the variables leftIndex and rightIndex.
// Within the while loop, we compare element in the left at leftIndex and element in the right at rightIndex. 
// We can push the smaller of the two into our result array and move our cursor (leftIndex/rightIndex) to make sure we aren’t duplicating any comparisons.

// Finally, we need to concatenate the result array with both left.slice(leftIndex) and right.slice(rightIndex). 
// This is very important! If we don’t do this last step here, we will have an incomplete list of elements at the end
// because the while loop condition will fail once any one of the two cursors reach the end meaning the last element in either left or the right isn’t inserted into the result array.


 // ALL TOGETHER NOW!

function mergeSort (unsortedArray) {
    // No need to sort the array if the array only has one element or empty
    if (unsortedArray.length <= 1) {
      return unsortedArray;
    }
    // In order to divide the array in half, we need to figure out the middle
    const middle = Math.floor(unsortedArray.length / 2);
  
    // This is where we will be dividing the array into left and right
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);
  
    // Using recursion to combine the left and right
    return merge(
      mergeSort(left), mergeSort(right)
    );
  }
  
  // Merge the two arrays: left and right
  function merge (left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;
  
    // We will concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++; // move left array cursor
      } else {
        resultArray.push(right[rightIndex]);
              rightIndex++; // move right array cursor
      }
    }
  
    // We need to concat to the resultArray because there will be one element left over after the while loop
    return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
  }
  
  