/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-07-24 00:18:56
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-07-24 00:19:11
 * @FilePath: /MyLeetCodeStudy/tree/111.minDepth.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var minDepth = function(root) {
    if(!root) {return 0}
    const q = [[root, 1]]
    let minDep = 1001
    while(q.length) {
        const [n, dep] = q.pop() 
        if(!n.right && !n.left && (minDep > 1000 || minDep > dep)) {
            minDep = dep
        }
        if(n.right) {q.push([n.right, dep + 1])}
        if(n.left) {q.push([n.left, dep + 1])}
    }
    return minDep
};