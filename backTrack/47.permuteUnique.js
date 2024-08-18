/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-08-13 09:17:35
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-08-18 16:33:07
 * @FilePath: /MyLeetCodeStudy/backTrack/47.permuteUnique.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const res = []
    const vis = new Array(nums.length).fill(false)
    const backTrack = (path) => {
        if(path.length === nums.length) {
            res.push(path)
            return
        }
        const set = new Set()
        for(let i = 0; i < nums.length; i++) {
            if(set.has(nums[i]) || vis[i]) {
                continue
            }
            vis[i] = true
            set.add(nums[i])
            backTrack([...path, nums[i]])
            vis[i] = false
        }
        set.clear()
    }
    backTrack([])
    return res
};