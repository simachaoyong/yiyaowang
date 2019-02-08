export default{
    state:{
        categoryName:"",
        allSelect:-1
    },
    getters: {
        
    },
    mutations: {
        setcategoryName(state,payload){
            state.categoryName=payload;
        },
        setallSelect(state,payload){
            state.allSelect=payload;
        }
    }
}