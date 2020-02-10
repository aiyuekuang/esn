//截取字符串
export function strCut(str, length) {
    let len = length * 2;
    let temp;
    let icount = 0;
    let patrn = /[^\x00-\xff]/;
    let strre = "";
    for ( let i = 0; i < str.length; i++) {
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
export function strSpace(zi)
{
    let result = zi.replace(/(^\s+)|(\s+$)/g,"");
    return result.replace(/\s/g,"");
}

//str中是否包含key这个字符
export function strHasKey(str,key){
    if(typeof (str) !== 'string'){
        console.log('错误：这不是一个字符串');
        return false;
    }
    return str.indexOf(key) !== -1;
}

//随机类
export let uid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (Math.random() * 16) | 0,
            v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};

