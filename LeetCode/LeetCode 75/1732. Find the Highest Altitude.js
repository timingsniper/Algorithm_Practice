/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let curAlt = 0;
    let ans = 0;
    for(let i = 0; i<gain.length; i++) {
        curAlt += gain[i];
        ans = Math.max(ans, curAlt);
    }
    return ans;
};
