/*
 * @Author: This is CodeMan
 */
/*
 * @Author: This is CodeMan
 */
// u.console('breakfast').setTimeout(3000).console('lunch').setTimeout(3000).console('dinner')，实现这个u

class U {
    constructor() {
        this.promise = Promise.resolve()
    }
    console(word) {
        this.promise = this.promise.then(() => {
            console.log(word)
        })
        return this
    }
    setTimeout(time) {
        this.promise = this.promise.then(() => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve()
                }, time)
            })
        })
        return this
    }
}

const u = new U()
// u.console('breakfast').console('eat').setTimeout(3000).console('lunch').setTimeout(3000).console('dinner')

Promise.resolve().then(() => { console.log(1111) }).then(() => { console.log(222) })

