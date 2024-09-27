/*
 * @Author: This is CodeMan
 */
/*
 * @Author: This is CodeMan
 */
var rob = function(nums) {
    if(nums.length === 1) {return nums[0]}
    if(nums.length === 2) {return Math.max(nums[0], nums[1])}
    let res = [nums[0], Math.max(nums[0], nums[1])]
    let maxCount = Math.max(nums[0], nums[1])
    for(let i = 2; i < nums.length; i++) {
        res.push(Math.max(res[i-2] + nums[i], res[i-1]))
        if(res[res.length - 1] > maxCount) {
            maxCount = res[res.length - 1]
        }
    }
    return maxCount
};