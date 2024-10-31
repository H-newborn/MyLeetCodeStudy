/*
 * @Author: This is CodeMan
 */
class MyPromise {
    constructor(fn) {
        this.status = 'pending'
        this.value = ''
        this.reason = ''
        this.successCallbacks = []
        this.errorCallbacks = []

        const resolve = (value) => {
            if (this.status === 'pending') {
                this.status = 'fulfilled'
                this.value = value
                this.successCallbacks.forEach(callback => {
                    callback()
                })
            }
        }
        const reject = (reason) => {
            if (this.status === 'pending') {
                this.status = 'rejected'
                this.reason = reason
                this.errorCallbacks.forEach(callback => {
                    callback()
                })
            }
        }

        try {
            fn(resolve, reject)
        } catch (err) {
            reject(err)
        }
    }
    then(onSucessed, onRejected) {
        return new MyPromise((resolve, reject) => {
            if (this.status === 'pending') {
                this.successCallbacks.push(() => {
                    const value = onSucessed(this.value)
                    resolve(value)
                })

                this.errorCallbacks.push(() => {
                    const reason = onRejected(this.reason)
                    reject(reason)
                })
            }
            if (this.status === 'fulfilled') {
                const value = onSuccess(this.value)
                resolve(value)
            }
            if (this.status === 'rejected') {
                const reason = onRejected(this.reason)
                reject(reason)
            }
        })
    }
    race() { }
    all() {}
}

const a = new MyPromise((resolve, reject) => {
    console.log(1111)
    resolve(222)
}).then().then(() => {
    console.log(2222)
}).then(() => {
    console.log(888)
})