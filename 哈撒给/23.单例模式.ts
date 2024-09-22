/*
 * @Author: This is CodeMan
 */
interface Instance {

}
class myInstance {

}

class SingleInstance {
    private instance: Instance | null
    constructor() {
        this.instance = null
    }
    init() {
        if (!this.instance) {
            this.instance = new myInstance()
            return this.instance
        } else {
            return this.instance
        }
    }
}