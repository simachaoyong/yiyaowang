<template>
    <div id="Home">
         
        <!-- 头部插入广告 -->
        <div class="downApp">
            <i class="iconfont icon-shanchu">

            </i>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABFCAMAAACfde9RAAABSlBMVEUAAAAnLlcmLlYnMFYmLVYrL1omLVYnLlgsMVk7PnNkVYEmLVYmLVcmLVYtNGAmLlYqMVvIJi0mLVYnLlgmLVYmLVcnLlcmLVY1NWUmLVYmLVYnLVYnLlcoLlcoLlcnLVcoL1nIJi0mLVYnLlYnLVcnLVcoLlfIJi3IJi0nLVcmLVcmLlcoLlcoLlcnMFcwN2MmLVfHJi7IJi0nLVfIJy0nLlbJJy0nLlcqL1guMF8mLlbIJi3IJi7IJy0nLVbIJi0mLlbIJi0mLlcmLVcnLlbIJy7JJy4nLljJKC/KKC/LKDDKKjLOLDHpPEsmLVYnLVYmLVfIJi3IJi4mLVfIJy7JKC4qLljLKi8pL1nNLTLUMTHeQ0PIJi3IJi3IJi7IJy7JJy7JJi3JJy7JKC4oL1nJKTEnLVbIJi3IJi7NMjjJKC97L0ImLVbHJi1HbBZ1AAAAbHRSTlMA2eQ66SL2Yx8EA/LW0RCyGaSeWfnd2sEJ4rykfHRnUCfmkomGgkvx0beva0Y/NA39/NjNmo6DQjAV/Pn27cWyrKqnmpaUaV9MNx8bEQT77Mm7fm9SPzcvLhUKB97GjXl0cGJbPSfnysENRhuILn6vAAAGKUlEQVRo3szX3U8aQRQF8INQUqSi0KqkrVRirGisEaw0KX4EiVZEmtq0sdCmGj8imnv//1d172KGncVlI2bm93Y22ezDzp05gyDNUdinVeWNE9hmP893WrBK+zM7DmCTeonFIezR/FlkUbRo0R90uKsAa5wv8IM0LHFYZYUtG8TvPKv2YYO//7lXAxa4LHCvBVhgb4M9OjCutc2aXRglR6BuD2a1d9lPHUYdl9jXNUw6rbCvfzCoccR9bMOcX5vcTxlGSN3r7xymlKvVtKiw5hK9Epk43cvAKxqhe8k/GLKm/i8rTfR6T+IHPFIxEh8wZHXWFNQPr0Sjy3ES81GPGonYJ8kpDEuZNWl0TSytUhhTcGVnxl9FIusSUpHHbdUu4HXFmlO4XsYonDGIiSknzklaoUDvEp5SWmTNDVxbFNIXOEanJeYkvqZgO54Cz7oGRI5CykBckFjuTkwAfWjSrNmEa4TCmc5CzJGYlVijAbyFKs+aI7jGKYQ3YzMJuBbJsZqVuDPyiK/d96E45ufogJPkmEQQdazURX/CujM8UeI7ORYxiCUS6j2+8xwdcJbEOgaxRo6k8ui6wro2gnwjEX8BPx9J5DCIJDnW1HLDuhI0/U7Cefi6bdVsn5IKojB+FLxy4YIkioChCaaOKWT2AuVoL6aNTmaSlvkyOtPoVLv//9eUfeG5u3vlNvX7egV295x9znPO9RETLFMM8kzwmnq43M0b6scok3xK9ggm9SpqTJCnGLxgglnqccptDuzmaGNmbeH9DoFYOhn1lT5gtgSimBfolqJ8NNo0j3YYumnu4Is5M9mQdkfeUD+Irmwkfxtt0EPMw/tmQaCaHfFLjrg94Mk1KEdkKcFqkx4LLbKFUcpr9WyToGJH3NVjrKUpBDSS87dx9DMsmhG6YYgJ7ofFtRiuHFUSlOVhwkGscZtrl0vE1mOfRZOkG5aYoGBUyK6xnmaSgLo0wRJJfnEHTwn5uGDZ1vQQkOoyVFVChkncIkED5cS/YpJE6OEiac65g0tCLmPOl7KsS5lueMYEJZKU8XzqkPTgxeqkcXb6h4ScWpbHzQC4kxFYIuE6H2BlYpkm3FOoCDvcxfEdduyMIijJC1bTQoUGKhG6AxMMleot+FrBFncwQz2OxhdTW/N2gJu1QX3vwiIwBfpQI80gpvU2k6xD9FmKFBvcwWc4ggHGMtXdjV4Mf4oqtspMP1UATUwxwSNSNJPSvdItVVSTtCdlLK0v2Tx3cE4CHfZs48sMDOMwCnOkmGWCNhS5Jetpo5tbniqoedC4gBSHHLE94AMZjMe1308xs6aMUgNZntTPMSwpD/7eX9U9BXqgEehbXXwlRYUpytOHTzhfEY/yGSWdOcslT8C982RYdFZ7KRkC3FTHcowL3MHKCRoOzWLq+cwFHAx0UCjVm8oEo2wnUJkae0wwKDa1aSbiMXfxBCw2koXktm3bERN0lD7g83043FIARR3zdMnuW90esMyQdRK0kyph22ii8cu9sHMt4HnUmD5Xgfq6IVso3a+gPIYkIE+gDhsyngd92JYqI7c34GNiFEvSfjNDH9LuEeUHI4uNzc2B5kjQjmJOHslGHzKxqSLwMmFEvwiGxcUOKbBDv8oZa83kCRmUkUZ9yIXu7USoB5iF6Ic7ygMOuCxCCyZbBUOfggQhOfQEdS1huJIGWq2sD0IbLlRnHMFaDB+RvKO7SaDhfK2OB/c2ibdl7Jt13Tsw1nJ7QHtdmz5Fg3Gbg9r7DiV5NSfWC6sXBPBJ6FtNtghpTRa98tv+TWgNb7kHvy1sWGYyB+stdkjjj6ETw77V9oB/TwUccx72H3tY8dKPGGv90z9lJGGKsAz778u04ZC+/s9XUHMobsOsy55PMagak8AL7uQAqm99XBhhc1TlL28Ph6hnMG6zUtQpDqNGR/mZu1jZJYIJNlLWpTrJIgjSoA8jFId17CCJvr+KfDEGE2ykAIMMC3ztk4X99+WT0jjBB+7injmhsmN4tNdvgJ0RjjZWxrelGUnBXMFk7eCENFcsRDYH8uck+0Mec7zDwuoQtCL71vmF810CcPS9V3xYAqtg8zhZmUrDJNTbL1As2uNsrNLRX/4HwMEsmD+stZMAAAAASUVORK5CYII=" alt="">
            <p class="slogan">
                使用APP 享受更多优惠
            </p>
            <button class="btn-down">
                立即下载
            </button>
        </div>
        <!-- 头部插入广告 END -->

        <!-- 公用组件所有框 -->
        <Search/>
        <!-- 公用组件搜索框 end -->

        <!-- 轮播图组件 -->

        <Banner :BannerList="BannerList"/>
        <!-- 轮播图组件 END -->

        <!-- 商品分类组件 -->
        <ClassifyList />
        <!-- 商品分类组件 END -->

        <!-- 商品广告图 -->
        <!-- <div class="floor">
         
            <img :src="floorBg" alt="">
        </div> -->
         <!-- 商品广告图 END-->

         <!-- 健康优享 -->
        <Sale :grabTogether='grabTogether'/>
         <!-- 健康优享 END -->

        <!-- 二级轮播图 -->
         <div class="ypc-swipe">
             <Swiper v-if="menuBanner.length > 0" :autoPlay='true' :showIndicator='true' interval="2500" duration="500">
                <Slide  v-for="(item,index) in menuBanner" :key="index">
                    <img :src="item.picurl" alt="">
                </Slide>
            </Swiper>
         </div>
         <!-- 二级轮播图 END -->
        
        <!-- 商品列表 -->
         <Goods :goodsTopic="goodsTopic"/>
         <!-- 商品列表 END -->

        <!-- 底部版权信息 -->
        <Footer/>
        <!-- 底部版权信息 END -->

        <!-- 底部Bar -->
        <FooterBar :navBar='router'/>
        <!-- 底部Bar END -->
    </div>

