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
                    callback()
                }) 
            }
        }
        const reject = (reason) => {
            if (this.status === 'pending') {
                this.status = 'rejected'
                this.reason = reason
                this.onRejectedCallbacks.forEach(callback => {
                    callback()
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
        return new MyPromise((resolve, reject) => {
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
                    if (onSuccess) {
                        const res = onSuccess(this.value)
                        resolve(res)
                    } else {
                        resolve(this.value)
                    }
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

// const a = new MyPromise((resolve, reject) => {
//     console.log(1111)
//     setTimeout(() => {
//         resolve(222)
//     }, 300)
// }).then((res) => {
//     console.log(res, 888)
// })

const p1 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        console.log(1000)
        resolve(1000)
    }, 1000)
})

const p2 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        console.log(444)
        resolve(444)
    }, 3000)
})

const p3 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        console.log(555)
        resolve(555)
    }, 2000)
})

console.log(new MyPromise().all, 'MyPromise')
new MyPromise().all([p1, p2, p3]).then(res => {
    console.log(8888)
})