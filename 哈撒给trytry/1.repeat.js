/*
 * @Author: This is CodeMan
 */
function repeat(func, times, wait) {
    let promise = Promise.resolve()
    return function (str) {
        for (let i = 0; i < times; i++) {
            promise = promise.then(() => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        func(str)
                        resolve()
                    }, wait)
                })
            })
        }
    }
}

// const repeatFunc = repeat(console.log, 4, 3000)
// repeatFunc('hello')
// 调用repeatFunc("helloword")
// 会alert4次 helloworld, 每次间隔3秒

setTimeout(() => { 
    console.log("1-1"); 
    Promise.resolve().then(() => { 
        console.log("1-2"); 
    });
     Promise.reject().catch(() => { 
        console.log('7-1'); 
    }); 
}); 
 
console.log("2-1"); 
 
Promise.resolve().then(() => { 
    console.log("3-1"); 
    setTimeout(() => { 
        console.log("3-2"); 
    }); 
}); 
 
Promise.reject().catch(() => { 
    console.log('6-1'); 
}); 
 
new Promise(function (reslove) { 
    console.log('4-1'); 
    reslove(); 
    console.log('5-1'); 
}).then(function () {
    console.log('4-2'); 
})
// 2-1 4-1 5-1 3-1 6-1 4-2 1-1 1-2 7-1 3-2