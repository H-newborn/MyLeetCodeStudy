/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-06-05 21:04:45
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-07-09 18:44:41
 * @FilePath: /MyLeetCodeStudy/哈撒给排序/6.堆排序.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class MinHeap {
    constructor() {
        this.heap = []
    }
    swap(i1, i2) {
        const temp = this.heap[i1]
        this.heap[i1] = this.heap[i2]
        this.heap[i2] = temp
    }
    getParantIndex(i) {
        return (i - 1) >> 1
    }
    shiftUp(i) {
        if(i == 0) { return }
        const parentIndex = this.getParantIndex(i)
        if (this.heap[parentIndex] > this.heap[i]) {
            this.swap(parentIndex, i)
            this.shiftUp(parentIndex)
        }
    }
    insert(v) {
        this.heap.push(v)
        this.heap.shiftUp(this.heap.length - 1)
    }
    getLeftIndex(i) {
        return i * 2 + 1
    }
    getRightIndex(i) {
        return i * 2 + 2
    }
    shiftDown(i) {
        const leftIndex = this.getLeftIndex(i)
        const rightIndex = this.getRightIndex(i)
        if (this.heap[leftIndex] > this.heap[i]) {
            this.swap(leftIndex, i)
            this.shiftDown(leftIndex)
        }
        if (this.heap[rightIndex] > this.heap[i]) {
            this.swap(rightIndex, i)
            this.shiftDown(rightIndex)
        }
    }
    pop() {
        this.heap[0] = this.heap.pop()
        this.shiftDown(0)
    }
    size() {
        return this.heap.length
    }
    peek() {
        return this.heap[0]
    }
}