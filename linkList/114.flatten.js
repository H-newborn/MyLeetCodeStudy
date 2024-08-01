/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-07-26 10:23:49
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-07-27 10:48:11
 * @FilePath: /MyLeetCodeStudy/linkList/114.flatten.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var flatten = function(root) {
    if(!root) {return root}
    const tree = [root]
    const arr = []
    while(tree.length) {
        const n = tree.pop()
        arr.push(n)
        if(n.right) {
            tree.push(n.right)
        }
        if(n.left) {
            tree.push(n.left)
        }
    }
  
    let q = root
    arr.forEach(item => {
        q.right = item
        if(q.left) {
            q.left = null
        }
        q = q.right
    })
    if(q.left || q.right) {
        q.left = null
        q.right = null
    }
};

// 空间复杂度O(1)
var flatten1 = function(root) {
    if(!root) {return root}
    while(root) {
        if(!root.left) {
            root = root.right
        } else {
            let n = root.left
            while(n.right) {
                n = n.right
            }
            n.right = root.right
            root.right = root.left
            root.left = null
            root = root.right
        }
    }
};