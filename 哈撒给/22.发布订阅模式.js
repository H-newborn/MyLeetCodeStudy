/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-09-06 09:44:34
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-09-06 19:44:10
 * @FilePath: /MyLeetCodeStudy/哈撒给/22.发布订阅模式.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// https://juejin.cn/post/7356055073586151475?searchId=20240906172338FE2086D90A7DFCB2FF9C
class EventEmitter {
    constructor() {
        // 初始化事件和回调函数的存储对象
        this.handles = {}
    }
    // 订阅事件
    on(event, fn) {
        (this.handles[event] || (this.handles[event] = [])).push(fn)
    }
    // 触发事件
    emit(eventName) {
        if (this.handles[eventName]) {
            const handles = this.handles[eventName]
            handles.forEach(callback => {
                callback()
            })
       }
    }
    // 取消订阅事件
    off(eventName, fn) {
        const handles = this.list[eventName]
        const index = handles && handles.indexOf(cb)

        if (index !== -1) {
            handles.splice(index, 1)
        }
    }
    // once 方法用于仅订阅一次事件，即回调函数只会被执行一次
    once(eventName, fn) {
        // 如果事件已经存在，并且该回调函数已经被订阅过，则直接返回，不再重复订阅
        if (this.handles[eventName] && this.handles[eventName].indexOf(fn) !== -1) {
            return
        }
        this.on(eventName, fn)
    }
   
}

const a = [3,4,5,6]
for (let i in a) {
    console.log(i, a[i])
}