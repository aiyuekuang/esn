/**
 * 动态加载脚本文件
 */
export function appendScript(src, text, reload, charset) {
    let id = hash(src + text);
    if (!reload && in_array(id, evalscripts))
        return;
    if (reload && $(id)) {
        $(id).parentNode.removeChild($(id));
    }

    evalscripts.push(id);
    let scriptNode = document.createElement("script");
    scriptNode.type = "text/javascript";
    scriptNode.id = id;
    scriptNode.charset = charset ? charset
        : (BROWSER.firefox ? document.characterSet : document.charset);
    try {
        if (src) {
            scriptNode.src = src;
            scriptNode.onloadDone = false;
            scriptNode.onload = function() {
                scriptNode.onloadDone = true;
                JSLOADED[src] = 1;
            };
            scriptNode.onreadystatechange = function() {
                if ((scriptNode.readyState == 'loaded' || scriptNode.readyState == 'complete')
                    && !scriptNode.onloadDone) {
                    scriptNode.onloadDone = true;
                    JSLOADED[src] = 1;
                }
            };
        } else if (text) {
            scriptNode.text = text;
        }
        document.getElementsByTagName('head')[0].appendChild(scriptNode);
    } catch (e) {
    }
}

//下载类
//创建一个下载，output是地址，downloadFileName是下载的文件名
export let downloads = (output, downloadFileName = '文件') => {
    if (window.navigator.msSaveBlob) {
        // for ie 10 and later
        try {
            let blobObject = new Blob([output]);
            window.navigator.msSaveBlob(blobObject, downloadFileName);
        } catch (e) {
            console.log(e);
        }
    } else {
        let file = 'data:text/plain;charset=utf-8,';
        let logFile = output;
        let encoded = encodeURIComponent(logFile);
        file += encoded;
        let a = document.createElement('a');
        a.href = logFile;
        a.target = '_blank';
        a.download = downloadFileName;
        document.body.appendChild(a);
        a.click();
        a.remove();
    }
};


//web开发相关,获取url中的参数
export let getUrlParam = name => {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    let r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(unescape(r[2]));
    return '';
};

//获取站点地址
export let getLocation = () => {
    return location.origin;
};


//判断当前平台是安卓还是ios或者其他
export let platform = (an = () => {}, ios = () => {}, any = () => {}) => {
    let u = navigator.userAgent,
        app = navigator.appVersion;
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
export let urlencode = (data, isPrefix) => {
    isPrefix = isPrefix ? isPrefix : false;

    let prefix = isPrefix ? '?' : '';

    let _result = [];

    for (let key in data) {
        let value = data[key];
        // 去掉为空的参数
        if (['', undefined, null].includes(value)) {
            continue;
        }

        if (value.constructor === Array) {
            value.forEach(_value => {
                _result.push(encodeURI(key) + '[]=' + encodeURI(_value.toString()));
            });
        } else {
            _result.push(encodeURI(key) + '=' + encodeURI(value.toString()));
        }
    }
    return _result.length ? prefix + _result.join('&') : '';
};

