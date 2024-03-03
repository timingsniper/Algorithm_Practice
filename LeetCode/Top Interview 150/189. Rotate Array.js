/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    k = k % nums.length;

    nums.reverse();

    for (let i = 0; i < k / 2; i++) {
        [nums[i], nums[k - i - 1]] = [nums[k - i - 1], nums[i]];
    }

    for (let i = 0; i < (nums.length - k) / 2; i++) {
        [nums[k + i], nums[nums.length - i - 1]] = [nums[nums.length - i - 1], nums[k + i]];
    }
};
