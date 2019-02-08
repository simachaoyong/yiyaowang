<template>
    <div class="brand">
        <div class="filter_tab2_con">
            <div class="filter_tab2_con_con">
                <span :class='idx.indexOf(index)>=0?"filter_key cur":"filter_key"' v-for="(item,index) in data" :key="index" @click="setokIs(index)">{{item.name}}</span>
            </div>
            <div class="filter_tab2_btn_part">
                <span @click="clear()">重置</span>
                <span class="sure_btn" @click="ok()">确定</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Brand',
    props:['data'],
    data () {
        return {
           idx:[]
        }
    },
    computed:{
        allSelect(){
            return this.$store.state.SearchList.allSelect
        }
    },
    methods:{
        setokIs(idx){
            let i = this.idx.indexOf(idx);
            if(i>=0){
                this.idx.splice(i,1);
            }else{
                this.idx.push(idx);
            }
        },
        clear(){
            this.idx=[];
        },
        ok(){
            this.idx.sort((a,b)=>{
                return a-b;
            })
            this.$emit('change',this.idx);
        }
    },
    watch:{
        allSelect:function(newVal,oldVal){
            this.clear(); 
        }
    }
}
</script>

<style lang="less" scoped>
@import url('../../../styles/main.less');
.brand{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.3);
    position: fixed;
    left: 0;
    .top(132);
    .filter_tab2_con{
        .maxh(260);
        background: #fff;
        position: relative;
        overflow: hidden;
        .filter_tab2_con_con{
            height: 100%;
            overflow: auto;
            .margin(0,0,52,0);
            .padding(0,15,0,15);
            .fs(14);
            .lh(50);
            .maxh(208);
            .filter_key{
                width: 50%;
                float: left;
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
        .filter_tab2_btn_part{
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            border-top: 1px solid #e7e7e7;
            .h(52);
            .lh(52);
            display: flex;
            .fs(16);
            span{
                flex: 1;
                width: 100%;
                text-align: center;
                cursor: pointer;
            }
            .sure_btn{
                background: #f66;
                color: #fff;
            }
        }
    }
}
</style>