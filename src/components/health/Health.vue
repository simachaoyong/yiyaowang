<template>
    <div class="health">
        <header>健康头条</header>
        <div id="topNav">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><span>首页</span></div>
                <div class="swiper-slide"><span>药典</span></div>
                <div class="swiper-slide"><span>养生</span></div>
                <div class="swiper-slide"><span>保肝护肝</span></div>
                <div class="swiper-slide"><span>糖尿病</span></div>
                <div class="swiper-slide"><span>健康讲堂</span></div>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    name:'Health',
    components: {
        
    },
    data () {
        return {
            
        }
    },
    methods:{

    }
}
</script>

<style lang="less" scoped>
@import url('../../styles/main.less');
.health{
    height: 100%;
    header{
        .h(47);
        .lh(47);
        .fs(22);
        .padding(0,0,0,8);
        background-color: #D43D3D;
        color: #fff;
        font-weight: normal;
    }
    #topNav{
        position: fixed;
        .top(47);
        width: 100%;
        .h(31);
        .lh(22);
        overflow: hidden;
        .padding(4,4,4,4);
        border-bottom: 1px solid #e8e8e8;
        background: #f4f5f6;
        .swiper-wrapper{
            position: relative;
            width: 100%;
            height: 100%;
            overflow: auto;
            .swiper-slide{
                .padding(0,9,0,9);
                text-align: center;
                .fs(16);
                letter-spacing: 2px;
                float: left;
                span{
                    display: inline-block;
                }
            }
            .active{
                span{
                    transform: scale(1.1);
                    color: #FF2D2D;
                }
            }
        }
    }
}
</style>
