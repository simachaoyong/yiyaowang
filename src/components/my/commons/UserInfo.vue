<template>
    <div class="UserInfo">
        <div class="con">
                <div class="box">
                    <div class="login" >
                        <img src="data:image/png;base64,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" alt="">
                        <span class="user_name no_login_state">
                                {{username}}
                        </span>
                        <span class="logout" @click="logout">退出</span>
                    
                </div>

                <div class="user_balance_content">
                    <div class="balance_item border">
                        <div class="item">
                        <p>
                            <span>
                                0.00
                            </span>
                            <span>
                                元  
                            </span>
                        </p>
                        <p>
                            余额
                        </p>
                        </div>
                        <div class="item">
                        <p>
                            <span>
                                0.00
                            </span>
                            <span>
                                元  
                            </span>
                        </p>
                        <p>
                            余额
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        // goto(){
        //     this.$router.push('/login')
        // }
        logout(){
              this.$store.commit('LOGINOUT')
            this.$router.push('/login')
        }
        
    },
    data () {
        return {
             activeIndex:'1',
             user:{
                name:''
            }
        }
    },
    beforeCreate () {
           // 当主页刷新时，如果服务端设置的token
          // 的时效到了的话，便会提示未登录

       
    },
    computed: {
        username(){
            
            return this.$store.state.Token.username
        }
    }
}
</script>


<style lang="less" scoped>
    .UserInfo{
        margin-top: -1.28rem;
        height: 4.02666667rem;
        font-size: .373333rem;
        .con{
           .box{
               box-shadow: 0 0.02666667rem 0.64rem 0 rgba(38,45,86,.04);
               background: white;
                border: .01333333rem solid #f0f0f0;
                border-radius: .16rem;
                 height: 4.02666667rem;
                 padding:.266667rem;
                .login{
                    display: flex;
                   height: 1.866667rem;
                    align-items: center;
                    img{
                        width: 1.333333rem;
                        margin-right: .266667rem;
                    }
                    .logout{
                        margin-left: .533333rem;
                        color: red;
                        width: 1.066667rem;
                        height: 1.066667rem;
                      text-align: center;
                      line-height: 1.066667rem;
                    }
                }


                .user_balance_content{
                   .balance_item{
                       display: flex;
                       height: 1.333333rem;
                       .item{
                           width: 50%;
                           display: flex;
                           justify-content: center;
                           flex-direction: column;
                           align-items: center;
                           font-size: .48rem;
                       }
                       & .item:nth-of-type(1){
                           border-right: 1px solid #999;

                       }
                   }
                }
           }
        }
    }
</style>
