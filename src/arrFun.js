import { cloneop } from './obj';
import {StringToNumber} from "./string";

//查
//数组获取最后一个元素
export let arrLast = arr => {
  return arr[arr.length - 1];
};

//判断是不是数组
export let isArrayop = arr => {
  return arr instanceof Array;
};

//查看数组1中的元素，在数组2中是否存在，若存在，则返回,arr1=[{name:1,key:1},{name:2,key:2}]  arr2=[1,2]
export let isArr1hasArr2 = (arr1, arr2, arr1Key = 'name', fun = () => {}) => {
  let arr = [];
  for (let t of arr1) {
    let index = arr2.find((data, a) => {
      return t[arr1Key] === data;
    });
    if (index) {
      arr.push(t);
    } else {
      fun();
    }
  }
  return arr;
};

//获取一个数组中，被选中的几个元素
export let arrKeySelected = (
  arr,
  judge = data => {
    return true;
  }
) => {
  let arr_ = [];
  for (let i of arr) {
    if (judge(i)) {
      arr_.push(i);
    }
  }
  return arr_;
};

//判断数组中是否包含元素
export function arrHasKey(arr,shan){
    let zhi = arr.findIndex(function(value, index, arr) {
        return value == shan;
    })
    if(zhi == -1){
        return false
    }else {
        return true
    }
}

//输入数组，会随机抽取数组中得一个值输出
export function arrShowRandom(arr){
    return arr[Math.floor((Math.random()*arr.length))];
}

//取最大值
export function arrFindMax(arr){
    return Math.max.apply(Math, arr);
}

//取最小值
export function arrFindMin(arr){
    return Math.min.apply(Math, arr);
}

//字符串数组相加并且返回
export let arrAdd = (arr,otherString="")=>{
    let value = "";
    for (let i of arr){
        value+=(otherString + i);
    }
    return value;
}


//删
//js删除数组最后一个元素
export function truncate(arr){
  let m = arr.slice(0);
  m.splice(m.length - 1, 1);
  return m;
};

//删除数组中得第一个出现得
export function arrDelFirst(arr,shan){
    let zhi = arr.findIndex(function(value, index, arr) {
        return value == shan;
    })
    if(zhi !== -1){
        arr.splice(zhi,1)
    }
    return arr
}

//数组去除重复chongfu([1,2,3,4,5,1,1]),返回12345
export function arrDelrepeat(arr) {
    let result = [], json = {};
    for (let i = 0, len = arr.length; i < len; i++){
        if (!json[arr[i]]) {
            json[arr[i]] = 1;
            result.push(arr[i]);  //返回没被删除的元素
        }
    }
    return result;
};

//删除数组中的空格null,undefined之类的包括字符串类型的
export let arrDelNull = (arr) => {
    let arr_ = []
    for (let i  of arr) {
        if (i !== "" && i !== null && i !== undefined && i !== "null" && i !== "undefined") {
            arr_.push(i)
        }
    }
    return arr_
}

//js删除指定下标的元素
export let arrDelIndex = (arr,index) => {
    let arr_ = cloneop(arr)
    arr_.splice(index, 1)
    return arr_
}

//改
//将对象数组中的某个children塞进一个数组中
export let arrChild = arr => {
  let arr_ = [];
  for (let i of arr) {
    if (i.children) {
      arr_ = [...i.children, ...arr_];
    }
  }
  return arr_;
};

//数组换位置[1,2,3] >>>>> [3,1,2]，arr是原数组，index1,2是需要换位置的2个元素的下标   console.log('111111111示例：', swapArray([1,2,3],1,2));  111111111示例： (3) [1, 3, 2]
export let swapArray = (arr, index1, index2) => {
  arr[index1] = arr.splice(index2, 1, arr[index1])[0];
  return arr;
};

//在数组指定位置添加一个元素
export let arrIndexSet = (arr, index, value) => {
  let arr_ = cloneop(arr);
  arr_.splice(index, 0, value);
  return arr_;
};

//将数组中的每个字符串都转成数字
export const arrStringToNumber=(arr)=>{
    let _arr = []
    if(isArrayop(arr)){
        for (let i of arr){
            _arr.push(StringToNumber(i))
        }
    }
    return _arr;
}

//将数组中的每个数字都转成字符串
export const arrNumberToString=(arr)=>{
    let _arr = []
    if(isArrayop(arr)){
        for (let i of arr){
            _arr.push(i.toString())
        }
    }
    return _arr;
}


//排序
//数组排序，默认随机排序
export function arrSort(arr,zmp=3){
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

