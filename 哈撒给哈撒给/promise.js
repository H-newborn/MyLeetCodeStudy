/*
 * @Author: This is CodeMan
 */
// 实现一个简易版的 Promise（MyPromise），使得下述用例能测试通过。

class MyPromise {
    constructor(exce) {
        this.status = 'pending'
        this.rejectedCallbacks = []
        this.successedCallbacks = []
        this.reason = ''
        this.value = ''

        const resolve = (value) => {
            if (this.status === 'pending') {
                this.status = 'fulfilled'
                this.value = value
                this.successedCallbacks.forEach(callback => {
                    callback()
                })
            }
        }
        const reject = (reason) => {
            if (this.status === 'pending') {
                this.status = 'rejected'
                this.reason = reason
                this.rejectedCallbacks.forEach(callback => {
                    callback()
                })
            }
        }

        try {
            exce(resolve, reject)
        } catch (err) {
            reject(err)
        }
    }
    then(onSuccessed, onRejected) {
        if (!onSuccessed && !onRejected) {
            return this
        }
        return new MyPromise((resolve, reject) => {
            if (this.status === 'fulfilled') {
                const value = onSuccessed(this.value)
                resolve(value)
            }
            if (this.status === 'rejected') {
                const reason = onRejected(this.reason)
                reject(reason)
            }
        })
    }
}

// 用例1
new MyPromise((resolve, reject) => {
    resolve(100);
}).then((val) => {
    console.log(val); // 输出100
});

// 用例2
new MyPromise((resolve, reject) => {
    reject('error');
}).then(null, (err) => {
    console.log(err); // 输出 'error'
});

// 用例3
new MyPromise((resolve, reject) => {
    resolve(100);
})
.then((val) => {
    return val + 5;
})
.then()
.then((val) => {
    console.log(val); // 输出 105
});