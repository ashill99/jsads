function binarySearch(arr, val) {
    let start = 0, end = arr.length;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if(arr[mid] === val) return mid; 
        else if (arr[mid] < val) {
            start = mid + 1;
        } else 
        end = mid - 1;
    }
    return -1
}

console.log(binarySearch([1,2,3,4,5], 2))