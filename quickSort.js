
// Time Complexity of O(nlogn)


// HOW IT WORKS 

// DIVIDE AND CONQUER

// 1)First find the “pivot” element in the array.
// 2)Start the left pointer at first element of the array.
// 3)Start the right pointer at last element of the array.
// 4)Compare the element pointing with left pointer and if it is less than the pivot element, then move the left pointer to the right (add 1 to the left index). Continue this until left side element is greater than or equal to the pivot element.
// 5)Compare the element pointing with right pointer and if it is greater than the pivot element, then move the right pointer to the left (subtract 1 to the right index). Continue this until right side element is less than or equal to the pivot element.
// 6)Check if left pointer is less than or equal to right pointer, then swap the elements in locations of these pointers.
// 7)Increment the left pointer and decrement the right pointer.
// 8)If index of left pointer is still less than the index of the right pointer, then repeat the process; else return the index of the left pointer.


// Determine Pivot Element

//But before going forward with the Quick sort, selecting the pivot element plays a major role.
// If you select the first element as the pivot element, then it gives worst performance in the sorted array.
// So, it is always advisable to pick the middle element (length of the array divided by 2) as the pivot element and we do the same.

// 1) Determine pivot as middle element. So, 7 is the pivot element.
// 2) Start left and right pointers as first and last elements of the array respectively. So, left pointer is pointing to 5 at index 0 and right pointer is pointing to 9 at index 5.
// 3) Compare element at the left pointer with the pivot element. Since, 5 < 6 shift left pointer to the right to index 1.
// 4)  Now, still 3 <6 so shift left pointer to one more index to the right. So now 7 > 6 stop incrementing the left pointer and now left pointer is at index 2.
// 5) Now, compare value at the right pointer with the pivot element. Since 9 > 6 move the right pointer to the left. Now as 2 < 6 stop moving the right pointer.
// 6) Swap both values present at left and right pointers with each other.
// 7) Move both pointers one more step.
// 8) Since 6 = 6, move pointers to one more step and stop as left pointer crosses the right pointer and return the index of the left pointer.


// THE SWAP 

function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

// THE PARTITION 
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //swap two elements
            i++;
            j--;
        }
    }
    return i;
}

// Once you perform above steps, index of the left pointer will be returned and we need to use that to divide the array and perform the Quick sort on that part. Hence, it is called Divide and Conquer algorithm.
// So, Quick sort is performed until all elements on the left array and right array are sorted.
// Note: Quick sort is performed on the same array and no new arrays are created in the process.
// So, we need to call this partition() explained above and based on that we divide the array in to parts. So here is the code where you use it,

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}
// first call to quick sort
var result = quickSort(items, 0, items.length - 1);


// ALL THE FUNCTIONS COME TOGETHER TO MAKE QUICKSORT 

var items = [5,3,7,6,2,9];
function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}
// first call to quick sort
var sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray); //prints [2,3,5,6,7,9]