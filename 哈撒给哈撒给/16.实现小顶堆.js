/*
 * @Author: This is CodeMan
 */
/*
 * @Author: This is CodeMan
 */
class minHeap {
    constructor() {
        this.heap = []
    }
    insert(value) {
        this.heap.push(value)
        this.shiftTop(this.heap.length - 1)
    }
}