/**
 * Created by zengtao on 2017/3/29.
 */
//正则区域
export const zhengze={
    emailReg:/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,//emall
    ip:/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g,//ip地址
    shuzi:"^[0-9]*$",//只能输入数字
    tel:"^(\(\d{3,4}-)|\d{3.4}-)?\d{7,8}$",//手机号
    sfz:"^\d{15}|\d{18}$"//身份证
}


export function cun(key, value){
    if (typeof (value) == 'string') {
        return localStorage.setItem(key, value);
    } else if (typeof (value) == "undefined") {
        return localStorage.setItem(key, '');
    } else if (typeof(value) == 'number') {
        return localStorage.setItem(key, value.toString());
    }else if (typeof(value) == 'object') {
        return localStorage.setItem(key, JSON.stringify(value));
    }
}

export function qu(val){
    return localStorage.getItem(val);
}

export function shan(val){
    return localStorage.removeItem(val);
}

export function cuns(key, value){
    if (typeof (value) == 'string') {
        return sessionStorage.setItem(key, value);
    } else if (typeof (value) == "undefined") {
        return sessionStorage.setItem(key, '');
    } else if (typeof(value) == 'number') {
        return sessionStorage.setItem(key, value.toString());
    }else if (typeof(value) == 'object') {
        return sessionStorage.setItem(key, JSON.stringify(value));
    }
}

export function qus(val){
    return sessionStorage.getItem(val);
}

export function qus_obj(val){
    return JSON.parse(sessionStorage.getItem(val));
}


export function shans(val){
    return sessionStorage.removeItem(val);
}

export function shans_all(val){
    return sessionStorage.clear();
}
//判断数组中是否包含元素
export function arrbaohan(arr,shan){
    let zhi = arr.findIndex(function(value, index, arr) {
        return value == shan;
    })
    if(zhi == -1){
        return false
    }else {
        return true
    }

}
//删除数组中得第一个出现得
export function arrshan(arr,shan){
   let zhi = arr.findIndex(function(value, index, arr) {
        return value == shan;
    })
    if(zhi !== -1){
        arr.splice(zhi,1)
    }
    return arr
}

//browserHistory形式得跳转
export function changgepage(url,parm){
    for(let i in parm){
        cuns(i.toString(),parm[i]);
    }
    browserHistory.push({
        pathname: url
    })
}

//输入数组，会随机抽取数组中得一个值输出
export function suiji(arr){
    return arr[Math.floor((Math.random()*arr.length))];
}


//输入3000，变成3,000.00
export function Convert(money)
{
    var s = money; //获取小数型数据
    s += "";
    if (s.indexOf(".") == -1) s += ".00"; //如果没有小数点，在后面补个小数点和00
    if (/\.\d$/.test(s)) s += "0"; //正则判断
    while (/\d{4}(\.|,)/.test(s)) //符合条件则进行替换
        s = s.replace(/(\d)(\d{3}(\.|,))/, "$1,$2"); //每隔3位添加一个
    return s;
}
//获取时间戳20170626164644864，就是这种类型
export function NowTimeCode(){
    var Result="";

    var now = new Date();

    var year = now.getYear();

    if (now.getYear() < 1900) {
        year = now.getYear() + 1900;
    }

    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minutes = now.getMinutes();
    var second = now.getSeconds();
    var millisecond = now.getMilliseconds();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0"+ day;
    if (hour < 10) hour = "0"+ hour;
    if (minutes < 10) minutes = "0"+ minutes;
    if (second < 10) second = "0"+ second;

    if (millisecond < 10)
        millisecond = "00"+ millisecond;
    else
    {
        if (millisecond < 100)
        {
            millisecond = "0"+ millisecond;
        }
    }

    Result = year.toString() + month.toString() + day.toString() + hour.toString() + minutes.toString() + second.toString() + millisecond.toString();

    return Result;

}

//获取当前日期
export function getNowDate(){
    var now = new Date();
    var month=now.getMonth()+1;
    if(month<10){
        month="0"+month;
    }
    var day=now.getDate();
    if(day<10){
        day="0"+day;
    }
    return now.getFullYear() +"-"+month+"-"+day;
}

//数组去除重复chongfu([1,2,3,4,5,1,1]),返回12345
export function chongfu(arr) {
    var result = [], json = {};
    for (var i = 0, len = arr.length; i < len; i++){
        if (!json[arr[i]]) {
            json[arr[i]] = 1;
            result.push(arr[i]);  //返回没被删除的元素
        }
    }
    return result;
};

//取最大值
export function zuidazhi(arr){
   return Math.max.apply(Math, arr);
}

//取最小值
export function zuixiaozhi(arr){
    return Math.min.apply(Math, arr);
}


//数组排序
export function paixu(zmp,arr){
    arr.sort(function(a, b) {
        if(zmp == 1){
            return a - b;   //从小到大排
        }else if(zmp == 2){
            return b - a;   //从大到小排
        }else {
            return Math.random() - 0.5;   //数组洗牌
        }
    });
    return arr;
}

//截取字符串
export function cutstr(str, length) {
    let len = length * 2;
    var temp;
    var icount = 0;
    var patrn = /[^\x00-\xff]/;
    var strre = "";
    for ( var i = 0; i < str.length; i++) {
        if (icount < len - 1) {
            temp = str.substr(i,1);
            if (patrn.exec(temp) == null) {
                icount = icount + 1;
            } else {
                icount = icount + 2;
            }
            strre += temp;
        } else {
            break;
        }
    }
    return strre + "...";
}

//清除句子中包含得空格
export function quchukongge(zi)
{
    var result = zi.replace(/(^\s+)|(\s+$)/g,"");
    return result.replace(/\s/g,"");
}

/**
 * 动态加载脚本文件
 */
export function appendscript(src, text, reload, charset) {
    var id = hash(src + text);
    if (!reload && in_array(id, evalscripts))
        return;
    if (reload && $(id)) {
        $(id).parentNode.removeChild($(id));
    }

    evalscripts.push(id);
    var scriptNode = document.createElement("script");
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

//生成下载
export function download(href, title) {
    const a = document.createElement('a');
    a.setAttribute('href', href);
    a.setAttribute('download', title);
    a.click();
}

//判断是不是空对象
export function kongobj(obj){
    return JSON.stringify(obj) == "{}"
}

//判断是否为null或者undefind
export function kong(zhi){
    if(zhi == null || typeof (zhi) == "undefined"){
        return false
    }else if(typeof (zhi) == "object"){
        return true
    }else {
        return true
    }
}

//判断是否包含字符串
export function baohan(str,zi){
    if(str.indexOf(zi) >= 0 ){
        return true;
    }else {
        return false;
    }
}
//保留两位小数
//功能：将浮点数四舍五入，取小数点后2位
export function toDecimal(x) {
    var f = parseFloat(x);
    if (isNaN(f)) {
        return;
    }
    f = Math.round(x*100)/100;
    return f;
}