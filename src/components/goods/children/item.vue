<template>
    <div class="item">
      
        <Banner :picInfo="picInfo"/>
        <itemInfo :product_info="product_info"  :product="product" :comboData="comboData" :picInfoId="picInfoId" />
        <itemDetail :picInfoId="picInfoId"/>
        <CartBar :product_info="product_info"/>
        <itemSizeTc :picInfoId="picInfoId" />
       
       
    </div>
</template>

<script>
import qs from 'qs';
import Banner from '../common/Banner';
import itemInfo from '../common/ItemInfo';
import itemDetail from '../common/itemDetail';
import CartBar from 'com/CartBar';
import itemSizeTc from '../common/ItemSizeTc';
export default {
    name:'Item',
    data () {
        return {
              picInfo:'',               //轮播图组件数据
              picInfoId:'',             //轮播图组件数据ID
              product_info:'',           //商品具体信息
              product:'',               //所有信息
              comboData:'',             //多商品推荐
                         
            
        }
    },
    components: {
        Banner,
        itemInfo,
        itemDetail,
        CartBar,
        itemSizeTc
    },
      async created () {
         
             this.$store.commit('changeProductClass','item');


        //   console.log(this.$store.state.Product.ProductSizeState)
          this.getPicInfoId();

            let timer = Date.now();
            let data = qs.stringify({
                token:'',
                cartkey: 'ec15e0d17eb71b13315d5d099dc2e72a',
                demandcartkey: 'ec15e0d17eb71b13315d5d099dc2e72a',
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
                width: 414,
                tracker_u: '',
            });
            let Data=await this.$axios.post(
            `/api/product/v1/product/getProductBaseInfo?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1547205626293&signature=****&siteid=9`,
            data
          )
          let resulte=Data.data.data;
          this.picInfo=resulte.picInfo;
          this.product_info=resulte.product_info;
          this.product=resulte;
    


        //获取推荐组合套装产品
         let getcombo = qs.stringify({
            token:'',
            cartkey: 'b9d028bb67a6fd684cc25024c0e120f5',
            demandcartkey: 'b9d028bb67a6fd684cc25024c0e120f5',
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
            itemCode: this.picInfoId,
            width: 414,
           
        });
        
         let getcomboData=await this.$axios.post(
            `/api/product/v1/combo/getcombo?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1547276906588&signature=****&siteid=9`,
            getcombo
          )
            // console.log(getcomboData.data.data)
          if(getcomboData.data.data.lhyy_comboinfo){
            this.comboData=getcomboData.data.data.lhyy_comboinfo;
          }
        //   else if(getcomboData.data.data.length==undefined){
        //       this.comboData=null;
        //   }
          else{
              this.comboData=null;
          }
         
      
        

       
        
    },
    methods: {
        getPicInfoId(){
            this.picInfoId=this.$route.params.id;
        }  
    }
   
   
}
</script>


<style lang="less" scoped>

</style>
