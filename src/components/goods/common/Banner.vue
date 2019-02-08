<template>
     <div class="banner">
         <!-- {{BannerList}} -->
        <Swiper v-if="picInfo.length > 0" :autoPlay='false' :showIndicator='true' interval="2500" duration="500">
                <Slide  v-for="(item,index) in picInfo" :key="index">
                    <img :src="item.image1" alt="" @click="showImagePreview" >
                </Slide>
        </Swiper>

       
    </div>
</template>


<script>
import { Swiper, Slide } from 'vue-swiper-component';
export default {
    name:'Banner',
    data () {
        return {
              imgs:['']
        }
    },
     components: {
          Swiper,
          Slide
    },
    props: ['picInfo'],
    methods: {
      
        showImagePreview() {
      this.$createImagePreview({
        imgs: this.imgs
      }).show()
    }
    },updated () {
      
          this.imgs=this.picInfo.map(item=>{
            return item.image1
        })
     
    }
}
</script>


<style lang="less" scoped>

    .banner{
        height: 7.066667rem;
        background-color: white;
        &/deep/.wh_show_bgcolor{
          background:red;


        }
      
        .wh_slide{
            display: flex;
            justify-content: center;
        }
        img{
           height: 7.066667rem;
        }
    }
   
</style>
