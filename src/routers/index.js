// 路由文件的基本配置

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//---------------------------- 引入路由文件
import Home from 'components/home/Home';
import Classify from 'components/classify/Classify';
import Cart from 'components/cart/Cart';
import My from 'components/my/My';
import Search from 'components/search/Search';
import SearchList from 'components/searchList/SearchList';
import Goods from 'components/goods/Goods';
import GoodsItem from 'components/goods/children/item';

import GoodsComment from 'components/goods/children/comment';
import GoodsItemDetail from 'components/goods/children/itemDetail';
import Login from 'components/login/Login'

import Health from 'components/health/Health';

//---------------------------- 引入路由文件 END

//---------------------------- 实例化路由
const router=new VueRouter({
    routes:[
        {
            // 首页路由重定向
            path:'/',
            redirect:{name:'Home'}
        },
        {
            // 首页路由
            name:'Home',
            path:'/home',
            component:Home,
            meta: {
                keepAlive: true 
              },
              
            
          
        },
        {
             // 药品分类路由
             name:'Classify',
             path:'/classify',
             component:Classify,
             meta: {
                keepAlive: true 
              }
            
        },
        {
            //健康头条
            name:'Health',
            path:'/health',
            component:Health
        },
        {
            // 购物车路由
            name:'Cart',
            path:'/cart',
            component:Cart,
       
        },
        {
            //我的路由
            name:'My',
            path:'/my',
            component:My,
            meta:{
                requiresAuth: true 
            }
           
        },
        {
            // 搜索路由
            name:'Search',
            path:'/search',
            component:Search,
            meta: {
                keepAlive: false 
              }
          
        },
        {
            // 搜索列表路由
            name:'SearchList',
            path:'/searchList',
            component:SearchList,
            meta: {
                keepAlive: false 
            }

        },{
            // 详情页路由
            name:'Goods',
            path:'/goods',
            component:Goods,
            // meta:{
            //     keepAlive:false
            // },
            
            children:[
               {
                name:'GoodsItem',
                path:'item/:id',
                component:GoodsItem,
                beforeEnter(to,from,next){
                  
                    let id=isNaN(to.params.id*1);
                    if(!id){
                        next();  
                    }
                    else{
                        console.log(router)
                        router.push({name:'Home'})
                    }
                },
              
               }
               ,{
                   name:'GoodsComment',
                   path:'comment/:id',
                   component:GoodsComment,
                 
               }
               ,
               {
                   name:'GoodsItemDetail',
                   path:'detail/:id',
                   component:GoodsItemDetail,
                  
               }
            ]

        },
        {
             // 搜索列表路由
             name:'Login',
             path:'/login',
             component:Login,
        }
    ]
})
//---------------------------- 实例化路由 END


router.beforeEach((to,from,next)=>{
    
    if(to.meta.requiresAuth){
      // 判断是否登录
     
      if(localStorage.getItem('username')){
        // if(router.app.$store.state.token){
            next();
        }else{
            next({
                path:'/login'
            })
        }
    }else{
      // 要进入to路由，必须调用next()方法
        next();
    }
  });



export default router;