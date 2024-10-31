/*
 * @Author: This is CodeMan
 */
// 用原生js实现事件委托API，需要支持链式调用，支持return false时阻止后续委托及冒泡
// document.querySelector('xx')
//   .on('click touchstart', '.js_elem1,.js_elem2', (e) => { /* … */ })
//   .on('touchmove', '.js_elem1', (e) => { /* … */ })

！！