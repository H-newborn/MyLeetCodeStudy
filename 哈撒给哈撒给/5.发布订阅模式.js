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

class eventEmitEvent {
    constructor() {
        this.event = {}
    }
    on(eventName, fn) {
        if (!this.event[eventName]) {
            this.event[eventName] = []
        }
        this.event[eventName].push(fn)
    }
    off(eventName, fn) {
        if (!this.event[eventName]) {
            console.error('bucunzai')
            return
        }
        if (this.event[eventName].indexOf(fn) === -1) {
            console.error('bucunzai')
            return
        }
        const index = this.event[eventName].indexOf(fn) 
        this.event[eventName].splice(index, 1)
    }
    notify(eventName) {
        this.event[eventName].forEach(callback => {
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