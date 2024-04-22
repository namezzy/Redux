/**
 *  redux代码优化:
 *  1. 将派发的action发生过程放到一个actionCreators函数中
 *  2. 将定义的所以actionCreators的函数，放到了一个独立的文件中：actionCreator.js
 *  3. actionCreators和reducer函数中使用字符串常量是一致的，所以将常量抽取到一个独立constants的文件中
 *  4. 将reducer和默认值initialState)放到一个独立的reducer.js文件中，而不是index.js
 * 
 */
const { createStore } = require("redux");
const reducer = require( "./reducer.js")
// const { ADD_NUMBER, CHANGE_NAME } = require("./constants");

// // 初始化数据
// const initialState = {
//   name: "xmj",
//   counter: 3,
// };

// // 定义reducer函数: 纯函数

// // 两个参数:
// // 参数一： store中目前保存的store
// // 参数二： 本次需要更新的action(dispatch传入的action)
// // 返回值:  它的返回值会作为store之后存储的state
// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case CHANGE_NAME:
//       return { ...state, name: action.name };
//     case ADD_NUMBER:
//       return { ...state, counter: state.counter + action.num };
//     default:
//       return state;
//   }
// }

// 创建的store
const store = createStore(reducer);

module.exports = store;
