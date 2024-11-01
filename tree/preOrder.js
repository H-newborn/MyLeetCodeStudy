/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-07-21 23:44:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-09-11 09:22:45
 * @FilePath: /MyLeetCodeStudy/tree/preOrder.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const bt = require('./bt')

// 递归版
const preOrder = (root) => {
    if(!root) {return}
    console.log(root.val)
    preOrder(root.left)
    preOrder(root.right)
}

preOrder(bt)

// 非递归版
const preOrder1 = (root) => {
    let p = [root]
    while (p.length) {
        const q = p.pop()
        console.log(q.val)
        if (q.right) {
            p.push(q.right)
        }
        if (q.left) {
            p.push(q.left)            
        }
    }
}

preOrder1(bt)
