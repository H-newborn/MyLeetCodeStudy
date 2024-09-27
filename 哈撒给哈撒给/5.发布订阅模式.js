/*
 * @Author: This is CodeMan
 */
/*
 * @Author: This is CodeMan
 */
/*
 * @Author: This is CodeMan
 */
// const emitEvent = new EmitterEvent()
// const fn1 = () => { console.log('woshidom1') }
// const fn2 = () => { console.log('woshidom2') }
// const fn3 = () => { console.log('woshidom3') }
// const fn4 = () => { console.log('woshidom4') }
// emitEvent.on('e1', fn1)
// emitEvent.on('e1', fn2)
// emitEvent.on('e1', fn3)
// emitEvent.on('e1', fn4)
// emitEvent.once('e1',fn2)
// emitEvent.emit('e1')
// emitEvent.off('e1', fn1)
// emitEvent.emit('e1')

/*
 * @Author: This is CodeMan
 */
class eventEmitEvent {
    constructor() {
        // 事件中心
        this.events = {}
    }
    // 注册事件
    on(eventName, fn) {
        // 事件不存在，初始化事件
        if (!this.events[eventName]) {
            this.events[eventName] = []
        }
        // 推入事件
        this.events[eventName].push(fn)
    }
    // 注销事件
    off(eventName, fn) {
        if (!this.events[eventName]) {
            console.error('当前事件不存在')
            return
        }
        const index = this.events[eventName].indexOf(fn)
        console.log(index)
        if (index >= 0) {
            this.events[eventName].splice(index, 1)
        } else {
            console.error('当前事件不存在')
            return
        }
    }
    // 通知执行
    notify(eventName) {
        if (!this.events[eventName]) {
            console.error('当前事件不存在')
        }
        this.events[eventName].forEach(callback => {
            callback()
        })
    }
}

const fn1 = function () {
    console.log('fn1')
}
const fn2 = function () {
    console.log('fn2')
}
const eventEmit = new eventEmitEvent()
eventEmit.on('fn1', fn1)
eventEmit.on('fn1',fn2)
eventEmit.notify('fn1')
eventEmit.off('fn1',fn1)
eventEmit.notify('fn1')