<template>
    <div class="Goods">
       <Search :id="this.$route.params.id"/>
            <!-- <component :is="children"></component> -->
              <router-view :id="this.$route.params.id" ></router-view>
       <!-- <Banner :picInfo="picInfo"/> -->
    </div>
</template>


<script>

import Search from './common/Search';
import Banner from './common/Banner';
import Item from './children/item';
import ItemDeatail from './children/itemDetail';
import comment from './children/comment';
export default {
    data () {
        return {
            picInfo:'',   //轮播图组件数据
           
        }
    },
    components: {
        Search,
        Banner,
        Item,
        ItemDeatail,
        comment
        
    },
    computed: {
        children(){
            return this.$store.state.Product.ProductClass
        }
    },
    created () {
        // console.log(this.$route.params)
    }
   
}
</script>


<style lang="less" scoped>
    html{
        background: #f7f7f7;
    }
</style>
