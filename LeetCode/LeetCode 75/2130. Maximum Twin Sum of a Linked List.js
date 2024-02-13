/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let eles = [];
    while(head) {
        eles.push(head.val);
        head = head.next;
    }
    let maxTwinSum = 0;
    for(let i = 0; i<eles.length/2; i++) {
        let curTwinSum = eles[i] + eles[eles.length-i-1];
        maxTwinSum = Math.max(maxTwinSum, curTwinSum);
    }

    return maxTwinSum;
    
};
