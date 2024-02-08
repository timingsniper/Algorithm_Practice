/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let vowels = ['a', 'i', 'u', 'e', 'o'];
    let ans = 0;
    for(let i = 0; i<k; i++) {
        if(vowels.includes(s[i])) {
            ans++;
        }
    }
    if(ans === k) return ans;
    let newSum = ans;
    for(let i = k; i<s.length; i++) {
        if(vowels.includes(s[i-k])) {
            newSum -= 1;
        }
        newSum = vowels.includes(s[i]) ? newSum + 1 : newSum;
        ans = Math.max(ans, newSum);
    }
    return ans;
};
