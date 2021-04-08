// combo of two things - merging and sorted 
// exploits fact that arrays of 0 or 1 element are always sorted 
// works by decomposing an array into smaller arrays of 0 or 1 elements, then building newly sorted array 

// [8, 3, 5, 4, 7, 6, 1, 2 ]



// create an empty array, take a look at the smallest values in each input array 
// use while loops 

// while there are still values we haven't looked at....
// - if the value in the first array is smaller than the value in the second array
// push the value in the first array into our results and mve on to next value in first array

// - if the value in first array is larger than val second,
// push the val in second into our results and move onto next val in second


function mergeArr(arr1, arr2){
    let i = 0, j = 0, results = [];
    while(i < arr1.length && j < arr2.length) {
            if (arr2[j] > arr1[i]){
                results.push(arr1[i]);
                i++;
            } else {
                results.push(arr2[j]);
                j++;
        }
    }
while(i < arr1.length) {
    results.push(arr1[i])
    i++;
}
while(j < arr2.length) {
    results.push(arr2[j])
    j++;
}
    return results
}

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return mergeArr(left,right);
    
}

console.log(mergeSort([1,10,502,14,99,200,100]))