<template>
    <div class="MY">
       <UserTop/>
       <UserInfo/>
       <OrderIngo/>
       <ServerContent/>
       <BenefitContent/>
        <FooterBar :navBar='router'/>
    </div>
</template>

<script>

import FooterBar from 'com/Footer_tabBar';
import UserTop from './commons/UserTop';
import UserInfo from './commons/UserInfo';
import OrderIngo from './commons/OrderInfo';
import ServerContent from './commons/ServerContent';
import BenefitContent from './commons/BenefitContent';

export default {
    components: {
        FooterBar,
        UserTop,
        UserInfo,
        OrderIngo,
        ServerContent,
        BenefitContent
    },
    data () {
        return {
            router:'My',
            activeIndex:'1',
            user:{
            name:''
            }
        }
    },
    beforeCreate(){
        // 当主页刷新时，如果服务端设置的token
        // 的时效到了的话，便会提示未登录

        
    },
    methods: {
        
    }
}
</script>



<style lang="less" scoped>
body{
    font-size: .373333rem;
    background: white !important;
}
</style>
