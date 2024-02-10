/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sumLeft = [];
    
    let sumRight = [];
    sumRight[nums.length-1] = nums[nums.length-1];
    for(let i = nums.length-2; i>=0; i--) {
        sumRight[i] = sumRight[i+1] + nums[i];
    }
    for(let i = 0; i<nums.length; i++) {
        if(i === 0) {
            sumLeft[0] = nums[0];
        }
        else {
            sumLeft[i] = sumLeft[i-1] + nums[i];
        }
        if(sumLeft[i] === sumRight[i]) {
            return i;
        }
    }
    return -1;

    
};
