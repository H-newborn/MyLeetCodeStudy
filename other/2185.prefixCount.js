/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-08-08 09:27:38
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-08-08 09:27:46
 * @FilePath: /MyLeetCodeStudy/other/2185.prefixCount.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var prefixCount = function(words, pref) {
    let count = 0
    words.forEach(word => {
        if(word.indexOf(pref) === 0) {
            count++
        }
    })
    return count
};