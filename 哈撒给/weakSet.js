/*
 * @Author: This is CodeMan
 */
// <!--示例一-->
// 对特定DOM节点添加状态时。当DOM节点被删除，将DOM节点作为“键”的WeakMap也会自动被回收。
let element = document.getElementById('box')
let wMap = new WeakMap()
wMap.set(element, {clickCount: 0})
element.addEventListener('click', () => {
  let countObj = wMap.get(element)
  countObj.clickCount++

  console.log(wMap.get(element).clickCount) // click -> n+=1
})
