/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-07-25 14:35:26
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-07-25 14:35:43
 * @FilePath: /MyLeetCodeStudy/tree/101.isSymmetric.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var isSymmetric = function(root) {
    if(!root) {return true}
    let res = true
    
    const sameNode = (left, right) => {
        if(!left && !right) {return}
        if((left && !right) || (!left && right) || (left.val !== right.val)) {
            res = false
            return
        }
        sameNode(left.left, right.right)
        sameNode(left.right, right.left)
    }

    sameNode(root.left, root.right)
    return res
};