export default {
    state:{
       

        State:sessionStorage["RouterState"]?sessionStorage["RouterState"]:'Home',
    

  },
  getters:{
    
  },

  // 通过mutations修改state中的数据
  mutations:{
    changeQty(state,payload){
        //state：store中的state数据
        // payload: 调用changeQty时传入的参数（可以是任意类型，建议使用对象）
        // console.log('payload:',payload)
        // console.log(payload)
        state.State=payload;
      }
  }
}