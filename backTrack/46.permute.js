/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-07-21 16:50:04
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-07-21 16:50:14
 * @FilePath: /MyLeetCodeStudy/46.permute.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 递归 回溯算法
var permute = function(nums) {
    const res = []
    const backTrack = (path) => {
        if(path.length === nums.length) {
            res.push(path)
            return
        }
        nums.forEach(item => {
            if(path.includes(item)) {
                return
            }
            backTrack([...path, item])
        })
    }
    backTrack([])
    return res
};