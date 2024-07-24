/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-07-24 22:20:49
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-07-24 22:21:05
 * @FilePath: /MyLeetCodeStudy/tree/112.hasPathSum.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var hasPathSum = function(root, targetSum) {
    if(!root) {return 0}
    let res = false
    const arr = [[root, root.val]]
    while(arr.length) {
        const [n, count] = arr.pop()
        if(!n.left && !n.right && count == targetSum) {
            res = true
            break
        }
        if(n.right) {arr.push([n.right, count + n.right.val])}
        if(n.left) {arr.push([n.left, count + n.left.val])}
    }
    return res
};