/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-07-24 16:12:24
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-07-24 16:12:31
 * @FilePath: /MyLeetCodeStudy/tree/102.levelOrder.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var levelOrder = function(root) {
    if(!root) {return []}
    const res = []
    const q = [[root, 0]]
    while(q.length) {
        const [n, index] = q.pop()
        if(!res[index]) {
            res[index] = [n.val]
        } else {
            res[index].push(n.val)
        }
        if(n.right) {q.push([n.right, index + 1])}
        if(n.left) {q.push([n.left, index + 1])}
    }
    return res
};