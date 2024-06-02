/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-06-02 17:01:49
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-06-02 17:06:35
 * @FilePath: /MyLeetCodeStudy/61.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 1.遍历链表，查找链表长度，拼接链表成环状
// 2.找到旋转后的链表尾部，剪短链表
var rotateRight = function(head, k) {
    if(k == 0) {return head}
    if(!head) {return head}
    let p1 = head
    let p2 = head
    let count = 1
    let length = 0
    while(p1) {
        if (p1.next) {
            p1 = p1.next
        } else {
            p1.next = head
            p1 = p1.next
            length = count
            break
        }
        count++
    }

    let a = length -1 - (k % length)
    while(a != 0 && a > 0) {
        p1 = p1.next
        a--
    }
    p2 = p1.next
    p1.next = null
    return p2
};