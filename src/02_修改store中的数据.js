const store = require("./store");

console.log(store.getState());

// 修改store中的数据
const nameAction = { type: "change_name", name: "why" };
store.dispatch(nameAction);

console.log(store.getState());

const nameAction2 = { type: "change_name", name: "李磊" };
store.dispatch(nameAction2);
console.log(store.getState());

// 修改counter

const counterAction = { type: "add_number", num: 10 };
store.dispatch(counterAction)
console.log(store.getState())
