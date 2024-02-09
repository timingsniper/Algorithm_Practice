/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let longest = 0;
    let left = 0;
    let right = 0;
    let zeroCount = 0;
    for(; right<nums.length; right++) {
        if(nums[right] === 0) {
            zeroCount++;
        }
        if(zeroCount > 1) {
            zeroCount -= (nums[left] === 0);
            left++;
        }
        longest = Math.max(right- left, longest);
    }
    return longest;
};
