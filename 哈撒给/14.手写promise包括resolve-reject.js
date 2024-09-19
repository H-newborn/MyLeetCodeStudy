/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-06-05 20:34:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-09-09 16:37:25
 * @FilePath: /MyLeetCodeStudy/哈撒给/14.手写promise包括resolve-reject.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var status = 'fulfilled'
class MyPromise {
    constructor(executor) {
        this.status = "pending"  // 初始化状态为pending
        this.value = undefined   // 初始化值为空字符串
        this.reason = undefined  // 初始化原因为空字符串
        this.onFulfilledCallBacks = [] // 暂存成功状态的回调函数数组
        this.onRejectedCallBacks = [] // 暂存失败回调的回调函数数组
        // try {
        //     executor(this.resolve.bind(this), this.reject.bind(this))
        // } catch (error) {
        //     this.reject(error)
        // }
        try {
            console.log(this, 'this')
            executor(this.resolve, this.reject)
        } catch (error) {
            console.log(error)
            this.reject(error)
        }
    }

    resolve = (res) => {
        console.log(this, 'resolve')
        if (this.status == 'pending') {
            this.status = "fulfilled"
            this.value = res
            console.log(this.value, 'this.value')
            this.onFulfilledCallBacks.forEach(fn => {
                fn(res)
            })
        }
    }

    reject = (reason) => {
        if (this.status == 'pending') {
            this.status = "rejected"
            this.reason = reason

            this.onRejectedCallBacks.forEach(fn => {
                fn(reason)
            })
        }
    }

    then(onSuccess, onFail) {
        console.log(898989, this.status)
        const newPromise = new MyPromise((resolve, reject) => {
            if (this.status == 'pending') {
                try {
                    this.onFulfilledCallBacks.push(() => {
                        const fulfilledRet = onSuccess(this.value)
                        resolve(fulfilledRet)
                    })
                } catch (error) {
                    reject(error)
                }
                try {
                    this.onRejectedCallBacks.push(() => {
                        const rejectReason = onFail(this.value)
                        reject(rejectReason)
                    })
                } catch (error) {
                    reject(error)
                }
            }
            if (this.status == 'fulfilled') {
                try {
                    const fulfilledRet = onSuccess(this.value)
                    resolve(fulfilledRet)
                } catch (error) {
                    reject(error)
                }
            }
            if (this.status == 'rejected') {
                try {
                    const rejectReason = onFail(this.value)
                    reject(rejectReason)
                } catch (error) {
                    reject(error)
                }
            }
        })
        return newPromise
    }

    all(promises) {
        return new MyPromise((resolve, reject) => {
            let resolvedCount = 0;
            const values = new Array(promises.length);
            for (let i = 0; i < promises.length; i++) {
                if (!MyPromise.isPromise(promises[i])) {
                    reject(new TypeError("Expected a Promise"));
                    break;
                }

                // 处理每个Promise
                promises[i].then(
                    (value) => {
                        resolvedCount++;
                        values[i] = value;

                        // 当所有Promise都成功时，resolve结果数组
                        if (resolvedCount === promises.length) {
                            resolve(values);
                        }
                    },
                    (reason) => {
                        // 只要有一个Promise失败，就reject整个Promise.all的结果
                        reject(reason);
                    }
                );
            }
        });
    }

    race(promises) {
        return new MyPromise((resolve, reject) => {
            for (let i = 0; i < promises.length; i++) {
                if (!MyPromise.isPromise(promises[i])) {
                    reject(new TypeError("Expected a Promise"));
                    break;
                }

                // 当任何一个Promise resolve或reject时，立即结束新Promise的状态
                promises[i].then(
                    (value) => {
                        resolve(value);
                    },
                    (reason) => {
                        reject(reason);
                    }
                );
            }
        });
    }

    isPromise(value) {
        return (
            value instanceof MyPromise ||
            (typeof value === "object" &&
            value !== null &&
            typeof value.then === "function")
        );
    }
}

const a = new MyPromise((resolve, reject) => {
    console.log(1111)
    resolve(222)
})
console.log(a, 'a')
a.then((val) => {
    console.log(444 + val)
    resolve(999)
})