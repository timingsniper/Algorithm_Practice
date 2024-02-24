/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let pq = new MinPriorityQueue();
    for(i of nums) {
        pq.enqueue(i);
        if(pq.size() > k) {
            pq.dequeue();
        }
    }
    return pq.front().element;
};
