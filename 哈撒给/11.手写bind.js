/*
 * @Author: zhangchenhui@chtwm.com zhangchenhui@chtwm.com
 * @Date: 2024-06-05 20:32:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-09-22 11:02:32
 * @FilePath: /MyLeetCodeStudy/哈撒给/11.手写bind.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

Function.prototype.myBind = function(context) {
    // 判断调用对象是否为函数
    if (typeof this !== "function") {
        throw new TypeError("Error");
    }
    // 获取参数
    var args = [...arguments].slice(1),
    fn = this;
    return function Fn() {
        // 根据调用方式，传入不同绑定值
        return fn.apply(
            this instanceof Fn ? this : context,
            args.concat(...arguments)
        );
    };
};


Function.prototype.myBind = function (context, args) {
    context = context || window
    const fn = Symbol('fn')
    context[fn] = this

    return function (..._args) {
        args = args.concat(_args)
        context[fn](args)
        delete context[fn]
    }
}