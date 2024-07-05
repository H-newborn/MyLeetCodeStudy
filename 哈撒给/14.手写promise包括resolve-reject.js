/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-06-05 20:34:27
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-07-01 22:32:30
 * @FilePath: /MyLeetCodeStudy/哈撒给/14.手写promise包括resolve-reject.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class MyPromise {
    status = "pending"
    value = null
    onFulfilledCallBacks = [] // 暂存成功回调
    onRejectedCallBacks = [] // 暂存失败回调

    constructor(executor) {
        try {
            executor(this.resolve.bind(this), this.reject.bind(this))
        } catch (error) {
            this.reject(error)
        }
    }

    resolve(res) {
        if (this.status == 'pending') {
            this.staus = "fulfilled"
            this.value = res

            this.onFulfilledCallBacks.forEach(fn => {
                fn(res)
            })
        }
    }

    reject(reason) {
        if (this.status == 'pending') {
            this.status = "rejected"
            this.value = reason

            this.onRejectedCallBacks.forEach(fn => {
                fn(reason)
            })
        }
    }

    then(onSuccess, onFail) {
        if (this.status == 'pending') {
            if (typeof onSuccess == 'function') {
                this.onFulfilledCallBacks.push(() => {
                    const fulfilledRet = onSuccess(this.value)
                    
                    if (fulfilledRet instanceof MyPromise) {
                        fulfilledRet.then(resolve, reject)
                    } else {
                        this.resolve(fulfilledRet)
                    }
                })
            }
            if (typeof onFail == 'function') {
                this.onRejectedCallBacks.push(() => {
                    const rejectReason = onFail(this.value)

                    if (rejectReason instanceof MyPromise) {
                        rejectReason.then(resolve, reject)
                    } else {
                        reject(rejectReason)
                    }
                })
            }
        }
        if (this.status == 'fulfilled') {
            const fulfilledRet = onSuccess(this.value)
            
            if (fulfilledRet instanceof MyPromise) {
                fulfilledRet.then(resolve, reject)
            } else {
                resolve(fulfilledRet)
            }
        }
        if (this.status == 'rejected') {
            const rejectReason = onFail(this.value)
            if (rejectReason instanceof MyPromise) {
                rejectReason.then(resolve, reject)
            } else {
                reject(rejectReason)
            }
        }
    }
}