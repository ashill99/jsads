function twoNumberSum(arr, tar) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === tar) {
             return [arr[i], arr[j]];
            }
        }
    }
    return [];
}

console.log(twoNumberSum([1,2,3,4], 5))