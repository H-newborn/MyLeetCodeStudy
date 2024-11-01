/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-08-08 14:11:27
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-08-08 14:11:38
 * @FilePath: /MyLeetCodeStudy/graph/65.isNumber.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var isNumber = function(s) {
    const graph = {
        0: { 'blank': 0, 'sign': 1, '.': 2, 'digit': 6 },
        1: { 'digit': 6, '.': 2 },
        2: { 'digit': 3 },
        3: { 'digit': 3, 'e': 4, 'E': 4 },
        4: { 'digit': 5, 'sign': 7 },
        5: { 'digit': 5 },
        6: { 'digit': 6, '.':3, 'e':4, 'E': 4 },
        7: { 'digit': 5 }
    }

    let state = 0
    for(c of s.trim()) {
        if(c >= '0' && c <= '9') {
            c = 'digit'
        } else if(c === ' ') {
            c = 'blank'
        } else if(c === '+' || c === '-') {
            c = 'sign'
        }
        state = graph[state][c]
        if(state === undefined) {
            return false
        }
    }
    if(state == 3 || state == 5 || state == 6) {
        return true
    }
    return false
};