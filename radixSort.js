function getDigit(num,i){
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// console.log(getDigit(713,2))

function digitCount(num){
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums){
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

// console.log(mostDigits([423,66666,88,999]))

function radixSort(nums){
    let maxDig = mostDigits(nums);
    for(let k = 0; k < maxDig; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i <nums.length; i++){
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
                }
            nums = [].concat(...digitBuckets)
            // console.log(nums)
        }
        return nums
}

console.log(radixSort([23,345,5467,12,2345,9825]))