/**
 * 动态加载脚本文件
 */
export function appendScript(src:string) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script');
    script.src = src;

    // 当脚本加载成功时
    script.onload = () => resolve(true);

    // 当脚本加载失败时
    script.onerror = () => reject(new Error(`Script load failed for ${src}`));

    // 将脚本添加到DOM中
    document.body.appendChild(script);
  });
}

//下载类
//创建一个下载，output是地址，downloadFileName是下载的文件名
export let downloads = (output: string, downloadFileName = '文件') => {
  // 创建一个新的<a>标签
  const link = document.createElement('a');
  link.href = output; // 设置链接的href属性为下载地址
  link.download = downloadFileName; // 设置下载的文件名

  // 触发下载
  // 注意：有些浏览器可能需要在用户交互（如点击事件）的上下文中触发下载
  // 你可以将以下代码放在一个事件处理器中，例如按钮的点击事件
  document.body.appendChild(link); // 添加到DOM中
  link.click(); // 模拟点击
  document.body.removeChild(link); // 然后立即从DOM中移除
};


//web开发相关,获取url中的参数
export let getUrlParam = (name: string) => {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  let r = window.location.search.substr(1).match(reg);
  if (r !== null) return decodeURI(unescape(r[2]));
  return '';
};


//获取站点地址
export let getLocation = () => {
  return location.origin;
};


//判断当前平台是安卓还是ios或者其他
export let platform = (an = () => {
}, ios = () => {
}, any = () => {
}) => {
  let u = navigator.userAgent;

  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
  let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  if (isAndroid) {
    //这个是安卓操作系统
    an();
  } else if (isIOS) {
    //这个是ios操作系统
    ios();
  } else {
    any();
  }
};

//获取页面宽度
export let getWidth = () => {
  return document.body.scrollWidth;
};

//对象转url字符串
export let urlEncode = (str:any) => {
  // eslint-disable-next-line no-param-reassign
  str = (str + '').toString();

  return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
}
