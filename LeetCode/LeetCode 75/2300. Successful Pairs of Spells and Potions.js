/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    let ans = [];
    potions.sort((a,b) => a-b);
    let maxPotion = potions[potions.length - 1];

    let lowerBound = (arr, key) => {
        let low = 0, high = arr.length;
        while(low < high) {
            const mid = Math.floor((low+high)/2);
            if(arr[mid] < key) {
                low = mid + 1;
            }
            else {
                high = mid;
            }
        }
        return low;
    }

    for(i of spells) {
        let ceil = success/i;
        let pivot = potions.length/2;
        if(ceil > maxPotion) {
            ans.push(0);
            continue;
        }
        const index = lowerBound(potions, ceil);
        ans.push(potions.length - index);
    }
    return ans;
};
