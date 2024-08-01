/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-07-25 17:59:20
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-07-25 18:15:02
 * @FilePath: /MyLeetCodeStudy/linkList/143.reorderList.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var reorderList = function(head) {
    if(!head) {
        return
    }

    const arr = []
    let p = head
    while(p) {
        arr.push(p)
        p = p.next
    }

    let i = 0
    let j = arr.length - 1
    while(i < j) {
        arr[i].next = arr[j]
        i += 1
        if (i == j){ break }
        arr[j].next = arr[i]
        j -= 1
    }
    arr[i].next = null
};