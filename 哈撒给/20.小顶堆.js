/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-07-04 09:16:08
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-08-12 13:49:08
 * @FilePath: /MyLeetCodeStudy/哈撒给/20.小顶堆.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// js 用数组表示堆，堆是完全二叉树
// 左侧子节点的位置是 2 * index + 1
// 右侧子节点的位置是 2 * index + 2
// 父节点位置是(index - 1)/2

// 堆能高效、快速的找出最大值和最小值，时间复杂度：O(1)
// 找出第K个最大（小）元素

class MinHeap {
    constructor() {
        this.heap = []
    }
    swap(i1, i2) {
        const temp = this.heap[i1]
        this.heap[i1] = this.heap[i2]
        this.heap[i2] = temp
    }
    getParentIndex(i) {
        return (i - 1) >> 1
    }
    shiftUp(index) {
        if (index == 0) { return }
        const parentIndex = this.getParentIndex(index)
        if (this.heap[parentIndex] > this.heap[index]) {
            this.swap(parentIndex, index)
            this.shiftUp(parentIndex)
        }
    }
    // 插入节点，不断上移
    insert(value) {
        this.heap.push(value)
        this.shiftUp(this.heap.length - 1)
    }
    getLeftIndex(i) {
        return i * 2 + 1
    }
    getRightIndex(i) {
        return i * 2 + 2
    }
    shiftDown(index) {
        const leftIndex = this.getLeftIndex(index)
        const rightIndex = this.getRightIndex(index)
        if (this.heap[leftIndex] < this.heap[index]) {
            this.swap(leftIndex, index)
            this.shiftDown(leftIndex)
        }
        if (this.heap[rightIndex] < this.heap[index]) {
            this.swap(rightIndex, index)
            this.shiftDown(rightIndex)
        }
    }
    // 删除堆顶元素，下移节点
    pop() {
        this.heap[0] = this.heap.pop()
        this.shiftDown(0)
    }
    // 
    peek() {
        return this.heap[0]
    }
    size() {
        return this.heap.length
    }
}

const heap = new MinHeap()

heap.insert(2)
heap.insert(4)
heap.insert(1)
heap.insert(3)
