function maxSubArray(nums) {
    let currentSum = nums[0]; 
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // Decide karna hai ki naye subarray start kare ya continue kare
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        
        // Maximum update karo
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

let nums = [-2,1,-3,4,-1,2,1,-5,4];

console.log(maxSubArray(nums));