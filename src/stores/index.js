import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import RouteState from './RouteState';
import Product from './ProductSate';

import Token from './Token';
import Cart from './Cart';

import SearchList from './SearchListState';

export default new Vuex.Store({
    // 2. 创建state数据交由store来管理
    modules:{
        RouteState,
        Product,

        Token,
        Cart,

        SearchList

    }
  });