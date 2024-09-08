/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-08-26 17:51:39
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-08-27 11:54:39
 * @FilePath: /MyLeetCodeStudy/test.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
head = {
    val: 'V',
    next: {
        val: 'u',
        next: {
            val: '、',
            next: {
                val: 'R',
                next: {
                    val: 'e',
                    next: {
                        val: '、',
                        next: {
                            val: 'E',
                            next: null
                        }
                    }
                }
            }
        }
    }
}
function transferList(head) {
    let p = p1 = head
    const arr = [p1]
    while (p) {
        if (p.val === '、') {
            let temp = p.next
            p = null
            arr.push(temp)
            p = temp
            continue
        }
        p = p.next
    }
    
    return arr
    // let resultList = 
    // while (arr.length > 0) {
    //     const q = arr.pop()
    //     // if(p) {p.next = q}
        
    //     while (q) {
    //         q = q.next
    //     }

    // }
}
console.log(transferList(head))
