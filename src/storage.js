//localStorage的
export function cun(key, value) {
    if (typeof (value) == 'string') {
        return localStorage.setItem(key, value);
    } else if (typeof (value) == "undefined") {
        return localStorage.setItem(key, '');
    } else if (typeof (value) == 'number') {
        return localStorage.setItem(key, value.toString());
    } else if (typeof (value) == 'object') {
        return localStorage.setItem(key, JSON.stringify(value));
    }
}

export function qu(val) {
    return localStorage.getItem(val);
}

export function quObj(val) {
    let data = localStorage.getItem(val)
    if (data) {
        return JSON.parse(localStorage.getItem(val));
    } else {
        return null
    }
}

export function shan(val) {
    return localStorage.removeItem(val);
}


//sessionStorage的
export function cuns(key, value) {
    if (typeof (value) == 'string') {
        return sessionStorage.setItem(key, value);
    } else if (typeof (value) == "undefined") {
        return sessionStorage.setItem(key, '');
    } else if (typeof (value) == 'number') {
        return sessionStorage.setItem(key, value.toString());
    } else if (typeof (value) == 'object') {
        return sessionStorage.setItem(key, JSON.stringify(value));
    }
}

export function qus(val) {
    return sessionStorage.getItem(val);
}

export function qusObj(val) {
    let data = sessionStorage.getItem(val)
    if (data) {
        return JSON.parse(sessionStorage.getItem(val));
    } else {
        return null
    }
}

export function shans(val) {
    return sessionStorage.removeItem(val);
}

export function shansAll() {
    return sessionStorage.clear();
}


//cookies的
//时间是天,默认30天
export function cunc(name,value,time=30,path="/") {
    if(!name||!value) return;
    let exp  = new Date();
    exp.setTime(exp.getTime() + time*24*60*60*1000);
    document.cookie = name + "="+ encodeURIComponent(value) +";expires="+ exp.toUTCString() + `; path=${path};`;
}

export function quc(name) {
    let arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

//删除cookie
export function shanc(name){
    let exp = new Date();
    exp.setTime(exp.getTime() - 1);
    let cval=quc(name);
    if(!cval) document.cookie=name +"="+cval+";expires="+exp.toUTCString();
}
