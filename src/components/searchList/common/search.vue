<template>
    <div class="search">
        <header>
            <div class="header_con">
                <a href="javascript:history.go(-1)">
                    <i></i>
                </a>
                <div class="search_box" @click="goto()">
                    <i class="iconfont">&#xe637;</i>
                    <input type="text" name class="search_box_input" :value="Name">
                </div>
                <span class="search_header_right_btn" @click="gotoCart">
                    <i class="iconfont">&#xe602;</i>
                </span>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    name:'Search',
    props:['totalCount','name'],
    data () {
        return {
            searchValue:this.$route.query.categoryName||this.$route.query.searchWord
        }
    },
    computed:{
        Name(){
            let name = this.searchValue+'('+this.totalCount+')';
            return name;
        }
    },
    methods:{
        goto(){
            this.$router.push({path:'/search',query:{searchWord:this.searchValue}});
        },
        gotoCart(){
            this.$router.push('/cart');
        }
    },
    watch:{
        name:function(newVal,oldVal){
            if(this.name!=''){
                this.searchValue=this.name;
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import url('../../../styles/main.less');
.search{
    header{
        .h(40);
        width: 100%;
        background: #f9f9f9;
        border: 1px solid #e7e7e7;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 2;
        .header_con{
            position: relative;
            .h(40);
            .padding(0,50,0,50);
            a{
                display: inline-block;
                position: absolute;
                left: 0;
                top: 0;
                .h(40);
                .lh(30);
                .padding(0,10,0,18);
                i{
                    vertical-align: middle;
                    position: relative;
                    display: inline-block;
                    font-style: normal;
                    .w(20);
                    .h(20);
                    margin-top: 5px;
                }
                i:before{
                    content: '';
                    display: block;
                    position: absolute;
                    top: 0;
                    .w(12);
                    .h(12);
                    border-bottom: 1px solid #666;
                    border-left: 1px solid #666;
                    transform: rotateZ(45deg);
                }
            }
            .search_box{
                .h(30);
                .padding(0,40,0,44);
                background: #ebebeb;
                .br(15);
                .margin(3,0,0,0);
                position: relative;
                i{
                    position: absolute;
                    .left(10);
                    .top(5);
                    color: #505050;
                    .fs(20);
                    .w(22);
                    .h(22);
                    display: inline-block;
                    cursor: pointer;
                    background: #ebebeb;
                }
                .search_box_input{
                    .fs(12);
                    color: #333;
                    width: 100%;
                    .h(30);
                    display: block;
                    overflow: hidden;
                    background: none;
                }
            }
            .search_header_right_btn{
                position: absolute;
                right: 0;
                top: 0;
                .h(40);
                .lh(30);
                .padding(0,10,0,10);
                display: inline-block;
                cursor: pointer;
                color: #666;
                i{
                    .fs(24);
                }
            }
        }
    }
}
</style>