
//定时循环相关
//延时时间执行下面的代码   sleep(1000)延时1秒执行下面的代码
export let sleep = numberMillis => {
    let now = new Date();
    let exitTime = now.getTime() + numberMillis;
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime) return;
    }
};

//根据判断，重复执行,bool是一个bool函数
// let a = 1;
// setTimeout(()=>{
//   a = 10
// },10000)
// loopExecute(() => {
//   return  a === 10;
// },()=>{
//   console.log("终于可以执行了")
// });
export let loopExecute = (bool = () => {}, fun = () => {}, time = 100) => {
    if (bool()) {
        fun();
    } else {
        setTimeout(() => loopExecute(bool, fun, time), time);
    }
};