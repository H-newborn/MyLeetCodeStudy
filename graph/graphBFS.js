/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-08-08 10:54:29
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-08-08 11:30:03
 * @FilePath: /MyLeetCodeStudy/tu/1.deepLink.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const graph = require('./graph')
// 新建一个队列，把根节点入队
// 把队头出队并访问
// 把队头的没访问过的相邻节点入队
const visited = new Set()
const bfs = (n) => {
    const q = [n]
    visited.add(n)
    while (q.length) {
        const n = q.shift()
        console.log(n)
        graph[n].forEach(c => {
            if (!visited.has(c)) {
                q.push(c)
                visited.add(c)
            }
        })
    }
}

bfs(1)
