//判断值是否为null或者undefind
export function valEmpty(zhi){
    if(zhi == null || typeof (zhi) == "undefined" || zhi == ''){
        return false
    }else if(typeof (zhi) == "object"){
        return true
    }else {
        return true
    }
}