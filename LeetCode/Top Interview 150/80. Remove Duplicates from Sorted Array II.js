/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let curCount = 0, curChar = nums[0];
    for(let i = 0; i<nums.length; i++) {
       if(curChar === nums[i]) {
           curCount++;
           if(curCount > 2) {
               nums.splice(i, 1);
               i--;
           }
       }
       else {
           curCount = 1;
           curChar = nums[i];
       }
    }
    return nums.length;
};