</template>

<script>
import { Swiper, Slide } from 'vue-swiper-component';
import qs from 'qs';
// 引入Home下面的子组件
import Search from 'com/Search'; 
import Banner from './common/Banner';
import ClassifyList from './common/ClassifyList';
import Sale from './common/Sale';
import Goods from './common/GoodTopic';
import Footer from './common/Footer';
import FooterBar from 'com/Footer_tabBar';
export default { 
    data () {
        return {
            router:'Home',
            BannerList:'',    //Banner请求的数据
            bgimage:'',       // 分类列表背景
            floorBg:'',

            grabTogether:'',
            menuBanner:'',    //第二层banner图
            goodsTopic:''
        }
    }, 
    components: {
        Swiper,
        Slide,
        Search,
        Banner,
        ClassifyList,
        Sale,
        Goods,
        Footer,
        FooterBar
    },
    async created () {
        let timer = Date.now();
        let Comment=qs.stringify({
            token: '',
            demandcartkey: 'f0d861b6559a50692a5be73a635f152d',
            cartkey: '',
            provinceid: 1,
            province: 1,
            provincename: '广州',
            tradername: 'yw_app',
            trader: 'h5',
            closesignature: 'yes',
            signature_method: 'md5',
            timestamp: timer,
            signature: '****',
            siteid: 9,
            deviceCode: 'E2579272-98DC-4973-AD6B-6137B4E47D39',
            locatecityname: '广州',
            locateprovinceid: 20,
           
        });
        // 第一个请求 请求内容：Banner图 分类
        let data= await this.$axios.post('/api/mobile/home/getHeadData?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1546607792325&signature=****&siteid=9&deviceCode=bEA6D77-C70e-4dD7-9fE-fD0cfcdDEa&locatecityname=null&locateprovinceid=1',Comment)
        //  this.BannerList=JSON.parse(data)
        //  console.log(data.data.data.templatedata)
         let Data=data.data.data;
         this.BannerList=Data.banner;
         this.bgimage=Data.templatedata[0];
        //  this.floorBg=Data.templatedata[1].contentList[0].adPic;




        
        let Twodata=qs.stringify({
            token: '',
            demandcartkey: 'f0d861b6559a50692a5be73a635f152d',
            cartkey: '',
            provinceid: 1,
            province: 1,
            provincename: '广州',
            tradername: 'yw_app',
            trader: 'h5',
            closesignature: 'yes',
            signature_method: 'md5',
            timestamp: timer,
            signature: '****',
            siteid: 9,
            deviceCode: 'E2579272-98DC-4973-AD6B-6137B4E47D39',
            locatecityname: '广州',
            locateprovinceid: 20,
           
        });
        // 第二个请求
        let twodata=await this.$axios.post('/api/mobile/home/getTailData?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1546850156006&signature=****&siteid=9&deviceCode=bEA6D77-C70e-4dD7-9fE-fD0cfcdDEa&locatecityname=%E5%B9%BF%E5%B7%9E&locateprovinceid=20',Twodata);
        console.log(twodata)
        let twoData=twodata.data.data
        this.menuBanner=twoData.bigMatch;
        this.goodsTopic=twoData.goodTopic;
        this.grabTogether=twoData.grabTogether.mobileFlashSaleNewItems

        console.log(this.goodsTopic)


        

    }
}   
</script>

<style lang="less" scoped>
#Home{
    background-color: #f0f0f0;
}
    .downApp{
        padding-left: .13333333rem;
        display: flex;
        align-items: center;
        height: 1.2rem;
        background-color: white;
        .iconfont{
            width: .586667rem;
        }
        &>img{
            width: 1.333333rem;
            height: .533333rem;
            margin-left: .24rem;
            margin-right: .26666667rem;
        }
        .slogan{
            font-size: .37333333rem;
            margin-right: .4rem;
            width: 50%;
            font-weight: 500;
        }
        .btn-down{
            background-color: #f66;
            color: #fff;
            width: 1.86666667rem;
            height: .64rem;
            font-size: .32rem;
            text-align: center;
            font-weight: 300;
            line-height: .66666667rem;
            border-radius: .45333333rem;
            
        }
    }

    .floor{
        img{
            height: 3.413333rem;
        }
    }

    .ypc-swipe{
        img{
            width: 100%;
            height: 3.466667rem;
        }
    }
</style>
