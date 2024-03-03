/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let ans = {};
    for(let i = 0; i<nums.length; i++) {
        ans[nums[i]] = (ans[nums[i]] || 0) + 1;
        if(ans[nums[i]] > Math.floor(nums.length/2)) return nums[i];
    }
};
