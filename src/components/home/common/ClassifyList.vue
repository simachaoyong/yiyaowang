<template>
    
    <div class="classify" :style='{backgroundImage:`url(${this.bgimage.bgimage})`}'>
     
        <div class="nav_menu " style="">
            <!-- {{navItem}} -->
            <a class="item" v-for="item in navItem" :key="item.id">
                <div class="nav_img">
                    <img :src="item.adPic" alt="">
                </div>
                <p class="white">
                    {{item.adTitle}}
                </p>
            </a>
          
        </div>
    </div>
</template>

<script>
export default {
   
    data(){
        return {
            // https://p3.maiyaole.com/img/mobile/20190/1546620483775105.jpg
            // bgimg:`url(${this.bgimage.bgimage})`,
            bgimage:'',
            navItem:'',
            
        }
    },
    async created () {
         let data= await this.$axios.get('/api//mobile/home/getHeadData?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1546607792325&signature=****&siteid=9&deviceCode=bEA6D77-C70e-4dD7-9fE-fD0cfcdDEa&locatecityname=null&locateprovinceid=1')
         let Data=data.data.data;
        this.bgimage=Data.templatedata[0];
        this.navItem=Data.templatedata[0].contentList;
        
    }
}
</script>

<style lang="less" scoped>
    .classify{
        height: 4.8rem;
        padding: .4rem 0 .48rem;
        // background-image: url('https://p2.maiyaole.com/img/mobile/20190/1546590241873102.jpg');
        .nav_menu{
            display: flex;
            flex-wrap: wrap;
            padding: 0 .13333333rem;

            .nav_img {
                img{
                    width: 1.17333333rem;
                    height: 1.17333333rem;
                }
              
            }
            & .item:nth-of-type(n+6){
                margin-top: .233333rem;
            }
            .item{
                width: 1.946667rem;
                height: 1.866667rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                .white{
                    margin-top: .21333333rem;
                    font-size: .34666667rem;
                    white-space:nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    word-break:break-all;
                   
                }
            }
        }
    }
</style>
