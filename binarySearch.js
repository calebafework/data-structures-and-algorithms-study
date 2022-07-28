// Binary Search

// What is binary search?

// Binary Search is a searching algorithm for finding an element's position in a sorted array. 
// In this approach, the element is always searched in the middle of a portion of an array. Binary search can be implemented only on a sorted list of items.
// If the elements are not sorted already, we need to sort them first.


// Complexity  O(1)


// Why is space complexity of binary search O 1?

// In an iterative implementation of Binary Search, the space complexity will be O(1). 
// This is because we need two variable to keep track of the range of elements that are to be checked. 
// No other data is needed. In a recursive implementation of Binary Search, the space complexity will be O(logN).

// Example 1

// Binary Search Algorithm can be implemented in the following two ways

// Iterative Method
// Recursive Method

// 1. Iteration Method

    binarySearch(arr, x, low, high)
        repeat till low = high
               mid = (low + high)/2
                   if (x == arr[mid])
                   return mid
   
                   else if (x > arr[mid]) // x is on the right side
                       low = mid + 1
   
                   else                  // x is on the left side
                       high = mid - 1
// 2. Recursive Method (The recursive method follows the divide and conquers approach)

    binarySearch(arr, x, low, high)
           if low > high
               return False 
   
           else
               mid = (low + high) / 2 
                   if x == arr[mid]
                   return mid
       
               else if x > arr[mid]        // x is on the right side
                   return binarySearch(arr, x, mid + 1, high)
               
               else                        // x is on the right side
                   return binarySearch(arr, x, low, mid - 1)


// Be aware and check for overflow/underflow
// Negative numbers

// Questions involving binary representations and bitwise operations are asked sometimes and you must be absolutely familiar 
// with how to convert a number from decimal form into binary form (and vice versa) in your chosen programming language.