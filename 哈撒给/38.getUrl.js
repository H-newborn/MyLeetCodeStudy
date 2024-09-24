/*
 * @Author: This is CodeMan
 */
// 编写一个 getUrlParam 函数，用于获取 url 中的参数，要求：

// 1. 指定参数名称，返回该参数的值 或者 空字符串
// 2. 不指定参数名称，返回全部的参数对象 或者 {}
// 3. 如果存在多个同名参数，则返回数组
// 4. 不能使用 URLSearchParams
// https://zhongzhifund.feishu.cn/sheets/Bn2rswdh4hveiRtPJv7cN4WPnjf?sheet=xPBK6l&username=zhangsan&age=11
function getUrlParam(url, key) {
    const index = url.indexOf('?')
    tempUrlArr = url.slice(index+1).split('&')
   
    const urlParamArr = tempUrlArr.map(item => {
        return item.split('=')
    })
    console.log(urlParamArr)

    let res = {}
    urlParamArr.forEach(item => {
        if (!res[item[0]]) {
            res[item[0]] = item[1]
        } else {
            if (Array.isArray(res[item[0]])) {
                res[item[0]].push(item[1]) 
            } else {
                res[item[0]] = [res[item[0]],item[1]]
            }
        }
    })
    return !key ? res : res[key]
}

const urlRes = getUrlParam('https://zhongzhifund.feishu.cn/sheets/Bn2rswdh4hveiRtPJv7cN4WPnjf?sheet=xPBK6l&username=zhangsan&age=11&age=22&age=33')
console.log(urlRes)