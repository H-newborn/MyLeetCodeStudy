/*
 * @Author: This is CodeMan
 */
// 题目：验证回文串

// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

// 说明：本题中，我们将空字符串定义为有效的回文串。

// 示例 1:

// 输入: "A man, a plan, a canal: Panama"
// 输出: true
// 示例 2:

// 输入: "race a car"
// 输出: false

function isPalindro(str) {
    let S = str.toUpperCase()
    let headIndex = 0
    let tailIndex = str.length - 1
    while (headIndex < tailIndex) {
        while (!isValid(S[headIndex])) {
            headIndex++
        }
        while (!isValid(S[tailIndex])) {
            tailIndex--
        }
        if (S[headIndex] === S[tailIndex]) {
            console.log(headIndex, tailIndex, S[headIndex], S[tailIndex])
            headIndex++
            tailIndex--
        } else {
            console.log(headIndex, tailIndex, S[headIndex], S[tailIndex])
            return false
        }
    }
    return true
}

function isValid(s) {
    return (s >= 'A' && s <= 'Z') || (s >= '0' && s <= '9')
}

const a = "A man, a plan, a canal: Panama"
console.log(isPalindro(a))

const b = "race a car"
console.log(isPalindro(b))