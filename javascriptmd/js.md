<!--
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-08-05 14:32:56
 * @LastEditors: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @LastEditTime: 2024-08-06 13:25:44
 * @FilePath: /MyLeetCodeStudy/javascriptmd/js.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<!-- 值类型、引用类型 -->

值类型：Boolean、Number、String、Symbol、Null、Undefined
typeof '1' // string
typeof 1 // number
typeof console.log() // function
typeof function() {} // function

<!--  能识别引用类型（不能再继续识别） -->

typeof null // 'object'
typeof ['a', 'b'] // 'object'
typeof { x: 100 } // 'object'

== 运算符
!!0 === false
!!NaN === false
!!'' === false
!!null === false
!!undefined === false
!!false === false
