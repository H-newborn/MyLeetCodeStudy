/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-06-05 20:33:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-09-09 16:28:04
 * @FilePath: /MyLeetCodeStudy/哈撒给/13.实现发布订阅模式.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class EmitterEvent {
    constructor() {
        this.events = {}
    }
    // 订阅事件
    on(eventName, fn) {
        (this.events[eventName] || (this.events[eventName] = [])).push(fn)
    }
    // 通知事件更新
    emit(eventName) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(event => {
                event()
            })
        }
    }
    off(eventName, fn) {
        if (this.events[eventName]) {
            const index = this.events[eventName].indexOf(fn)
            if (index !== -1) {
                this.events[eventName].splice(index, 1)
            }
        }
    }
    once(eventName, fn) {
        let _this = this
        this.on(eventName, () => {
            _this.off(eventName, fn)
            fn()
        })
    }
}

const emitEvent = new EmitterEvent()
const fn1 = () => { console.log('woshidom1') }
const fn2 = () => { console.log('woshidom2') }
const fn3 = () => { console.log('woshidom3') }
const fn4 = () => { console.log('woshidom4') }
emitEvent.on('e1', fn1)
emitEvent.on('e1', fn2)
emitEvent.on('e1', fn3)
emitEvent.on('e1', fn4)
emitEvent.once('e1',fn2)
emitEvent.emit('e1')
emitEvent.off('e1', fn1)
emitEvent.emit('e1')
