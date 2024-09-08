/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-09-02 10:07:12
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-09-02 10:07:51
 * @FilePath: /MyLeetCodeStudy/linkList/328.oddEvenList.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function oddEvenList(head: ListNode | null): ListNode | null {
    let p = head
    let oddHead, evenHead
    let oddNumberList = oddHead = new ListNode(0)
    let evenNumberList = evenHead = new ListNode(0)
    let count = 1
    while(p) {
        if(count%2 === 1) { // 奇数
            oddNumberList.next = p
            oddNumberList = oddNumberList.next
        } else { // 偶数
            evenNumberList.next = p
            evenNumberList = evenNumberList.next
        }
        p = p.next
        count++
    }

    evenNumberList.next = null
    oddNumberList.next = evenHead.next

    return oddHead.next
};