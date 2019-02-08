export default{
   
    state:{
       cart:localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[],
       allChecked: false,
       selectedNum: 0,
       delFlag: false,
    // 商品的具体格式
    //    [{
    //         id: 1001,
    //         name: 'Beats EP头戴式耳机',
    //         price: 558,
    //         type: 4,
    //         quantity: 1,
    //         subtotal: 558,
    //         stock: 128,
    //         checked: false,
    //         sales: 1872,
    //         img: 'http://img11.360buyimg.com/n1/s528x528_jfs/t3109/194/2435573156/46587/e0e867ac/57e10978N87220944.jpg!q70.jpg'
    //     }]
    },
    getters: {
             // 全选
      allChecked (state) {
        let allChecked = true
        state.cart.forEach((goods) => {
          if (!goods.checked) {
            allChecked = false
            return
          }
        })
        if(state.cart.length<1){
            allChecked = false
        }
        return allChecked
      },

      //商品总数
      checkedCount (state) {
        let count = 0
        state.cart.forEach((goods) => {
          if (goods.checked) {
            count += goods.quantity
          }
        })
      return count
       },


       //总金额计算
       checkedPrice (state) {
        let price = 0
        state.cart.forEach((goods) => {
          if (goods.checked) {
            price += parseFloat((goods.quantity * goods.price))
            
          }
        })
       
        return price
      },
  
    },
    mutations: {

        // 添加商品
        addToCart(state,payload){
       
     
            // payload 传递过来的数据是一个对象，里面包含了该商品的购物车所要展示的数据
            var alreadyIndex = state.cart.findIndex(function (item, index) {
                return item.id === payload.id;
            });
            
            // 如果不存在则添加
            if(alreadyIndex==-1){
                var cartIndex = state.cart.length;
                // 添加新的商品，并初始化其数量、价格、被选中状态
                state.cart.push(payload);
                state.cart[cartIndex].quantity=1;
                state.cart[cartIndex].subtotal=payload.price.toFixed(1);
                // state.cart[cartIndex].checked=false;

                 // 新增商品，购物车不能为全选
                 state.checkAllFlag = false;
               
                //  localStorage.setItem('cart',JSON.stringify(state.cart))
                 return;
            }
           
             // 如果商品已存在并且库存足够，数量加1
             var alreadyGoods =state.cart[alreadyIndex];
          
                alreadyGoods.quantity=++alreadyGoods.quantity;
                alreadyGoods.subtotal=alreadyGoods.price * alreadyGoods.quantity.toFixed(1);
                // console.log(alreadyGoods.subtotal)
               
                // localStorage.setItem('cart',JSON.stringify(state.cart))
            // state.ProductSizeState=payload;
        },
        // changeProductClass(state,payload){
        //     state.ProductClass=payload
        // },

        // ----------------------------------
        // 商品数量增加按钮
        plusCarPanelData (state,id) {
            state.cart.forEach((goods,index) => {
            if (goods.id === id) {
                // if (goods.count >= goods.limit_num) {
                //   state.maxOff = true
                //   return
                // }
                goods.quantity++
            }
            })
        },
        // 减少商品数量按钮
        subCarPanelData (state,id) {
            state.cart.forEach((goods,index) => {
            if (goods.id === id) {
                goods.quantity--
                if (goods.quantity <= 1) {
                goods.quantity = 1
                }
            }
            })
        },
        // 删除单条数据
        delCarPanelData (state,id) {
            // 通过比对ID，如果存在，就删除此条数据
            state.cart.forEach((goods,index) => {
            if (goods.id === id) {
                state.cart.splice(index,1)
                return
            }
            })
        },
        // 商品select
        checkGoods (state,id) {
            state.cart.forEach((goods) => {
            if (goods.id === id) {
                goods.checked = !goods.checked
                return
            }
            })
        },
    
        // vuex :全选按钮
        allCheckGoods (state,checkAllFlag) {
          
           
            // if(checkAllFlag){
            //     state.cart.forEach((goods) => {
            //         state.allChecked= true
            //         return
            //     })
            // }
            // else{
            //     state.cart.forEach((goods) => {
                   
            //         state.allChecked= true
            //         return
                
            // })
            // }

            // state.cart.forEach((goods) => {
            //     goods.checked = checkAllFlag
            //   })

            console.log(checkAllFlag)
            if(checkAllFlag){
                state.allChecked = false;
                for(let i=0;i<state.cart.length;i++){
                    state.cart[i].checked = false;
                }
                
            }else{
                state.allChecked = true;
                for(let i=0;i<state.cart.length;i++){
                    state.cart[i].checked = true;
                }
            }

        }
        ,
        // 删除选中商品
        delCheckedGoods (state) {
            let i = state.cart.length
            // i--：从后往前走
            while (i--) {
            // 如果某一项是选中的
            if (state.cart[i].checked) {
                state.cart.splice(i,1)
            }
            }
        }
        ,
        setAllChecked(state,checked){
            state.allChecked=checked;
        }

  

  

    }


}