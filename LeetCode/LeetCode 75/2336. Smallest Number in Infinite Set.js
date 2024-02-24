class SmallestInfiniteSet {
    constructor() {
        this.pq = new MinPriorityQueue();
        this.notHaving = new Set();
        for(let i = 1; i<=1000; i++) {
            this.pq.enqueue(i);
        }
    }

    popSmallest() {
        let {element} = this.pq.dequeue();
        this.notHaving.add(element);
        return element;
    }

    addBack(num) {
        if(this.notHaving.has(num)) {
            this.pq.enqueue(num);
            this.notHaving.delete(num);
        }
    }
}
/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
