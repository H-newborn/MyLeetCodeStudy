/*
 * @Author: This is CodeMan
 */
/*
 * @Author: This is CodeMan
 */
// ### 题目：实现一个带并发限制的Promise调度器
// #### 要求：
// 请实现一个带并发限制的Promise调度器Scheduler，保证同时最多运行的Promise数量不超过限制。调度器需要提供两个主要方法：
// 1. `add(promiseCreator)`：添加一个返回Promise的函数到调度器。
// 2. `start()`：开始执行所有已添加的Promise函数。
// #### 示例：
// ```javascript

class Scheduler {
    constructor(limit) {
        this.limit = limit;
        this.queues = [];
        this.runningCount = 0;
    }
    add(promiseCreator) {
        this.queues.push(promiseCreator);
    }
    start() {
        if (this.runningCount == this.limit || this.queues.length === 0) {
          return
        }
        const queue = this.queues.shift()
        this.runningCount++

        queue().then(() => {
            this.runningCount--
            this.start()
        })
        this.start()
    }
}
// 示例用法：
const timeout = (time) => new Promise(resolve => setTimeout(resolve, time));
const scheduler = new Scheduler(2);
const addTask = (time, order) => {
  scheduler.add(() => timeout(time).then(() => console.log(order)));
};
addTask(1000, '1'); // new Promise(resolve => setTimeout(resolve, 1000)).then(() => console.log(1))
addTask(500, '2'); // new Promise(resolve => setTimeout(resolve, 500)).then(() => console.log(2))
addTask(300, '3'); // new Promise(resolve => setTimeout(resolve, 300)).then(() => console.log(3))
addTask(400, '4'); // new Promise(resolve => setTimeout(resolve, 400)).then(() => console.log(4))
scheduler.start();
// 预期输出：
// 2
// 3
// 1
// 4
// ```
// #### 解释：
// 1. `Scheduler`类的构造函数接受一个`limit`参数，表示同时运行的Promise数量的上限。
// 2. `add`方法将一个返回Promise的函数添加到调度器的队列中。
// 3. `start`方法开始执行队列中的Promise函数，确保同时运行的Promise数量不超过`limit`。
// 在上述示例中，`scheduler.start()`方法会按照以下顺序输出：
// - 先执行前两个任务（2和3），因为它们的延时较短。
// - 然后执行第一个任务（1），因为它的延时较长。
// - 最后执行第四个任务（4）。 