import originJSONP from 'jsonp'// 原始jsonp
// 这个url通常是带有一些参数的，但是库是不支持传入一个data的，需要将url拼接好，
// 使用的时候我们可能需要一个纯净的url，将所有的require通过data拼接在url上,调用就更加方便
export default function jsonp (url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data) // 如果没有问号，加一个问号
  return new Promise((resolve, reject) => { // 返回一个Promise
    originJSONP(url, option, (err, data) => { // err是none，表示成功
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

// 目的是将data拼接到 url中 。
function param (data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${encodeURIComponent(value)}`
    // 将data拼接到url, encodeURIComponent()函数可把字符串作为 URI 组件进行编码。
    // document.write(encodeURIComponent("http://www.w3school.com.cn"))
    // http%3A%2F%2Fwww.w3school.com.cn
  }
  return url ? url.substring(1) : ''
}
