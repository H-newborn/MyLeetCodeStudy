/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-08-18 17:49:28
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-08-18 17:49:51
 * @FilePath: /MyLeetCodeStudy/backTrack/90.subsetsWithDup.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b)
    const vis = new Array(nums.length).fill(false)
    const res = []
    const backTrack = (path, l) => {
        if(path.length == l) {
            res.push(path)
            return
        }
        const set = new Set()
        for(let i = 0; i < nums.length; i++) {
            // vis防止重复选择同一下标，set防止重复选择同一数值
            if(vis[i] || set.has(nums[i])) {
                continue
            }
            // 必须是升序，防止重复
            if(path.length > 0 && nums[i] < path[path.length - 1]) {
                continue
            }
            vis[i] = true
            set.add(nums[i])
            backTrack([...path, nums[i]],l)
            vis[i] = false
        }
        set.clear()
    }
    for(let i = 0; i <= nums.length; i++) {
        backTrack([], i)
    }
    return res
};