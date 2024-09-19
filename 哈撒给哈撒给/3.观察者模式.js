/*
 * @Author: This is CodeMan
 */
let _observer_id = 0
let _observed_id = 0
// 观察者
class Observer {
    constructor() {
        this.id = _observer_id++
    }
    update() {
        console.log('这个观察者'+`${this.id}`+'被更新了')
    }
}

// 被观察者
class Observed {
    constructor() {
        _observed_id++
        this.deps = []
    }
    add(observer) {
        this.deps.push(observer)
    }
    notify() {
        this.deps.forEach(observer => {
            observer.update()
        })
    }
}

const observer1 = new Observer()
const observer2 = new Observer()

const observed = new Observed()
observed.add(observer1)
observed.add(observer2)
observed.notify()