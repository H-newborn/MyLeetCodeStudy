/*
 * @Author: This is CodeMan
// ### 题目：实现一个带并发限制的Promise调度器
// #### 要求：
// 请实现一个带并发限制的Promise调度器Scheduler，保证同时最多运行的Promise数量不超过限制。调度器需要提供两个主要方法：
// 1. `add(promiseCreator)`：添加一个返回Promise的函数到调度器。
// 2. `start()`：开始执行所有已添加的Promise函数。
// #### 示例：
// ```javascript
 */
class Scheduler {
    constructor(limit) {
        this.limit = limit
        this.queues = []
        this.resCount = 0
    }
    add(queueCreator) {
        this.queues.push(queueCreator)
    }
    start() {
        if (this.queues.length === 0) {
            
        }
    }
}

const timeout = (time) => new Promise(resolve => setTimeout(resolve, time))

const sheduler = new Scheduler(2)

const addTask = (time, order) => {
    sheduler.add(() => timeout(time).then(() => console.log(order)))
}
addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')
scheduler.start()