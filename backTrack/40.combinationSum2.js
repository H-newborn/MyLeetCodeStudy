/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-08-20 10:12:29
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-08-20 10:12:40
 * @FilePath: /MyLeetCodeStudy/backTrack/40.combinationSum2.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b) => {return a - b})
    const res = []
    const vis = new Array(candidates.length).fill(false)
    const backTrack = (path, total) => {
        if(total === target) {
            res.push(path)
            return
        }
        if(total > target) {
            return
        }
        const set = new Set()
        for(let i = 0; i < candidates.length; i++) {
            if(set.has(candidates[i]) || vis[i] || (path.length > 0 && path[path.length - 1] > candidates[i])) {
                continue
            }
            vis[i] = true
            set.add(candidates[i])
            backTrack([...path, candidates[i]], total + candidates[i])
            vis[i] = false
        }
        set.clear()
    }
    backTrack([], 0)
    return res
};