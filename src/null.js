//判断值是否为null或者undefind
export function isValEmpty(val){
    if(val == null || typeof (val) == "undefined" || val == ''){
        return false
    }else if(typeof (val) == "object"){
        return true
    }else {
        return true
    }
}