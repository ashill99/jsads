const numIdenticalPairs = function(nums) {
    let arr = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j] ) {
                arr += 1; 
            }
        }
    }
    return arr;
};

console.log(numIdenticalPairs([1,2,3]))