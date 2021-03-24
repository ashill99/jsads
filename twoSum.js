var twoSum = function(nums, target) {
    let newArr = [];
    for(let i = 0; i < nums.length; i++) {

        let j = i+1;
        while(j < nums.length) {
            if (nums[i] + nums[j] === target) {

                newArr.push(i, j)
                return newArr;
    }
    j++
}
};
}

console.log(twoSum([1, 4, 5, 7], 8))