/*
 * @Author: This is CodeMan
 */
// 编写一个 rgb2hex 函数，将 rgb 颜色字符串转换为十六进制的形式，如 rgb(255, 255, 255) 转为 #ffffff，要求：

// 1. rgb 中每个 , 后面的空格数量不固定
// 2. 十六进制表达式使用六位小写字母
// 3. 如果输入不符合 rgb 格式，返回原始输入

// 字符串形式
function rgb2hex(str) {
    const startIndex = str.indexOf('(')
    const endIndex = str.indexOf(')')
    const tempStr = str.substring(startIndex + 1, endIndex)
    console.log(tempStr)
    const tempArr = tempStr.split(',')
    const resArr = tempArr.map(item => {
        return Number(item).toString(16)
    })
    return '#' + resArr.join('')
}

console.log(rgb2hex('rgb(255, 255, 255)'))

// 字符串形式
function rgb2hex(str) {
    const tempArr = str.match(/\d+/g)
    const resArr = tempArr.map(item => {
        return Number(item).toString(16)
    })
    return '#' + resArr.join('')
}

console.log(rgb2hex('rgb(255, 255, 255)'))