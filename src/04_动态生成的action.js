const store = require("./store");
const { addNumberAction, changeNameAction} = require("./store/actionCreators")

const unsubscribe = store.subscribe(() => {
  console.log("订阅数据变化: ", store.getState());
});

// actionCreators: 帮助我们创建action

// const changeNameAction = (name) => ({
//   type: "change_name",
//   name,
// });

// 修改store中的数据： 必须action
store.dispatch(changeNameAction("why"));
store.dispatch(changeNameAction("李磊"));
store.dispatch(changeNameAction("Joy"));

// // 修改counter
// const addNumberAction = (num) => ({
//   type: "add_number",
//   num,
// });

// 修改counter
store.dispatch(addNumberAction(10));
store.dispatch(addNumberAction(20));
store.dispatch(addNumberAction(30));
store.dispatch(addNumberAction(100));
