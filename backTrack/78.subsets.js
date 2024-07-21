/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-07-21 17:50:04
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-07-21 17:50:20
 * @FilePath: /MyLeetCodeStudy/backTrack/78.subsets.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 递归 回溯算法
var subsets = function(nums) {
    const res = []
    const backTrack = (path, l) => {
        if(path.length == l) {
            res.push(path)
            return
        }
        nums.forEach(item => {
            if(path.length > 0) {
                if(item > path[path.length - 1]) {
                    backTrack([...path, item],l)
                }
            } else {
                backTrack([item],l)
            }
        })
    }
    for(let i = 0; i <= nums.length; i++) {
        backTrack([], i)
    }
    return res
};