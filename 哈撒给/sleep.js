/*
 * @Author: This is CodeMan
 */

// sleep(1000) // 延时执行

// console.time(2)
// sleep(1000) // 延时执行
// console.timeEnd(2)

function sleep(wait) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, wait)
    })
}

console.time(1)
console.time(2)

sleep(3000).then(success => {
    console.timeEnd(1)
})
sleep(2000).then(success => {
    console.timeEnd(2)
    // console.time(2)
})