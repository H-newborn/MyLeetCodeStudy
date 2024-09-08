/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-08-27 14:26:39
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-08-27 14:27:59
 * @FilePath: /MyLeetCodeStudy/linkList/141.hasCycle.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function hasCycle(head: ListNode | null): boolean {
    let slowHead = head
    let fastHead = head
    let hasCycle = false
    while(fastHead) {
        fastHead = fastHead.next
        if (slowHead) slowHead = slowHead.next
        
        if(fastHead) {
            fastHead = fastHead.next
        } else {
            break
        }
        if(fastHead === slowHead) {
            hasCycle = true
            break
        }
    }
    return hasCycle
};