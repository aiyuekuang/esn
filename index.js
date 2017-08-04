"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.cun = cun;
exports.qu = qu;
exports.shan = shan;
exports.cuns = cuns;
exports.qus = qus;
exports.qus_obj = qus_obj;
exports.shans = shans;
exports.shans_all = shans_all;
exports.arr_in = arr_in;
exports.arr_del = arr_del;
exports.changgepage = changgepage;
exports.arr_random = arr_random;
exports.convert = convert;
exports.NowTimeCode = NowTimeCode;
exports.getNowDate = getNowDate;
exports.arr_repeat = arr_repeat;
exports.arr_max = arr_max;
exports.arr_min = arr_min;
exports.arr_sort = arr_sort;
exports.str_cut = str_cut;
exports.str_space = str_space;
exports.appendscript = appendscript;
exports.download = download;
exports.obj_empty = obj_empty;
exports.val_empty = val_empty;
exports.str_val = str_val;
exports.num_Rounding = num_Rounding;
/**
 * Created by zengtao on 2017/3/29.
 */
//正则区域
var reg = exports.reg = {
    emailReg: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/, //emall
    ip: /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g, //ip地址
    shuzi: "^[0-9]*$", //只能输入数字
    tel: "^(\(\d{3,4}-)|\d{3.4}-)?\d{7,8}$", //手机号
    sfz: "^\d{15}|\d{18}$" //身份证
};

function cun(key, value) {
    if (typeof value == 'string') {
        return localStorage.setItem(key, value);
    } else if (typeof value == "undefined") {
        return localStorage.setItem(key, '');
    } else if (typeof value == 'number') {
        return localStorage.setItem(key, value.toString());
    } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) == 'object') {
        return localStorage.setItem(key, JSON.stringify(value));
    }
}

function qu(val) {
    return localStorage.getItem(val);
}

function shan(val) {
    return localStorage.removeItem(val);
}

function cuns(key, value) {
    if (typeof value == 'string') {
        return sessionStorage.setItem(key, value);
    } else if (typeof value == "undefined") {
        return sessionStorage.setItem(key, '');
    } else if (typeof value == 'number') {
        return sessionStorage.setItem(key, value.toString());
    } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) == 'object') {
        return sessionStorage.setItem(key, JSON.stringify(value));
    }
}

function qus(val) {
    return sessionStorage.getItem(val);
}

function qus_obj(val) {
    return JSON.parse(sessionStorage.getItem(val));
}

function shans(val) {
    return sessionStorage.removeItem(val);
}

function shans_all(val) {
    return sessionStorage.clear();
}
//判断数组中是否包含元素
function arr_in(arr, shan) {
    var zhi = arr.findIndex(function (value, index, arr) {
        return value == shan;
    });
    if (zhi == -1) {
        return false;
    } else {
        return true;
    }
}
//删除数组中得第一个出现得
function arr_del(arr, shan) {
    var zhi = arr.findIndex(function (value, index, arr) {
        return value == shan;
    });
    if (zhi !== -1) {
        arr.splice(zhi, 1);
    }
    return arr;
}

//browserHistory形式得跳转
function changgepage(url, parm) {
    for (var i in parm) {
        cuns(i.toString(), parm[i]);
    }
    browserHistory.push({
        pathname: url
    });
}

//输入数组，会随机抽取数组中得一个值输出
function arr_random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

//输入3000，变成3,000.00
function convert(money) {
    var s = money; //获取小数型数据
    s += "";
    if (s.indexOf(".") == -1) s += ".00"; //如果没有小数点，在后面补个小数点和00
    if (/\.\d$/.test(s)) s += "0"; //正则判断
    while (/\d{4}(\.|,)/.test(s)) {
        //符合条件则进行替换
        s = s.replace(/(\d)(\d{3}(\.|,))/, "$1,$2");
    } //每隔3位添加一个
    return s;
}
//获取时间戳20170626164644864，就是这种类型
function NowTimeCode() {
    var Result = "";

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
    if (day < 10) day = "0" + day;
    if (hour < 10) hour = "0" + hour;
    if (minutes < 10) minutes = "0" + minutes;
    if (second < 10) second = "0" + second;

    if (millisecond < 10) millisecond = "00" + millisecond;else {
        if (millisecond < 100) {
            millisecond = "0" + millisecond;
        }
    }

    Result = year.toString() + month.toString() + day.toString() + hour.toString() + minutes.toString() + second.toString() + millisecond.toString();

    return Result;
}

