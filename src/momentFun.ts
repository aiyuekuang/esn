import moment from 'moment';
import {isString} from "./string";


export let dateFormat = 'YYYY-MM-DD';
export let monthFormat = 'YYYY-MM';
export const yearFormat = 'YYYY';
export const timeFormat = 'YYYY-MM-DD HH:mm:ss';


//天相关
// 获取今天
export let current = (isFormat = true) => {
  let date = moment();
  if (isFormat) {
    return date.format(dateFormat);
  } else {
    return date;
  }
};
//获取明天,mom就是相对的日期，默认是今天
export let tomorrow = (mom = moment(), isFormat = true) => {
  let date = mom.add(1, 'd');
  if (isFormat) {
    return date.format(dateFormat);
  } else {
    return date;
  }
};
//获取昨天
export let yesterday = (mom = moment(), isFormat = true) => {
  let date = mom.subtract(1, 'days');
  if (isFormat) {
    return date.format(dateFormat);
  } else {
    return date;
  }
};

//获取前天
export let dayBeforYesterday = (mom = moment(), isFormat = true) => {
  let date = mom.subtract(2, 'days');
  if (isFormat) {
    return date.format(dateFormat);
  } else {
    return date;
  }
};
//获取前几天的日期，几天就是多少的num
export let dayBefore = (num: number, mom = moment(), isFormat = true) => {
  let date = mom.subtract(num, 'days');
  if (isFormat) {
    return date.format(dateFormat);
  } else {
    return date;
  }
};

//获取后几天的日期，几天就是多少的num
export let dayAfter = (num: number, mom = moment(), isFormat = true) => {
  let date = mom.add(num, 'days');
  if (isFormat) {
    return date.format(dateFormat);
  } else {
    return date;
  }
};

//周相关
//获取上周的周一
export let lastMonday = (mom = moment(), isFormat = true) => {
  let date = mom.isoWeekday(-6);
  if (isFormat) {
    return date.format(dateFormat);
  } else {
    return date;
  }
};
//上周的周日
export let lastSunday = (mom = moment(), isFormat = true) => {
  let date = mom.isoWeekday(0);
  if (isFormat) {
    return date.format(dateFormat);
  } else {
    return date;
  }
};

//获取本周周一
export let currentMonday = (mom = moment(), isFormat = true) => {
  let date = mom.isoWeekday(1);
  if (isFormat) {
    return date.format(dateFormat);
  } else {
    return date;
  }
};
//获取本周周日
export let currentSunday = (mom = moment(), isFormat = true) => {
  let date = mom.isoWeekday(7);
  if (isFormat) {
    return date.format(dateFormat);
  } else {
    return date;
  }
};

//获取本周任意一天，比如周一就输入1
export let weekNum = (num: number, mom = moment(), isFormat = true) => {
  let date = mom.isoWeekday(num);
  if (isFormat) {
    return date.format(dateFormat);
  } else {
    return date;
  }
};

//获取今天是星期几
export let weekNumToday = (mom = moment()) => {
  return mom.format('d');
};

//获取本年
export let currentYear = (isFormat = true): any => {
  let date = moment();
  if (isFormat) {
    return date.format(yearFormat);
  } else {
    return date;
  }
};
//月相关
//获取几个月前，默认是获取一个月前
export let monthBefore = (num = 1, mom = moment(), isFormat = true) => {
  let date = mom.subtract(num, 'months');
  if (isFormat) {
    return date.format(dateFormat);
  } else {
    return date;
  }
};

//获取几个月后，默认是获取一个月后
export let monthAfter = (num = 1, mom = moment(), isFormat = true) => {
  let date = mom.add(num, 'months');
  if (isFormat) {
    return date.format(dateFormat);
  } else {
    return date;
  }
};

//获取某个月有多少天
export let daysInMonth = (current: any, format = monthFormat) => {
  return moment(current, format).daysInMonth();
};

//获取本月
export let currentMonth = (isFormat = true) => {
  let date = moment();
  if (isFormat) {
    return date.format(monthFormat);
  } else {
    return date;
  }
};

//两个日期是否一样
export let isSame = (current: string, date: any, type: any = 'day', format: string = dateFormat): boolean => {
  let aa = moment(current, format).format('YYYY-MM-DD');
  let dd = moment(date, format).format('YYYY-MM-DD');

  return moment(aa).isSame(dd, type);
};
//是否是本月
export let isCurrentMonth = (year: any, format = monthFormat) => {
  let mom = moment(year, format);
  return isSame(mom.format(monthFormat), currentYear(true));
};

//年相关
// 是否是闰年
export let isLeapYear = (year: string, format = dateFormat) => {
  let mom = moment(year, format);
  return mom.isLeapYear();
};


//是否是今年
export let isCurrentYear = (year: string, format = yearFormat): boolean => {
  let mom = moment(year, format);
  return isSame(mom.format(yearFormat), currentYear(true));
};

//日期的比较计算相关,current是否在date之前,默认都是使用format来格式化日期
//是否在current之前
export let isBefore = (current: string, date: string, type: any = 'day', format = dateFormat) => {
  let aa = moment(current, format).format('YYYY-MM-DD');
  let dd = moment(date, format).format('YYYY-MM-DD');

  return moment(aa).isBefore(dd, type);
};


//是否晚于第二个时间
export let isAfter = (current: string, date: string, type: any = 'day', format = dateFormat) => {
  let aa = moment(current, format).format('YYYY-MM-DD');
  let dd = moment(date, format).format('YYYY-MM-DD');

  return moment(aa).isAfter(dd, type);
};

