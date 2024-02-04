/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let ans = "";
    let i = 0, j = 0;

    while(i<word1.length || j<word2.length) {
        if(i < word1.length){
            ans += word1[i];
            i++;
        }
        if(j < word2.length) {
            ans += word2[j];
            j++;
        }
    }
    return ans;
};
