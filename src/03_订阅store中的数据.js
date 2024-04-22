const store = require("./store");

const unsubscribe = store.subscribe( () => {
    console.log("订阅数据变化: ", store.getState())
})

// 修改store中的数据
store.dispatch({ type: "change_name", name: "why" });
store.dispatch({ type: "change_name", name: "李磊" });


// 取消订阅
unsubscribe()

// 修改counter
store.dispatch({ type: "add_number", num: 10 })