//是否在后面2个时间之间
export let isBetween = (current: string, date1: string, date2: string, type: any = 'day', format = dateFormat) => {
  let aa = moment(current, format).format('YYYY-MM-DD');
  let dd1 = moment(date1, format).format('YYYY-MM-DD');
  let dd2 = moment(date2, format).format('YYYY-MM-DD');

  return moment(aa).isBetween(dd1, dd2, type);
};

//所给时间与现在的时间的距离
export let fromNow = (current: string, bool = false, format = dateFormat) => {
  return moment(current, format).fromNow(bool);
};

//时差,默认输出时间戳，可以输出具体的时间,type:days,months,years，relative，false是默认的，true是传递真正的时间
export let diff = (date1: string, date2: string, format = dateFormat, type = null, relative = false) => {
  let a = moment(date1, format);
  let b = moment(date2, format);

  if (type) {
    if (relative) {
      return a.diff(b, type, relative);
    } else {
      return a.diff(b, type);
    }
  } else {
    return a.diff(b);
  }
};

//是否是今天 date传字符串即可
export let isToday = (date: string, format = dateFormat) => {
  if (isString(date)) {
    return isSame(date, current(), 'day', format);
  } else {
    return false;
  }
};

//是否是上周一
export let isLastMonday = (date: string, format = dateFormat) => {
  if (isString(date)) {
    return isSame(date, lastMonday(), 'day', format);
  } else {
    return false;
  }
};

//是否是本周一
export let isCurrentMonday = (date: any = current(), format = dateFormat) => {
  if (isString(date)) {
    return isSame(date, currentMonday(), 'day', format);
  } else {
    return false;
  }
};
//moment的转化
//moment转化成数组
export let momToArray = (current = null, format = dateFormat) => {
  if (current) {
    return moment(current, format).toArray();
  } else {
    return moment().toArray();
  }
};

//转化成json
export let momToJson = (current = null, format = dateFormat) => {
  if (current) {
    return moment().toJSON();
  } else {
    return moment(current, format).toJSON();
  }
};

//转化成对象
export let momToObj = (current = null, format = dateFormat) => {
  if (current) {
    return moment().toObject();
  } else {
    return moment(current, format).toObject();
  }
};

//moment对象转化为date对象
export let momentToDate = (mom = moment()) => {
  return mom.toDate();
};

//时间戳转成字符串
export let timestampToString = (date: string, format = dateFormat) => {
  return moment(date).format(format)
};

//其他骚操作相关

//转换当前时间的Unix时间戳
export let momentToUnix = (mom = moment()) => {
  return mom.format('X');
};

//时间相关
//获取当前时间
export let currentTime = (isFormat = true) => {
  let date = moment();
  if (isFormat) {
    return date.format('hh:m:ss');
  } else {
    return date;
  }
};

//获取当前日期加时间
export let currentDateTime = (format = timeFormat, isFormat = true) => {
  let date = moment();
  if (isFormat) {
    return date.format(format);
  } else {
    return date;
  }
};

//获取简易的时间
// moment(new Date()).format('MM月DD日'); --- 09月01日
// moment(new Date()).format('MMM'); --- 9月
// moment(new Date()).format('MMMM'); --- 九月
// moment(new Date()).format('dd'); --- 六
// moment(new Date()).format('ddd'); --- 周六
// moment(new Date()).format('dddd'); --- 星期六
// moment(new Date()).isoWeekday(); --- 6
// moment(new Date()).isoWeekYear(); --- 2018
// moment(new Date()).format('LT'); --- 16:56
// moment(new Date()).format('LTS'); --- 16:56:34
// moment(new Date()).format('L'); --- 2018-09-01
// moment(new Date()).format('LL'); --- 2018年09月01日
// moment(new Date()).format('LLL'); --- 2018年09月01日下午4点56分
// moment(new Date()).format('LLLL'); --- 2018年09月01日星期六下午4点56分
// moment(new Date()).format('l'); --- 2018-9-1
// moment(new Date()).format('ll'); --- 2018年9月1日
// moment(new Date()).format('lll'); --- 2018年9月1日 16:56
// moment(new Date()).format('llll'); --- 2018年9月1日星期六 16:56
// moment(new Date()).format('A'); --- 下午
// moment(new Date()).format('a'); --- 下午
// moment(new Date()).format('ALT') --- 下午17:09
export let simpleTime = (current = null, formatSet = 'MM月DD日', format = dateFormat) => {
  if (current) {
    return moment(current, format).format('a');
  } else {
    return moment().format('a');
  }
};


//时间戳

//获取时间戳20170626164644864，就是这种类型
export function NowTimeCode() {
  let Result = "";

  let now: any = new Date();

  let year = now.getYear();

  if (now.getYear() < 1900) {
    year = now.getYear() + 1900;
  }

  let month = now.getMonth() + 1;
  let day = now.getDate();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let second = now.getSeconds();
  let millisecond = now.getMilliseconds();

  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;
  if (hour < 10) hour = "0" + hour;
  if (minutes < 10) minutes = "0" + minutes;
  if (second < 10) second = "0" + second;

  if (millisecond < 10)
    millisecond = "00" + millisecond;
  else {
    if (millisecond < 100) {
      millisecond = "0" + millisecond;
    }
  }

  Result = year.toString() + month.toString() + day.toString() + hour.toString() + minutes.toString() + second.toString() + millisecond.toString();

  return Result;
}

export let initFormat = (_dateFormat: string, _monthFormat: string) => {
  dateFormat = _dateFormat;
  monthFormat = _monthFormat;
}
