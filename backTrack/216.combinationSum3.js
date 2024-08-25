/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-08-20 11:29:40
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-08-20 11:39:02
 * @FilePath: /MyLeetCodeStudy/backTrack/41.combinationSum3.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const res = []
    // 防止重复选择同一个下标
    const vis = new Array(n).fill(false)
    const backTrack = (path, total) => {
        if((total === n) && (path.length === k)) {
            res.push(path)
            return
        }
        if(total > n) {
            return
        }
        // 防止相同数字重复选择
        const set = new Set()
        for(let i = 1; i <= 9; i++) {
            if(vis[i-1] || set.has(i) || (path.length > 0 && path[path.length - 1] > i)) {
                continue
            }
            vis[i - 1] = true
            set.add(i)
            backTrack([...path, i], total + i)
            vis[i - 1] = false
        }
        set.clear()
    }
    backTrack([], 0)
    return res
};