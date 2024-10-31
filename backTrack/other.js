/*
 * @Author: This is CodeMan
 */
// fn([['a', 'b'], ['n', 'm'], ['0', '1']])
// ['an0', 'am0', 'an1', 'am1', 'bn0', 'bm0', 'bn1', 'bm0']

function backTrackArr(arr) {
    let res = []
    let tempArr = new Array(arr.length).fill(false)
    const backTrack = (str, length, index) => {
        if (str.length === length) {
            res.push(str)
        }
        for (let i = 0; i < arr.length; i++) {
            if (!tempArr[i] && index < i) {
                const [s1, s2] = arr[i]
                tempArr[i] = true
                backTrack(str + s1, length, i)
                backTrack(str + s2, length, i)
                tempArr[i] = false
            }
        }
    }
    backTrack('', arr.length, -1)
    return res
}

console.log(backTrackArr([['a', 'b'], ['n', 'm'], ['0', '1']]))

// f(['ab', 'c', 'd', 'ab', 'c']) 
// => ['ab1', 'c1', 'd', 'ab2', 'c2']
function testFunc(arr) {

}

testFunc(['ab', 'c', 'd', 'ab', 'c'])