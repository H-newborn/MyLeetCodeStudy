/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-08-19 14:30:54
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-08-19 14:31:05
 * @FilePath: /MyLeetCodeStudy/backTrack/39.combinationSum.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var combinationSum = function(candidates, target) {
    const res = []
    const backTrack = (path, total) => {
        if(total === target) {
            res.push(path)
            return
        }
        if(total > target) {
            return
        }
        for(let i = 0; i < candidates.length; i++) {
            if(path.length > 0 && candidates[i] < path[path.length - 1]) {
                continue
            }
            backTrack([...path, candidates[i]], total + candidates[i])
        }
    }
    backTrack([], 0)
    return res
};