/*
 * @Author: This is CodeMan
 */
// 如果有2个域名需要支持CORS方式跨域，服务端代码应该如何编写？
// 请用node或其他语言实现
// const domainList=['a.com','b.com'];
//     if (domainList.indexOf(host)>=0) {
//         res.setHeader('access-control-allow-origin',host)
//     }

const domainList = ['a.com', 'b.com']
if (domainList.indexOf(host) > 0) {
    res.setHeader('access-control-allow-origin', host)
}