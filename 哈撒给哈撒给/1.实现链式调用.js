/*
 * @Author: This is CodeMan
 */
// u.console('breakfast').setTimeout(3000).console('lunch').setTimeout(3000).console('dinner')

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
    setTimeout(wait) {
        this.promise = this.promise.then(() => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve()
                }, wait)
            })
        })
        return this
    }
}

const u = new U()
u.console('breakfast').setTimeout(3000).console('lunch').setTimeout(3000).console('dinner')