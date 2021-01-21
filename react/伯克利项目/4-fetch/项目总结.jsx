// 1、网络请求fetch的用法
// ES6用法
// 简单用法
fetch("https://api.kanye.rest").then(res => res.json()).then(data => {console.log(data)})
// 复杂用法
// fetch("http://127.0.0.1:7777/postContent", {  // fetch返回一个promise对象
//   method: "POST",
//   headers: {
//       "Content-Type": "application/json",
//   },
//   mode: "cors",
//   body: JSON.stringify({
//       content: "留言内容"
//   })
// }).then(function(res) {  // 解析promise对象
//   if (res.status === 200) {
//       return res.json()
//   } else {
//       return Promise.reject(res.json())
//   }
// }).then(function(data) {
//   console.log(data);
// }).catch(function(err) {
//   console.log(err);
// })


// ES7用法
// 简单用法
let url = "https://api.kanye.rest";
let response = await fetch(url);
let data = await response.json();  // data是一个对象
console.log(data);
// 复杂用法
// var word = '123',
//     url = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+word+'&json=1&p=3';
// (async ()=>{
//   try {
//     let res = await fetch(url, {mode: 'no-cors'});//等待fetch被resolve()后才能继续执行
//     console.log(res);//fetch正常返回后才执行
//     return res;//这样就能返回res不用担心异步的问题啦啦啦
//   } catch(e) {
//     console.log(e);
//   }
// })();
// checkStatus(response) {//检查响应状态
//   if(response.status >= 200 && response.status < 300) {//响应成功
//       return response;
//   }
//   if(response.status === 301 || response.status === 302) {//重定向
//       window.location = response.headers.get('Location');
//   }
//   const error = new Error(response.statusText);
//   error.data = response;
//   throw error;
// }
// async parseResult(response) {//解析返回的结果
//   const contentType = response.headers.get('Content-Type');
//   if(contentType != null) {
//       if(contentType.indexOf('text') > -1) {
//           return await response.text()
//       }
//       if(contentType.indexOf('form') > -1) {
//           return await response.formData();
//       }
//       if(contentType.indexOf('video') > -1) {
//           return await response.blob();
//       }
//       if(contentType.indexOf('json') > -1) {
//           return await response.json();
//       }
//   }
//   return await response.text();
// }



// 补充资料
// async/await封装fetch   https://segmentfault.com/a/1190000014733098
// fetch 如何请求常见数据格式   https://blog.csdn.net/weixin_39214481/article/details/91438424
// fetch使用的常见问题及解决办法   https://www.cnblogs.com/wonyun/p/fetch_polyfill_timeout_jsonp_cookie_progress.html
