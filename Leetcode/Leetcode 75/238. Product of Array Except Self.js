/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    let left = new Array(n).fill(1);
    let right = new Array(n).fill(1);
    let ans = [];

    for (let i = 1; i<nums.length; i++) {
        left[i] = left[i-1] * nums[i-1];
    }

    for (let i = n - 2; i >= 0; i--) {
        right[i] = right[i+1] * nums[i+1];
    }
    
    for (let i = 0; i<n; i++) {
        ans[i] = left[i] * right[i];
    }
    return ans;
};
