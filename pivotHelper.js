// picking a pivot 

// should be roughly the median value 

// three args: array, start index, end index. 

// grab pivot from start
// store current pivot index in a variable
//loop thru the array from start til end 
// if pivot if greater than current el, incremenet pivot index var 
// and then swap the current el with the el at pivot index

// swap the starting el with pivot index,
//return pivot index 

// swap function 

function swap(array, i, j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

// my version 

function pivotHelper(arr, start=0, end=arr.length+1){
    let pivot = arr[0], index = 0;
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < pivot){
            index ++;
            let tmp = arr[i];
            arr[i] = arr[index];
            arr[index] = tmp;
        }
    }
    return index;
}

// other version 

function pivot(arr, start=0, end=arr.length+1){
    let pivot = arr[start], swapIdx = start;

    for(let i = start+1; i < arr.length; i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

// console.log(pivot([4,8,2,1,5,6,3]))

// QUICKSORT function 

// call pivot helper on array 

// when helper returns updated pivot index, recrusively call pivot helper on subarray to left of index and subarray to right

// base case occurs when u have subarray with less than 2 els


function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
    let pivotIndex = pivot(arr, left, right);
    // left 
    quickSort(arr, left, pivotIndex-1);
    // right 
    quickSort(arr, pivotIndex+1, right);
    }
    return arr;
}

console.log(quickSort([100,-3,4,6,9,1,2,5,3]))