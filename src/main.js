import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './routers'
import store from './stores'
import Axios from 'axios';
import Cube from 'cube-ui';

import 'node/animate.css/animate.css';
import './font/iconfont.css'
import './styles/reset.less';
import { Badge } from 'mint-ui';

Vue.component(Badge.name, Badge);
// 配置
Vue.prototype.$axios=Axios;
Vue.use(Cube);
Vue.prototype.bus=new Vue();


// 处理请求拦截

import { Indicator,Header,Button,InfiniteScroll,Loadmore} from 'mint-ui';
Vue.use(InfiniteScroll)


Vue.use(Indicator)
// Vue.component(InfiniteScroll.name, InfiniteScroll);
Vue.component(Header.name, Header);
Vue.component(Loadmore.name, Loadmore);

// Vue.component(InfiniteScroll.name, InfiniteScroll);


Axios.interceptors.request.use(config=>{
  // console.log(config)
  Indicator.open();
 
  
  return config
}, error => {
  Indicator.close();
  
  return Promise.reject(error)
})

Axios.interceptors.response.use(data=>{
  // 响应成功关闭loading
  Indicator.close();
  
  return data
}, error => {
  Indicator.close();
  return Promise.reject(error)
})

// 处理请求拦截 END





Vue.config.productionTip = false;

//注册全局过滤器
Vue.filter('getPrice', function (value) {
  let price = parseInt(value);
    return  price;
})
Vue.filter('getPrice2', function (value) {
  let price = (value*10)%10;
    return  price;
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
