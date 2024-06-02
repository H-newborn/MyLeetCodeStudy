/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-06-02 16:55:45
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-06-02 17:04:25
 * @FilePath: /MyLeetCodeStudy/234.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 1.利用快慢指针找到中间节点
// 2.反转中间节点之后的链表
// 3.链表对比
var isPalindrome = function(head) {
    if(head == null) return true

    const firstHalfEnd = endOfFirstHalf(head)
    const secondHalfStart = reverseList(firstHalfEnd)

    let p1 = head 
    let p2 = secondHalfStart
    let isHuiwen = true
    while(p1 != null && p2 != null) {
        if(p1.val !== p2.val) {
            isHuiwen = false
            break
        }
        p1 = p1.next
        p2 = p2.next
    }
    return isHuiwen
};

// 反转链表
const reverseList = (head) => {
    let prev = null
    let curr = head
    while(curr !== null) {
        let nextTemp = curr.next
        curr.next = prev
        prev = curr
        curr = nextTemp
    }
    return prev
}

// 快慢指针
const endOfFirstHalf = (head) => {
    let fast = head
    let slow = head
    while(fast) {
        fast = fast.next
        slow = slow.next
        if(fast) {
            fast = fast.next
        }
    }
    return slow
}