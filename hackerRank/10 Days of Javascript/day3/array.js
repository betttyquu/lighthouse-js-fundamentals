function getSecondLargest(nums) {
    // Complete the function
    let firstMax = nums[0];
    let secondMax = nums[0]; 
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > firstMax) {
            secondMax = firstMax;
            firstMax = nums[i];
        } else if (nums[i] != firstMax && nums[i] > secondMax) {
            secondMax = nums[i];
        }
    }
    return secondMax;
}

console.log(getSecondLargest([2,3,3,6,6,5]));