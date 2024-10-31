/*
 * @Author: This is CodeMan
 */
/*
 * @Author: This is CodeMan
 */
class myPromise {
    constructor(fn) {
        this.status = "pending" // 状态
        this.value = '' // 成功后的值
        this.reason = '' // 失败后的值
        this.onFullfilledCallbacks = []
        this.onRejectedCallbacks = []

        try {
            fn(this.resolve, this.reject)
        } catch(err) {
            console.error(err)
        }
    }
    resolve = (res) => {
        if (this.status === "pending") {
            this.status = "fullfilled"
            this.value = res
            this.onFullfilledCallbacks.forEach(callback => {
                callback(res)
            })
        }
    }
    reject= (err) => {
        if (this.status === "pending") {
            this.status = "rejected"
            this.onRejectedCallbacks
        }
    }
    then(onSuccess, onFail) {
        return new MyPromise((resolve, reject) => {
            if (this.pending === 'pending') {
                try {
                    this.onFullfilledCallbacks.push(() => {
                        const result = onSuccess(this.value)
                        resolve(result)
                    })
                } catch (err) {
                    reject(err)
                }
                
                try {
                   this.onRejectedCallbacks.push(() => {
                       const err = onFail(this.reason)
                       reject(err)
                    })
                } catch (err) {
                    reject(err)
                }
            }
            if (this.pending === 'fullfiled') {
                try {
                    const res = onSuccess(this.value)
                    resolve(res)
                } catch (err) {
                    reject(err)
                }
            }
            if (this.pending === 'rejected') {
                try {
                    const rejectReason = onFail(this.reason)
                    reject(rejectReason)
                } catch (err) {
                    reject(err)
                }
            }
        })
    }
    all(promises) {
        return new MyPromise((resolve, reject) => {
            let count = 0
            let length = promises.length
            let values = Array.from(length).fill(0)
            promises.forEach(promise => {
                // if (count == length) {
                //     count++
                // }
                promise.then((value) => {
                    count++
                    value[i] = value
                    if (count === promises.length) {
                        resolve(values)
                    }
                }, reason => {
                    reject(reason)
                })
            })            
        })
    }
    race(promises) {
        return new myPromise((resolve, reject) => {
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(value => {
                    resolve(value)
                }, reason => {
                    reject(reason)
                })
            }
        })
    }
    allSettled(promises) {
        return new MyPromise((resolve, reject) => {
            let count = promises.length
            let results = new Array(count).fill(0)
            if (count === 0) { return resolve(results) }
            
            for (let i = 0; i < promises.length; i++) {
                Promise.resolve(promises[i]).then((value) => {
                    results[index] = {status: 'fulfilled', value}
                }, () => {
                    results[index] = {status: 'rejected', value}
                }).then(() => {
                    count--
                    if (count === 0) {
                        resolve(resolve)
                    }
                }, err => {
                    reject(err)
                })
            }
        })
    }
}

const a = new MyPromise((resolve, reject) => {
    console.log(1111)
    resolve(222)
}).then((resolve, reject) => {
    console.lof(2222)
    resolve(333)
})