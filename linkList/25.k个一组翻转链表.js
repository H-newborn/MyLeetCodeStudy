/*
 * @Author: This is CodeMan
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if(k===1) {
        return head
    }
    let p = head
    let count = 0
    // 遍历链表，计算链表长度
    while(p) {
        count++
        p = p.next
    }
    
    let nums = Math.floor(count/k)
    let otherNums = count%k
    let resHead = null
    let nextHead = head
    let tempTail = null
    
    while(nums > 0 && nextHead) {
        // 翻转链表
        const [head, tail, next] = revertList(nextHead, k)
        // 非第一次
        if(tempTail) {
            tempTail.next = head
        }
        tempTail = tail
        
        if(next) {
            nextHead = next
        }

        // 初始化
        if(nums === Math.floor(count/k)) {
            // 返回翻转后的头节点
            resHead = head
        }

        nums--
    }

    if(nextHead && otherNums > 0) {
        tempTail.next = nextHead
    }
    
    return resHead
};

function revertList(head, number) {
    let num = number
    let pre = null
    let curr = head
    let tail = head
    while(curr && num > 0) {
        let temp = curr.next
        curr.next = pre
        pre = curr
        curr = temp
        num--
    }
    return [pre, tail, curr]
}