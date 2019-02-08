<template>
            <!-- 图文详情切换 -->
        <div class="box">

             <div class="pro_detail" v-if="tuwen.instructions">
                 <div class="pro_detail_tab">
                     <mt-navbar v-model="selected">
                        <mt-tab-item id="1">图文详情</mt-tab-item>
                        <mt-tab-item id="2">说明书</mt-tab-item>
                        <mt-tab-item id="3">规格参数</mt-tab-item>
                    </mt-navbar>
                    <mt-tab-container v-model="selected">
                        <mt-tab-container-item id="1" v-html="tuwen.product_desc">
                            
                        </mt-tab-container-item>
                        <mt-tab-container-item id="2" v-html="tuwen.instructions">
                          
                        </mt-tab-container-item>
                        <mt-tab-container-item id="3" v-html="tuwen.specificationParams">
                          
                        </mt-tab-container-item>
                        
                    </mt-tab-container>
                 </div>
             </div>

            <div class="pro_detail" v-else>
                 <div class="pro_detail_tab">
                     <mt-navbar v-model="selected">
                        <mt-tab-item id="1">图文详情</mt-tab-item>
                        <mt-tab-item id="2">规格参数</mt-tab-item>
                      
                    </mt-navbar>
                    <mt-tab-container v-model="selected">
                        <mt-tab-container-item id="1" v-html="tuwen.product_desc">
                            
                        </mt-tab-container-item>
                        <mt-tab-container-item id="2" v-html="tuwen.specificationParams">
                          
                        </mt-tab-container-item>
                        
                    </mt-tab-container>
                 </div>
             </div>
             

             
        </div>
        <!-- 图文详情切换 END -->     
</template>


<script>
import Vue from 'vue';
import { Navbar, TabItem,Tabbar,Cell, TabContainer, TabContainerItem} from 'mint-ui';
import qs from 'qs';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Navbar.name, Navbar);
Vue.component(Cell.name, Cell);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
export default {
    name:'itemDetail',
     data () {
        return {
            selected:'1',
            tuwen:'',
        }
    },
    props: {
     
        // 商品id
        picInfoId:{
            type:[Object,String,Array]
        }

    },
    created () {
        this.getTuwen();
    },
    methods: {
        // 获取图文请求
        getTuwen(){
            
             let timer = Date.now();
            let tuwen=qs.stringify({
                token:'',
                cartkey: 'caf6c5dc05f911e522ee7a21f57de85a',
                demandcartkey: 'caf6c5dc05f911e522ee7a21f57de85a',
                provinceid: 1,
                province: 1,
                provincename: '广东',
                tradername: 'yw_app',
                trader: 'h5',
                closesignature: 'yes',
                signature_method: 'md5',
                timestamp: this.timer,
                signature: '****',
                siteid: 9,
                itemId: this.picInfoId,
                width: 414
            });
            this.$axios.post(
                `/api/product/v1/describe/getdescribe.json?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1547285818404&signature=****&siteid=9`,
                tuwen
            )
            .then((result) => {
                let Data=result.data.data;
                // console.log(Data)
                this.tuwen=Data;
            }).catch((err) => {
                
            });
          
        }
    }
}
</script>


<style lang="less" scoped>
.box{
    margin-bottom: 1.866667rem;
}
</style>
