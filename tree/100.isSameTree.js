/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-07-23 23:53:25
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-07-23 23:53:34
 * @FilePath: /MyLeetCodeStudy/tree/100.isSameTree.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var isSameTree = function(p, q) {
    if(!p && !q) {return true}
    let res = true
    const arr = [[p,q]]
    while(arr.length > 0) {
        const [n1,n2] = arr.pop()
        if(!n1 && !n2) {return}
        if((n1 && !n2) || (n2 && !n1)) {res=false; break}
        if(n1.val !== n2.val) {res=false; break}
        if(n1.right || n2.right) {arr.push([n1.right,n2.right])}
        if(n1.left || n2.left) {arr.push([n1.left,n2.left])}
    }
    
    return res
};