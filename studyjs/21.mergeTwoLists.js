/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-06-05 19:32:31
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-06-05 19:32:58
 * @FilePath: /MyLeetCodeStudy/21.mergeTwoLists.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var mergeTwoLists = function(list1, list2) {
    let p1 = list1
    let p2 = list2
    let p3 = new ListNode(0)
    const res = p3
    
    while(p1 && p2) {
        if(p1.val <= p2.val) {
            p3.next = p1
            p1 = p1.next
        } else {
            p3.next = p2
            p2 = p2.next
        }
        p3 = p3.next
    }

    if(p1) {
        p3.next = p1
    } else {
        p3.next = p2
    }

    return res.next
};