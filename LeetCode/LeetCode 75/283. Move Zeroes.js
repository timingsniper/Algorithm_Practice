/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left = 0;
    let right = 1;

    while(right < nums.length) {
        if(nums[left] !== 0) {
            left++; 
            right++;
        }
        else {
            if(nums[right] !== 0) {
                [nums[left], nums[right]] = [nums[right], nums[left]];
                left++;
            }
            right++;
        }
    }
    /*const nonZeros = nums.filter(value => value !== 0);
    for(let i = 0; i<nums.length; i++) {
        if(i > nonZeros.length - 1) {
            nums[i] = 0;
        }
        else {
            nums[i] = nonZeros[i];
        }
    }*/
};
