/*
 * @Author: This is CodeMan
 */
function lengthOfLongestSubstring(s) {
    let length = s.length
    let tailIndex = -1
    let set = new Set()
    let resCount = 0
    for(let i = 0; i < length; i++) {
        if(i !== 0) {
            set.delete(s.charAt(i - 1))
        }
        while(tailIndex + 1 < length && !set.has(s.charAt(tailIndex + 1))) {
            set.add(s.charAt(tailIndex + 1))
            tailIndex++
        }
        resCount = Math.max(tailIndex - i + 1, resCount)
    }
    return resCount
};