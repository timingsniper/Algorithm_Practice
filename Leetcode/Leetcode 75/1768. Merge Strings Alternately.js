/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let onePointer = 0, twoPointer = 0, oneLonger = word1.length > word2.length;
    let ans = '';
    while (onePointer < word1.length && twoPointer < word2.length) {
        ans += word1[onePointer];
        ans += word2[twoPointer];
        onePointer++;
        twoPointer++;
    }
    if(word1.length !== word2.length) {
        if (oneLonger) {
            ans += word1.substr(onePointer, word1.length);
        }
        else {
            ans += word2.substr(twoPointer, word2.length);
        }
    }
    return ans;
};
