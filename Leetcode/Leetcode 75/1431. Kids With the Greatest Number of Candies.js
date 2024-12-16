/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxVal = Math.max(...candies);
    let ans = [];
    for (num of candies) {
        ans.push(num + extraCandies >= maxVal);
    }
    return ans;
};
