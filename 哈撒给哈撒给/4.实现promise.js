/*
 * @Author: This is CodeMan
 */
class MyPromise {
    constructor(excute) {
        this.reason = ''
        this.value = ''
        this.status = 'pending'
        this.onFulfilledCallbacks = []
        this.onRejectedCallbacks = []
        const resolve = (val) => {
            if (this.status === 'pending') {
                this.status = 'fulfilled'
                this.value = val
                this.onFulfilledCallbacks.forEach(callback => {
                    callback(this.value)
                }) 
            }
        }
        const reject = (reason) => {
            if (this.status === 'pending') {
                this.status = 'rejected'
                this.reason = reason
                this.onRejectedCallbacks.forEach(callback => {
                    callback(this.reason)
                })
            }
        }

        try {
            excute(resolve, reject)
        } catch (err) {
            reject(err)
        }
    }
    then(onSuccess, onReject) {
        console.log(this.status, 'status')
        return new Promise((resolve, reject) => {
            if (this.status === 'pending') {
                try {
                    this.onFulfilledCallbacks.push(() => {
                        this.value = onSuccess(this.value)
                        resolve(this.value)
                    })
                    this.onRejectedCallbacks.push(() => {
                        const reason = onReject(this.reason)
                        reject(reason)
                    })
                } catch (err) {
                    reject(err)
                }
            }
            if (this.status === 'fulfilled') {
                try {
                    const res = onSuccess(this.value)
                    resolve(res)
                } catch (err) {
                    reject(err)
                }
            }
            if (this.status === 'rejected') {
                try {
                    const res = onReject(this.reason)
                    resolve(res)
                } catch (err) {
                    reject(err)
                }
            }
        })
    }
    all(promises) {
        return new MyPromise((resolve, reject) => {
            let countResolved = 0
            const length = promises.length
            let values = new Array(length).fill('')
            for (let i = 0; i < length; i++) {
                countResolved++
                promises[i].then((value) => {
                    values[i] = value

                    if (countResolved === length) {
                        resolve(values)
                    }
                }, err => {
                    reject(err)
                })
            }
        })
    }
    race(promises) {
        return new MyPromise((resolve, reject) => { 
            for (let i = 0; i < length; i++) {
                promises[i].then((value) => {
                    resolve(value)
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
}).then(() => {
    console.log(2222)
}).then(() => {
    console.log(888)
})