/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-08-08 10:54:29
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-08-08 11:10:50
 * @FilePath: /MyLeetCodeStudy/tu/1.deepLink.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const graph = require('./graph')
// 访问根节点
// 对根节点没访问过的相邻节点挨个进行深度优先遍历
const visited = new Set()
const dfs = (n) => {
    console.log(n)
    visited.add(n)
    graph[n].forEach(c => {
        if (!visited.has(c)) {
            dfs(c)
        }
    })
}

dfs(1)
