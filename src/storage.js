
//localStorage的
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

export function quObj(val){
    return JSON.parse(localStorage.getItem(val));
}
export function shan(val){
    return localStorage.removeItem(val);
}


//sessionStorage的
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

export function qusObj(val){
    return JSON.parse(sessionStorage.getItem(val));
}

export function shans(val){
    return sessionStorage.removeItem(val);
}

export function shansAll(val){
    return sessionStorage.clear();
}