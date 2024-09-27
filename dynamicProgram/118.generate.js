/*
 * @Author: This is CodeMan
 */
function generate(numRows) {
    if(numRows === 1) {return [[1]]}
    if(numRows === 2) {return [[1], [1,1]]}
    let res = [[1], [1,1]]
    for(let i = 2; i < numRows; i++) {
        let tempArr = []
        for(let j = 0; j <= res.length; j++) {
            if(j === 0) {
                tempArr.push(res[i - 1][j])
            } else if(j === res.length) {
                tempArr.push(res[i - 1][j - 1])
            } else {
                tempArr.push(res[i-1][j-1]+res[i-1][j])
            }
        }
        res.push(tempArr)
    }
    return res
};