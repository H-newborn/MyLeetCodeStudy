/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-08-13 14:41:13
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-08-13 15:57:04
 * @FilePath: /MyLeetCodeStudy/backTrack/257.binaryTreePaths.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const binaryTreePaths = (root) => {
    const paths = []
    const backTrackTree = (root, path) => {
        if (!root) { return }
        path += root.val.toString()
        if (!root.left && !root.right) {
            paths.push(path)
        } else {
            path += '->'
            if (root.left) {
                backTrackTree(root.left, path)
            }
            if (root.right) {
                backTrackTree(root.right, path)
            }
        }
    }
    backTrackTree(root, '')
    return paths
}