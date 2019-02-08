<template>
    <div class="LoginPage">
        <div class="con">
            <div class="v-content content">
               
                <div class="item_control">
                    <input type="tel" placeholder="请输入邮箱" autocomplete="off"  v-model="mail" >

                </div>
               
                <div class="item_contro2 item_control">
                    <input type="number" placeholder="请输入验证码" autocomplete="off" maxlength="4"  v-model="code">
                    <button class="btn-code" @click="getCode">获取验证码</button>

                </div>

                <div class="btn_ok">
                    <button @click="login">登录</button>
                </div>

                <p class="inof">
                    账号密码登录
                </p>


            </div>


        </div>
    </div>
</template>


<script>
export default {
    data () {
        return {
            mail:'',    //邮箱
            code:'',    //验证码
        }
    },
    methods: {
        getCode(){
            console.log(this.mail)
          this.$axios.post('/db/main/getCode',{
              params:{
                mail:this.mail
              }
          })
          .then((result) => {
             
          }).catch((err) => {
              
          });
        },

        // 注册+登录
        login(){
            this.$store.commit('LOGIN',{name:this.mail})
            this.$router.push('/my');
          }
        }
    }

</script>


<style lang="less" scoped>
    .LoginPage{
        .con{
            margin-top: .8rem;
            .content{
                .item_control{
                    font-size: .373333rem;
                    height: 1.333333rem;
                    line-height: 1.333333rem;
                    background-color: #fff;
                    padding:0 .266667rem;
                    border: none;
                    border-bottom: 1px solid #ccc;
                }
                .item_contro2{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    button{
                            
                    padding: 0;
                    margin: 0;
                    width: 2.50666667rem;
                    height: .74666667rem;
                    font-size: .37333333rem;
                    line-height: .8rem;
                    text-align: right;
                    color: #fff;
                    text-align: center;
                    background-color: #f66;
                    border: .08rem;
                    }
                }

                .btn_ok{
                    margin-top: .8rem;
                    button{
                        border-radius: .266667rem;
                         width: 100%;
                    background: #f66;
                    border: none;
                    color: white;

                    height: 1.066667rem;
                    }
                }

                p{
                    font-size: 14px;
                    color: blue;
                    height: 1.333333rem;
                    line-height: 1.333333rem;
                }

            }   
        }
    }
</style>
