/*
 * @Author: This is CodeMan
 */
// 用原生js创建一个 className 为 banner 的 div，其文本内容为: “腾讯音乐 - <i>QQ音乐</i>” 。
// 并将其插入到文档中倒数第二个 className 为 section 的元素之前

// insertBefore 父节点插入子节点

// insertAdjacentHTML(position, text)
// position
// 一个 DOMString，表示插入内容相对于元素的位置，并且必须是以下字符串之一：

// 'beforebegin'：元素自身的前面。
// 'afterbegin'：插入元素内部的第一个子节点之前。
// 'beforeend'：插入元素内部的最后一个子节点之后。
// 'afterend'：元素自身的后面。
// text
// 是要被解析为 HTML 或 XML 元素，并插入到 DOM 树中的 DOMString。

const ele = document.createElement('div')
ele.className = 'banner'
ele.innerHTML = '腾讯音乐 - <i>QQ音乐</i>'
const sections = document.querySelectorAll('.section')
sections[sections.length - 2]?.insertAdjacentHTML('beforebegin', ele)