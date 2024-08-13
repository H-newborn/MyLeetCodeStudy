/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-08-08 09:46:25
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-08-08 09:46:33
 * @FilePath: /MyLeetCodeStudy/other/3069.resultArray.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var resultArray = function(nums) {
    const arr1 = []
    const arr2 = []
    nums.forEach((item, index) => {
        if(!arr1.length && index === 0) {
            arr1.push(item)
        }
        if(!arr2.length && index === 1) {
            arr2.push(item)
        }
        if(index > 1) {
            if(arr1[arr1.length - 1] > arr2[arr2.length - 1]) {
                arr1.push(item)
            } else {
                arr2.push(item)
            }
        }
    })
    return [...arr1, ...arr2]
};