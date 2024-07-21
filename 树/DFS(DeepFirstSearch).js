/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-06-05 21:11:19
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-07-21 23:05:29
 * @FilePath: /MyLeetCodeStudy/树/广度优先遍历.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const tree = {
    val: 'a',
    children: [
        {
            val: 'b',
            children: [
                {
                    val: 'c',
                    children: []
                },
                {
                    val: 'd',
                    children: []
                },
            ]
        },
        {
            val: 'e',
            children: [
                {
                    val: 'f',
                    children: []
                },
                {
                    val: 'g',
                    children: []
                }
            ]
        }
    ],
}

const dfs = (root) => {
    console.log(root.val)
    root.children.forEach(item => {
        dfs(item)
    })
}

dfs(tree)