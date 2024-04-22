// actionCreators: 帮助我们创建action

const changeNameAction = (name) => ({
    type: "change_name",
    name,
  });

  
  // 修改counter
const addNumberAction = (num) => ({
    type: "add_number",
    num,
  });


  module.exports = {
    changeNameAction,
    addNumberAction
  }
  