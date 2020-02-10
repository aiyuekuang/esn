//前言：树tree：{ id: 1, children:[{ id: 2, children: [{ id: 3, children: { id: 4, } }] }] }
//树数组treeArr:[{ id: 1, children:[{ id: 2, children: [{ id: 3, children: { id: 4, } }] }] }]
//单层树treeObj:{ b: 1, children: { b: 2, children: { b: 3, children: { b: 4 } } } }

//查

//输入一个层，在一个树中，获取这个层的所有值
//示例console.log("示例：", treeGetObject(2,{a:1,children:{a:2,children: {a:3}}}));
import {cloneop} from "./obj";
import {isArrayop} from "./arrFun";

export let treeGetObject = (layer, treeObj, children = 'children') => {
  let obj = null;
  if (!treeObj) {
    console.log('提示', '你传递的tree是空');
  }
  let treeObj_ = cloneop(treeObj);

  let loop = (layer, treeObj_, lay = 0) => {
    lay++;
    if (layer !== lay && treeObj_[children]) {
      loop(layer, treeObj_[children], lay);
    } else {
      obj = treeObj_;
    }
  };

  loop(layer, treeObj_);
  return obj;
};

//通过主键在树数组中查找到对象    console.log('111111111示例：', treeFindObjById(3,[{ id: 1, children:[{ id: 2, children: [{ id: 3, children: { id: 8, } }] }] }]));
export let treeFindObjById = (id, tree, idTit = 'id', children = 'children') => {
  if (!tree) {
    console.log('提示', '你传递的tree是空');
  }
  let tree_ = cloneop(tree);
  let obj = null;
  if (!isArrayop(tree_)) {
    tree_ = [tree_];
  }

  let loop = tree => {
    for (let i of tree) {
      if (id === i[idTit]) {
        obj = i;
        break;
      } else {
        if (i[children] && i[children].length > 0) {
          loop(i[children]);
        }
      }
    }
  };

  loop(tree_);
  return obj;
};

//输入一个固定的数组，下标就是层，在树数组中，找出这个值，常见场景：给定一个url的数组，在导航菜单中找到那个最深的对象。console.log('111111111示例：', treeSearchByArr([{ id: 1, children:[{ id: 2, children: [{ id: 3, children: { id: 8, } }] }] }], [1, 2, 3]));
export let treeSearchByArr = (tree, arr, label = 'id', children = 'children') => {
  let layer = 0;
  let obj = {};
  if (!tree) {
    console.log('提示', '你传递的tree是空');
  }
  let tree_ = cloneop(tree);
  if (!isArrayop(tree_)) {
    tree_ = [tree_];
  }
  let loop = tree_ => {
    for (let i of tree_) {
      if (i[label] === arr[layer]) {
        layer++;
        if (arr[layer] && i[children] && i[children].length) {
          loop(i[children]);
        } else {
          obj = i;
          break;
        }
      }
    }
  };
  loop(tree_);
  return obj;
};

//树数组中是否包含某个键值     console.log('111111111示例：', treeHasKey([{ id: 1, children:[{ id: 2, children: [{ id: 3, children: { id: 8, } }] }] }],"id"));
export let treeHasKey = (tree, key, children = 'children') => {
  let isEqual = false;
  if (!tree) {
    console.log('提示', '你传递的tree是空');
    return isEqual;
  }
  let tree_ = cloneop(tree);
  if (!isArrayop(tree_)) {
    tree_ = [tree_];
  }

  let loop = node => {
    for (let i of node) {
      if (i && i[key]) {
        isEqual = true;
        break;
      } else {
        let i_ = i[children];
        if (i_ && !isArrayop(i_)) {
          i_ = [i[children]];
        }
        if (i_ && i_.length > 0) {
          loop(i_);
        }
      }
    }
  };
  loop(tree_);
  return isEqual;
};

//在树中获取一个下标的元素，拿到元素中所有层级的指定值，场景：多级联动时，获取一个从第一层到最后一层的默认值
// export let treeGetValue = (tree,index, key, children = 'children') => {
//   let isEqual = false;
//   if (!tree) {
//     console.log('提示', '你传递的tree是空');
//   }
//   let tree_ = cloneop(tree);
//   if (!isArrayop(tree_)) {
//     tree_ = [tree_];
//   }
//   let loop = node => {
//     for (let i of node) {
//       if (i && i[key]) {
//         isEqual = true;
//         break;
//       } else {
//         if (i[children] && i[children].length > 0) {
//           loop(i[children]);
//         }
//       }
//     }
//   };
//   loop(tree_);
//   return isEqual;
// };

//增
//将树形数组中的所有第二层的children组合到一个数组中      console.log('111111111示例：', arrChild([{ id: 1, children:[{ id: 2, children: [{ id: 3, children: { id: 8, } }] }] }]));
export let arrChild = arr => {
  let arr_ = [];
  for (let i of arr) {
    if (i.children) {
      arr_ = [...i.children, ...arr_];
    }
  }
  return arr_;
};

//删

