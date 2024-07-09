/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-06-05 21:05:21
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-07-09 18:56:38
 * @FilePath: /MyLeetCodeStudy/哈撒给排序/1.冒泡排序.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// const {describe, expect, test} = require('@jest/globals') 
import {describe, expect, test} from '@jest/globals';
// 冒泡排序，两两 向上 冒泡
function bubbleSort(arr) {
    const len = arr.length
    for (let i = 0; i < len; i++) {
        for (let j = 1; j < len - 1 - i; j++) {
            if (arr[j + 1] > arr[j]) {
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
}

// describe('sum module', () => {
//   test('adds 1 + 2 to equal 3', () => {
//     expect(bubbleSort(1,2,4,3,5,1)).toBe()
//   });
// });