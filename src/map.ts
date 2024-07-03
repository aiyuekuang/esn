//创建map类型数据
export let createMap = (arr:any, type = 'id') => {
    let Maps = new Map();
    for (let i of arr.keys()) {
        if (type) {
            Maps.set(arr[i][type], arr[i]);
        } else {
            Maps.set(i, arr[i]);
        }
    }
    return Maps;
};
