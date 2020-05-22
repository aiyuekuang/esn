//输入3000，变成3,000.00
export function numFormatThousandTwoDecimal(money) {
    let s = money; //获取小数型数据
    s += "";
    if (s.indexOf(".") == -1) s += ".00"; //如果没有小数点，在后面补个小数点和00
    if (/\.\d$/.test(s)) s += "0"; //正则判断
    while (/\d{4}(\.|,)/.test(s)) //符合条件则进行替换
        s = s.replace(/(\d)(\d{3}(\.|,))/, "$1,$2"); //每隔3位添加一个
    return s;
}

//保留两位小数
//功能：将浮点数四舍五入，取小数点后2位
export function numRounding(x) {
    let f = parseFloat(x);
    if (isNaN(f)) {
        return;
    }
    f = Math.round(x * 100) / 100;
    return f;
}

//数字处理
//数字代表金额的时候进行的格式化      console.log('111111111示例：', numFormat(1000000));  111111111示例： 1,000,000
export function numFormatThousand(num) {
    var reg = /\d{1,3}(?=(\d{3})+$)/g;
    return (num + '').replace(reg, '$&,');
}

//判断是不是数字,包括小数点类型的数据
export function isNumberop(val) {
    let regPos = /^\d+(\.\d+)?$/; //非负浮点数
    let regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
    return (regPos.test(val) || regNeg.test(val))
}

