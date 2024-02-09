/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let left = 0;
    let right = 0;
    for (; right < nums.length; right++) {
        if (nums[right] === 0) {
            k--;
        }
        if (k < 0) {
            k = k + 1 - nums[left]; // left에 있는 값이 0이면 0의 개수인 k에 1을 추가, 아니면 1-1
            left++;
        }
    }
    return right - left;
};
