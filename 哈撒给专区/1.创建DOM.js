/*
 * @Author: This is CodeMan
 */
// 用原生js创建一个 className 为 banner 的 div，
// 其文本内容为: “腾讯音乐 - <i>QQ音乐</i>” 。
// 并将其插入到文档中倒数第二个 className 为 section 的元素之前

const div = document.createElement('div')
div.className = 'banner'
div.innerHTML = "腾讯音乐 - <i>QQ音乐</i>"

const sections = document.querySelectorAll('.section')
sections[sections.length - 2].insertAdjacentElement('beforebegin', div)