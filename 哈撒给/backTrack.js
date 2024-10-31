/*
 * @Author: This is CodeMan
 */
const _permute = string => {
    let res = []
    let biaozhi = new Array(string.length).fill(false)
    function track(str) {
        console.log(str)
        if(str.length === string.length) {
            res.push(str)
            return
        }
        for(let i = 0; i < string.length; i++) {
            if(str.indexOf(string[i]) === -1) {
                track(str + string[i])
            }
        }
    }
    track('')
    console.log(res)
    return res
}

_permute('abc')