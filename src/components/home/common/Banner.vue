<template>
    <div class="banner">
         <!-- {{BannerList}} -->
        <Swiper v-if="BannerList.length > 0" :autoPlay='true' :showIndicator='true' interval="2500" duration="500">
                <Slide  v-for="(item,index) in BannerList" :key="index">
                    <img :src="item.pic" alt="" @click="goto">
                </Slide>
        </Swiper>
    </div>
</template>

<script>
import { Swiper, Slide } from 'vue-swiper-component';
export default {
    components: {
          Swiper,
          Slide
    },
    props:{
        BannerList:{
            type:[Array,Object,String]
    
        }
    },
    methods: {
        goto(){
            this.$router.push('/goods/item/50620411')
        }
    }
}
</script>

<style lang="less" scoped>
    .banner{
        img{
            width: 100%;
            height: 4rem;
        }
    }
    .banner/deep/.wh_show_bgcolor{
        background-color: white;
    }
</style>