//获取当前日期
function getNowDate() {
    var lianjie = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '-';

    var now = new Date();
    var month = now.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }
    var day = now.getDate();
    if (day < 10) {
        day = "0" + day;
    }
    return now.getFullYear() + lianjie + month + lianjie + day;
}

//数组去除重复chongfu([1,2,3,4,5,1,1]),返回12345
function arr_repeat(arr) {
    var result = [],
        json = {};
    for (var i = 0, len = arr.length; i < len; i++) {
        if (!json[arr[i]]) {
            json[arr[i]] = 1;
            result.push(arr[i]); //返回没被删除的元素
        }
    }
    return result;
};

//取最大值
function arr_max(arr) {
    return Math.max.apply(Math, arr);
}

//取最小值
function arr_min(arr) {
    return Math.min.apply(Math, arr);
}

//数组排序
function arr_sort(arr) {
    var zmp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;

    arr.sort(function (a, b) {
        if (zmp == 1) {
            return a - b; //从小到大排
        } else if (zmp == 2) {
            return b - a; //从大到小排
        } else {
            return Math.random() - 0.5; //数组洗牌
        }
    });
    return arr;
}

//截取字符串
function str_cut(str, length) {
    var len = length * 2;
    var temp;
    var icount = 0;
    var patrn = /[^\x00-\xff]/;
    var strre = "";
    for (var i = 0; i < str.length; i++) {
        if (icount < len - 1) {
            temp = str.substr(i, 1);
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
function str_space(zi) {
    var result = zi.replace(/(^\s+)|(\s+$)/g, "");
    return result.replace(/\s/g, "");
}

/**
 * 动态加载脚本文件
 */
function appendscript(src, text, reload, charset) {
    var id = hash(src + text);
    if (!reload && in_array(id, evalscripts)) return;
    if (reload && $(id)) {
        $(id).parentNode.removeChild($(id));
    }

    evalscripts.push(id);
    var scriptNode = document.createElement("script");
    scriptNode.type = "text/javascript";
    scriptNode.id = id;
    scriptNode.charset = charset ? charset : BROWSER.firefox ? document.characterSet : document.charset;
    try {
        if (src) {
            scriptNode.src = src;
            scriptNode.onloadDone = false;
            scriptNode.onload = function () {
                scriptNode.onloadDone = true;
                JSLOADED[src] = 1;
            };
            scriptNode.onreadystatechange = function () {
                if ((scriptNode.readyState == 'loaded' || scriptNode.readyState == 'complete') && !scriptNode.onloadDone) {
                    scriptNode.onloadDone = true;
                    JSLOADED[src] = 1;
                }
            };
        } else if (text) {
            scriptNode.text = text;
        }
        document.getElementsByTagName('head')[0].appendChild(scriptNode);
    } catch (e) {}
}

//生成下载
function download(href, title) {
    var a = document.createElement('a');
    a.setAttribute('href', href);
    a.setAttribute('download', title);
    a.click();
}

//判断是不是空对象
function obj_empty(obj) {
    return JSON.stringify(obj) == "{}";
}

//判断值是否为null或者undefind
function val_empty(zhi) {
    if (zhi == null || typeof zhi == "undefined") {
        return false;
    } else if ((typeof zhi === "undefined" ? "undefined" : _typeof(zhi)) == "object") {
        return true;
    } else {
        return true;
    }
}

//判断是否包含字符串
function str_val(str, zi) {
    if (str.indexOf(zi) >= 0) {
        return true;
    } else {
        return false;
    }
}
//保留两位小数
//功能：将浮点数四舍五入，取小数点后2位
function num_Rounding(x) {
    var f = parseFloat(x);
    if (isNaN(f)) {
        return;
    }
    f = Math.round(x * 100) / 100;
    return f;
}
