<template>
    <div class="price">
        <div class="price_tab2_con">
            <div class="price_tab2_con_con">
                <span :class='idx==index?"price_key cur":"price_key"' v-for="(item,index) in price" :key="index" @click="setokIs(index,item.name,item.min,item.max)">{{item.name}}</span>
            </div>
            <div class="price_tab2_btn_part">
                <div class="btn_part_con">
                    <input type="tel" placeholder="最低价" class="price_input">
                    <span> ~ </span>
                    <input type="tel" placeholder="最高价" class="price_input">
                    <span class="price_btn">确定</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Price',
    props:['price'],
    data () {
        return {
           idx:-1
        }
    },
    computed:{
        allSelect(){
            return this.$store.state.SearchList.allSelect
        }
    },
    methods:{
        setokIs(idx,name,min,max){
            this.idx=idx;
            if(idx>0){
                this.$emit('setPrice',name,true,min,max);
            }else{
                this.$emit('setPrice','价格',false,min,max);
            }
        }
    },
    watch:{
        allSelect:function(newVal,oldVal){
            this.idx=-1; 
        }
    }
}
</script>

<style lang="less" scoped>
@import url('../../../styles/main.less');
.price{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.3);
    position: fixed;
    left: 0;
    .top(132);
    .price_tab2_con{
        .maxh(260);
        background: #fff;
        position: relative;
        overflow: hidden;
        .price_tab2_con_con{
            height: 100%;
            overflow: auto;
            .margin(0,0,52,0);
            .padding(0,15,0,15);
            .fs(14);
            .lh(50);
            .maxh(208);
            .price_key{
                display: block;
                cursor: pointer;
            }
            .cur{
                position: relative;
                color: #f66;
            }
            .cur:after{
                position: absolute;
                content: "\2713";
                color: #f66;
                .margin(0,0,0,8);
            }
        }
        .price_tab2_btn_part{
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            .h(52);
            .lh(52);
            .fs(16);
            .btn_part_con{
                .padding(0,10,0,10);
                background: #fff;
                position: relative;
                border-top: 1px solid #e7e7e7;
                .price_input{
                    .w(85);
                    .h(30);
                    text-indent: .21333333rem;
                    .margin(10,0,0,0);
                    .br(5);
                    background: #f1f1f2;
                }
                input::-webkit-input-placeholder{
                    color: #ccc;
                    .fs(13);
                }
                .price_btn{
                    .w(60);
                    .h(30);
                    .lh(30);
                    position: absolute;
                    .top(10);
                    .right(10);
                    text-align: center;
                    .br(5);
                    background: #f66;
                    color: #fff;
                    cursor: pointer;
                    display: inline-block;
                    .fs(12);
                }
            }
        }
    }
}
</style>