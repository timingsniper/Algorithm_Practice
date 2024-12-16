/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let word = s.split('');
    let vowels = "aeiouAEIOU";
    let left = 0, right = s.length - 1;
    while (left < right) {
        while (left < word.length && !vowels.includes(word[left])) left++;
        while (right >= 0 && !vowels.includes(word[right])) right--;
        if (left < right) {
            [word[left], word[right]] = [word[right], word[left]];
            left++;
            right--;
        }
    }
    return word.join('');
};
