/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-07-21 23:52:15
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-07-21 23:55:51
 * @FilePath: /MyLeetCodeStudy/tree/inOrder.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const bt = require('./bt')

const inOrder = (root) => {
    if(!root) {return}
    if (root.left) {
        inOrder(root.left)
    }
    console.log(root.val)
    if (root.right) {
        inOrder(root.right)
    }
}

inOrder(bt)