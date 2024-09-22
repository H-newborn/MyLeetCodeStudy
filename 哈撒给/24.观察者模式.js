/*
 * @Author: This is CodeMan
 */
let observer_ids = 0
let observed_ids = 0
// 观察者
class Observer {
    constructor() {
        this.id = observer_ids++
    }
    update(ob) {
        console.log("guanchazhe" + `${this.id}`+ `-检测到被观察者${ob.id}变化`)
    }
}

// 被观察者
class Observed {
    constructor() {
        this.deps = []
        this.id = observed_ids++
    }
    addObserver(observer) {
        this.deps.push(observer)
    }
    removeObserver(observer) {
        this.deps = this.deps.filter(item => {
            item.observed_ids !== observer.id
        })
    }
    notify() {
        this.deps.forEach(observer => {
            observer.update(this)
        })
    }
}

let oberserved = new Observed()
let oberserver1 = new Observer()
let oberserver2 = new Observer()

oberserved.addObserver(oberserver1)
oberserved.addObserver(oberserver2)
oberserved.notify()