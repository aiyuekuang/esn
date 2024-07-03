//截取字符串
import {arrDelNull, stringArrAddValue} from "./arrFun";

export function strCut(str: string, length: number) {
  let len = length * 2;
  let temp;
  let icount = 0;
  let patrn = /[^\x00-\xff]/;
  let strre = "";
  for (let i = 0; i < str.length; i++) {
    if (icount < len - 1) {
      temp = str.substr(i, 1);
      if (patrn.exec(temp) === null) {
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
export function strSpace(zi: string) {
  let result = zi.replace(/(^\s+)|(\s+$)/g, "");
  return result.replace(/\s/g, "");
}

//str中是否包含key这个字符
export function strHasKey(str: string, key: any) {
  if (typeof (str) !== 'string') {
    console.log('错误：这不是一个字符串');
    return false;
  }
  return str.indexOf(key) !== -1;
}

//随机类
export let uid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};


//将一个多层的url转变成一个逐级的url数组
export let urlToArr = (value: any) => {
  if (!value) {
    return []
  }
  return stringArrAddValue(arrDelNull(value.split("/")))
}

//是否是字符串
export function isString(value: any) {
  return Object.prototype.toString.call(value) === "[object String]"
}

//字符串转整数
export const StringToNumber = (value:any) => {
  return parseInt(value);
}

//字符串转布尔值
export const StringToBoolean = (value:any) => {
  if (value === "true") {
    return true
  } else {
    return false
  }
}
