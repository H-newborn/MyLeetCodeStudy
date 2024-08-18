/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-08-16 09:17:04
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-08-16 09:31:23
 * @FilePath: /MyLeetCodeStudy/dynamicProgram/78.subsets.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const subsets = function (nums) {
    let res = [[]]
    for (let i = 0; i < nums.length; i++) {
        const ires = []
        res.forEach(item => {
            ires.push([...item, nums[i]])
        })
        res = res.concat(ires)
    }
    return res
}