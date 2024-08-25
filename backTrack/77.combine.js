/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-08-19 14:00:52
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-08-19 14:01:00
 * @FilePath: /MyLeetCodeStudy/backTrack/77.combine.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const res = []
    const vis = new Array(n).fill(false)
    const backTrack = (path) => {
        if(path.length === k) {
            res.push(path)
            return
        }
        for(let i = 1; i <= n; i++) {
            if(vis[i - 1] || (path.length > 0 && path[path.length - 1] > i)) {
                continue
            }
            vis[i-1] = true
            backTrack([...path, i])
            vis[i-1] = false
        }
    }
    backTrack([])
    return res
};