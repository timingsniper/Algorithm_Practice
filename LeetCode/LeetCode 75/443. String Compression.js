/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let i = 0;
    let j = 0;
    while(i<chars.length) {
        let groupLen = 0;
        let curChar = chars[i];
        while(chars[i] === curChar && i < chars.length) {
            groupLen++;
            i++;
        }
        chars[j++] = curChar;
        if(groupLen > 1) {
            for(let digit of groupLen.toString()) {
                chars[j++] = digit;
            }
        }
    }
    return j;
};
