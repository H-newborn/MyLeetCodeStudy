/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-07-24 00:10:34
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-07-24 00:10:43
 * @FilePath: /MyLeetCodeStudy/tree/104.maxDepth.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var maxDepth = function(root) {
    if(!root) {return 0}
    const q = [[root,1]]
    let count = 1
    while(q.length) {
        const [n,deep] = q.pop()
        if(count < deep) {count = deep}
        if(n.right) {q.push([n.right, deep + 1])}
        if(n.left) {q.push([n.left, deep + 1])}
    }
    return count
};