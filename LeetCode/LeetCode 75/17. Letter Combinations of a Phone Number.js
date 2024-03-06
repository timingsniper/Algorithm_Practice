/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const letters = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    let ans = [];
    if(digits.length === 0) return [];
    let backTrack = (digits, cur) => {
        if(cur.length === digits.length) {
            ans.push(cur);
            return;
        }
        for(let i = 0; i<letters[digits[cur.length] - 2].length; i++) {
            let current = cur + letters[digits[cur.length] - 2].charAt(i);
            backTrack(digits, current);
        }
    }
    backTrack(digits, '');
    return ans;
};
