/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-06-05 20:29:33
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-07-04 19:21:50
 * @FilePath: /MyLeetCodeStudy/哈撒给/3.请求控制Scheduler.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// interface workType {
//     count: 100,
//     priority: Number
// }

let taskQueue = []
// 上一次执行perform对应的优先级
let prevPriority = IdlePriorty
// 当前调度的curCallback
let curCallback

// let isBatchingUpdates = false

function cancelCallback(task) {
    task.callback = null
}

// 调度
function schedule() {
    // 尝试获取当前正在调度的callback
    const cbNode = getFirstCallbackNode()

    // 取出优先级最高的work
    const curWork = taskQueue.sort((w1, w2) => {
        return w1.priority - w2.priority
    })[0]
    
    if (!curWork) {
        // 没有work需要调度
        curCallback = null
        cbNode && cancelCallback(cbNode)
        // perform(curWork)
        return
    }

    // 获取当前最高优先级work的优先级
    const { priority: curPriority } = curWork
    if (curPriority == prevPriority) {
        // 如果优先级相同，则不需要重新调度，退出调度
        return
    }

    // 准备调度当前最高优先级的work
    // 调度之前，如果有工作正在进行，中断
    cbNode && cancelCallback(cbNode)

    curCallback = scheduleCallback(curPriority, perform.bind(null, curWork))
}

// 执行
function perform(work) {
    // 是否需要同步执行
    const needSync = work.priority === 'ImmediatePriority' || didTimeOut
    while ((needSync || !shouldYield()) && work.count) {
        work.count--
        insertItem()
    }
    
    // 跳出循环，prevPriority代表上一次执行的优先级
    prevPriority = work.priority
    if (!work.count) {
        // 删除已完成的work
        const workIndex = workList.indexOf(work)
        workList.splice(workIndex, 1)
        // 重置优先级
        prevPriority = IdlePriorty
    }

    const prevCallback = curCallback
    // 开始调度，调度完后，如果callback发生变化，说明这是新的work
    schedule()
    const newCallback = curCallback

    if (newCallback && prevCallback === newCallback) {
        // 同一个work，timeSlice时间用尽
        return perform.bind(null, work)
    }
}

button.onclick = () => {
    workList.unshift({
        count: 100
    })
    schedule()
}


// function scheduleUpdateOnFiber(fiber) {
//     taskQueue.push(fiber)
// }

// function batchedUpdates(fn) {
//     isBatchingUpdates = true
//     fn()
//     isBatchingUpdates = false
    
//     if (taskQueue.length > 0) {
//         performWork()
//     }
// }

// function performWork() {
//     while (taskQueue.length > 0) {
//         let fiber = taskQueue.shift()
//         updateFiber(fiber)
//     }
// }