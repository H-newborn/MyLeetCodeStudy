/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-07-27 17:39:15
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-07-27 17:58:40
 * @FilePath: /MyLeetCodeStudy/linkList/116.connect.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var connect = function(root) {
    if(!root) {return root}
    const q = [root]
    while(q.length) {
        const length = q.length
        for(let i = 0; i < length; i++) {
            const n = q.shift()
            if(i < length - 1) {
                n.next = q[0]
            }
            if(n.left) {
                q.push(n.left)
            }
            if(n.right) {
                q.push(n.right)
            }
        }
    }
    return root
};