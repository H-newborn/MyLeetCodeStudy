/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-08-05 10:33:42
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-08-05 10:41:34
 * @FilePath: /MyLeetCodeStudy/tree/144.mirrorTree.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const mirrorTree = (root) => {
    if(!root) {return null}
    const temp = root.right
    root.right = mirrorTree(root.left)
    root.left = mirrorTree(temp)
    return root
}