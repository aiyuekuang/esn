
//判断是不是空对象
export function objEmpty(obj){
    return JSON.stringify(obj) == "{}"
}

//对象类
//比较两个对象是否一样、
export let diffObj = (obj1, obj2) => {
    return JSON.stringify(obj1) !== JSON.stringify(obj2);
};

export let isEmptyObj = obj => {
    return JSON.stringify(obj) !== '{}';
};


//深拷贝！！！！！，可以是对象也可以是数组
export function cloneop(obj) {
    let copy;

    // Handle the 3 simple types, and null or undefined
    if (null == obj || 'object' != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = cloneop(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = cloneop(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}