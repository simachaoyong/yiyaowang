export default{
    state:{
        ProductSizeState:false,   //商品规格购物车开关控制
        ProductClass:localStorage.getItem('ProductClass')?localStorage.getItem('ProductClass'):'item'       // 商品子组件切换控制
    },
    getters: {
        
    },
    mutations: {
        chageProductSize(state,payload){
            state.ProductSizeState=payload;
        },
        changeProductClass(state,payload){
            state.ProductClass=payload
        }
    }


}