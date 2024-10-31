/*
 * @Author: This is CodeMan
 */
var maxSubArray = function(nums) {
    let maxAns = nums[0]
    let pre = 0
    for(let i = 0; i < nums.length; i++) {
        pre = Math.max(nums[i], nums[i] + pre)
        maxAns = Math.max(pre, maxAns)
    }
    return maxAns
};