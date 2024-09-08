/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-09-05 18:17:18
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-09-05 21:49:26
 * @FilePath: /MyLeetCodeStudy/demo1.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class Task {
    constructor() {
         this.taskList = []
    }
    add(fn) {
        this.taskList.push(fn)
        return this
    }
    wait(time) {
        this.taskList.push(['delay', time])
        return this
    }
    start() {
        this.fn()
        
        return this
    }
    fn() {
        while (this.taskList.length > 0) {
            const task = this.taskList.shift()
            if (Array.isArray(task)) {
                setTimeout(() => {
                    this.fn()
                }, task[1])
                break
            } else {
                console.log(task, 'task')
                task()
            }
        }
    }
}

const task = new Task()

task.add(() => {console.log('task1')}).wait(2000).add(() => {console.log('task2')}).wait(2000).add(() => {console.log('task3')}).start()