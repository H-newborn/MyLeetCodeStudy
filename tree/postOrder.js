/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-07-21 23:59:57
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-07-22 00:03:03
 * @FilePath: /MyLeetCodeStudy/tree/postOrder.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const bt = require('./bt')

const postOrder = (root) => {
    if (!root) { return }
    postOrder(root.left)
    postOrder(root.right)
    console.log(root.val)
   
}

postOrder(bt)