const { createStore } = require("redux");

// 初始化数据
const initialState = {
  name: "xmj",
  counter: 3,
};

// 定义reducer函数: 纯函数

// 两个参数:
// 参数一： store中目前保存的store
// 参数二： 本次需要更新的action(dispatch传入的action)
// 返回值:  它的返回值会作为store之后存储的state
function reducer(state = initialState, action) {
  // 有新数据进行更新的时候，那么返回一个新的store
  if (action.type === "change_name") {
    return { ...state, name: action.name };
  } else if (action.type === "add_number") {
    return { ...state, counter: state.counter + action.num };
  }

  // 没有新数据更新, 那么返回之前的state

  console.log("reducer: ", state, action);
  return state;
}

// 创建的store
const store = createStore(reducer);

module.exports = store;
