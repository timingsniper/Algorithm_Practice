/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let left = 0;
    let right = 0;
    if(s.length === 0) {
        return true;
    }

    while(left < s.length && right < t.length) {
        if(s[left] === t[right]) {
            if(left === s.length - 1){
                return true;
            }
            left++;
            right++;
        }
        else {
            right++;
        }

    }
    return false;
    
};
