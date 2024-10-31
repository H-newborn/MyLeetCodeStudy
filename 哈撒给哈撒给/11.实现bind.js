/*
 * @Author: This is CodeMan
 */
/*
 * @Author: This is CodeMan
 */
/*
 * @Author: This is CodeMan
 */
// Function.prototype.myBind = function (context, args) {
//     content = context | window
//     const fn = Symbol('fn')
//     context[fn] = this
//     return function (...innerArgs) {
//         const mergeArgs = args.concat(innerArgs)
//         context[fn](mergeArgs)
//         delete context[fn]
//     }
// }


Function.prototype.myBind = function (context, args) {
    content = context || window
    const fn = Symbol('fn')
    context[fn] = this
    return function (...innerArgs) {
        const mergeArgs = args.concat(innerArgs)
        context[fn](mergeArgs)
        delete context[fn]
    }
}