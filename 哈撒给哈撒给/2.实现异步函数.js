/*
 * @Author: This is CodeMan
 */
// const repeatFunc = repeat(console.log, 4, 3000)
// repeatFunc('hello')
// 调用repeatFunc("helloword")
// 会alert4次 helloworld, 每次间隔3秒

function repeat(fn, times, wait) {
    let promise = Promise.resolve()
    return function (str) {
        for (let i = 0; i < times; i++) {
            promise = promise.then(() => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        fn(str)
                        resolve()
                    }, wait)
                })
            })
        }
    }
}

const repeatFunc = repeat(console.log, 4, 3000)
repeatFunc('hello')