/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let ans = [];
    let backtrack = (start, curAns, curSum) => {
        if(k === curAns.length && curSum === n) {
            ans.push(curAns.slice());
            return;
        }
        if(curAns.length >= k || curSum >= n) {
            return;
        }

        for(let i = start; i<=9; i++) {
            curAns.push(i);
            backtrack(i+1, curAns, curSum + i);
            curAns.pop();
        }
    }
    backtrack(1, [], 0);
    return ans;
};
