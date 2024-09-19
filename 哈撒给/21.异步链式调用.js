/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-09-05 18:17:18
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-09-18 00:23:12
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

task.add(() => { console.log('task1') }).wait(2000).add(() => { console.log('task2') }).wait(2000).add(() => { console.log('task3') }).start()


// 使用promise实现 更nice
class U {
 constructor() {
     this.promise = Promise.resolve();
 }

 console(val) {
     this.promise = this.promise.then(() => {
        console.log(val); 
     });
     return this;
 }

 setTimeout(wait) {
     this.promise = this.promise.then(() => {
         return new Promise(resolve => {
             setTimeout(() => {
                 resolve()
             }, wait);
         });
     })
     return this;
 }
}
const u = new U()
u.console('breakfast').setTimeout(3000).console('lunch').setTimeout(3000).console('dinner')
