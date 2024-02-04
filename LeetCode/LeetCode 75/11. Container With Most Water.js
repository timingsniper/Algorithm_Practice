/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while(left !== right) {
        let area = (right-left)*Math.min(height[left], height[right]);
        maxArea = maxArea > area ? maxArea : area;
        if(height[left] >= height[right]) {
            right--;
        }
        else {
            left++;
        }
    }
    return maxArea;

    
};