//改
//给树数组结构遍历，并且在每个对象中写入一个属性,并且根据判断来添加      console.log('111111111示例：', treeSetData([{ id: 1, children:[{ id: 2, children: [{ id: 3, children: { id: 8, } }] }] }],"a",{b:1}));
export let treeSetData = (
  tree = [],
  field = 'zi',
  obj = {},
  children = 'children',
  judge = () => {
    return true;
  }
) => {
  if (!tree) {
    console.log('提示', '你传递的tree是空');
  }
  let tree_ = cloneop(tree);
  if (!isArrayop(tree_)) {
    tree_ = [tree_];
  }

  let loop = tree => {
    for (let i of tree) {
      if (judge(i)) {
        if (typeof obj == 'function') {
          i[field] = obj();
        } else {
          i[field] = obj;
        }
      }
      if (i[children] && i[children].length > 0) {
        loop(i[children]);
      }
    }
  };
  loop(tree_);
  return tree_;
};

//给树形结构遍历，并且在每个对象中写入一个对应的树属性,并且根据判断来添加
export let treeSetFun = (
  tree = [],
  field = 'zi',
  fun = data => {},
  children = 'children',
  judge = () => {
    return true;
  }
) => {
  if (!tree) {
    console.log('提示', '你传递的tree是空');
  }
  let tree_ = cloneop(tree);
  if (!isArrayop(tree_)) {
    tree_ = [tree_];
  }
  let loop = (tree, layer = 0) => {
    let lay = layer;
    lay++;

    for (let i of tree) {
      if (judge(i)) {
        i[field] = fun(i);
      }
      if (i[children] && i[children].length > 0) {
        loop(i[children], lay);
      }
    }
  };
  loop(tree_);
  return tree_;
};

//将一个对象数组中的每个元素，写入树的每个对象
// console.log(
//   '111111111示例：',
//   treeSetObjArr(
//     [
//       {
//         id: 1,
//         children: [{ id: 2, children: [{ id: 3, children: [{ id: 4 }] }] }],
//       },
//     ],[{ b: 1},{ a: 1}]
//   )
// );
export let treeSetObjArr = (tree = [], arr = [], children = 'children') => {
  if (!tree) {
    console.log('提示', '你传递的tree是空');
  }
  let tree_ = cloneop(tree);
  if (!isArrayop(tree_)) {
    tree_ = [tree_];
  }

  let loop = tree => {
    for (let i of tree.keys()) {
      for (let t of arr) {
        tree[i] = { ...t, ...tree[i] };
      }
      if (tree[i][children] && tree[i][children].length > 0) {
        loop(tree[i][children]);
      }
    }
  };
  loop(tree_);
  return tree_;
};

//给树形结构遍历，并且在每个对象中写入一个对应的树属性,并且根据判断来添加
// console.log(
//   '111111111示例：',
//   treeSetTree(
//     [
//       {
//         id: 1,
//         children: [{ id: 2, children: [{ id: 3, children: [{ id: 4 }] }] }],
//       },
//     ],
//     'a',
//     { b: 1, children: { b: 2, children: { b: 3, children: { b: 4 } } } }
//   )
// );
export let treeSetTree = (
  tree = [],
  field = 'zi',
  treeObj = {},
  children = 'children',
  treeChildren = 'children',
  judge = () => {
    return true;
  }
) => {
  if (!tree) {
    console.log('提示', '你传递的tree是空');
  }
  let tree_ = cloneop(tree);

  if (!isArrayop(tree_)) {
    tree_ = [tree_];
  }

  let loop = (tree, layer = 0) => {
    let lay = layer;
    lay++;
    for (let i of tree) {
      if (judge(i)) {
        let treeObjData = treeGetObject(lay, treeObj, treeChildren);
        i[field] = treeObjData;
      }
      if (i[children] && i[children].length > 0) {
        loop(i[children], lay);
      }
    }
  };
  loop(tree_);
  return tree_;
};

//根据给定的数据的层级对树中的属性，进行定义，场景：针对树形内的如name字段在不同的层级中用了，不同的写法这种
// console.log(
//   '111111111示例：',
//   treeSetFieldArr(
//     [
//       {
//         id: 1,
//         children: [{ id2: 2, children: [{ id3: 3, children: [{ id4: 4 }] }] }],
//       },
//     ],
//     ["id","id2","id3","id4"]
//   )
// );
export let treeSetFieldArr = (
  tree = [],
  arr = [],
  firstKey = 'firstKey',
  children = 'children'
) => {
  if (!tree) {
    console.log('提示', '你传递的tree是空');
  }
  let tree_ = cloneop(tree);

  if (!isArrayop(tree_)) {
    tree_ = [tree_];
  }
  let loop = (tree, layer = 0) => {
    let lay = layer;
    lay++;
    for (let i of tree) {
      i[firstKey] = i[arr[lay - 1]];
      if (i[children] && i[children].length > 0) {
        loop(i[children], lay);
      }
    }
  };
  loop(tree_);
  return tree_;
};

//给树中的每个对象中的元素进行修改
export let treeEditObjKey = (
  tree = [],
  field = 'zi',
  fun = data => {
    return data;
  },
  children = 'children'
) => {
  if (!tree) {
    console.log('提示', '你传递的tree是空');
  }
  let tree_ = cloneop(tree);
  if (!isArrayop(tree_)) {
    tree_ = [tree_];
  }

  let loop = tree => {
    for (let i of tree.keys()) {
      tree[i][field] = fun(tree[i][field]);
      if (tree[i][children] && tree[i][children].length > 0) {
        loop(tree[i][children]);
      }
    }
  };
  loop(tree_);
  return tree_;
};
