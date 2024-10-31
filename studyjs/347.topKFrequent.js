/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-07-10 22:12:59
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-07-10 22:13:06
 * @FilePath: /MyLeetCodeStudy/347.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
class MinHeap {
    constructor() {
        this.heap = []
    }
    getParentIndex(i) {
        return (i - 1) >> 1
    }
    swap(i1,i2) {
        const temp = this.heap[i1]
        this.heap[i1] = this.heap[i2]
        this.heap[i2] = temp
    }
    shiftUp(i) {
        const parentIndex = this.getParentIndex(i)
        if((this.heap[parentIndex] && this.heap[parentIndex][1]) > (this.heap[i] && this.heap[i][1])) {
            this.swap(parentIndex, i)
            this.shiftUp(parentIndex)
        }
    }
    insert(v) {
        this.heap.push(v)
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
        if ((this.heap[leftIndex] && this.heap[leftIndex][1]) < (this.heap[index] && this.heap[index][1])) {
            this.swap(leftIndex, index)
            this.shiftDown(leftIndex)
        }
        if ((this.heap[rightIndex] && this.heap[rightIndex][1]) < (this.heap[index] && this.heap[index][1])) {
            this.swap(rightIndex, index)
            this.shiftDown(rightIndex)
        }
    }
    pop() {
        this.heap[0] = this.heap.pop()
        this.shiftDown(0)
    }
    peek() {
        return this.heap[0]
    }
    size() {
        return this.heap.length
    }
}

var topKFrequent = function(nums, k) {
    const map = new Map()
    nums.forEach(num => {
        if(map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    })
    const arr = Array.from(map)
    const h = new MinHeap()

    arr.forEach(item => {
        h.insert(item)
        if(h.size() > k) {
            h.pop()
        }
    })
    return h.heap.map(item => {return item[0]})
};