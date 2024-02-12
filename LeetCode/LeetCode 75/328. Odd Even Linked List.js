/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if(head === null) {
        return head;
    }
    let evenHead = head.next;
    let evenCurrent = head.next;
    let current = head;
    while(current !== null && current.next !== null && evenCurrent !== null && evenCurrent.next !== null) {
        current.next = current.next.next;
        evenCurrent.next = evenCurrent.next.next;
        current = current.next;
        evenCurrent = evenCurrent.next;
    }
    current.next = evenHead;
    return head;
    
};
