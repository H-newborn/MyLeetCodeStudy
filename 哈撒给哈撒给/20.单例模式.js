/*
 * @Author: This is CodeMan
 */
class singleLizi {
    constructor(value) {
        this.instance = null
        this.name = value
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new singleLizi()
        }
        return this.instance
    }
    getName() {
        console.log(this.name)
    }
}

const a = new singleLizi('a')
const b = new singleLizi('b')
a.getName()
b.getName()
console.log(singleLizi.getInstance())
a.prototype.getInstance()
// a.getInstance()
// console.log(b.getInstance())
