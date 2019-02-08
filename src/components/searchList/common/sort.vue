<template>
    <div class="sort">
        <div class="search_sort">
            <ul>{{allSelect}}
                <li 
                :class='sortOk==index?"cur":""' 
                v-for="(item,index) in sortlist" :key="index" 
                @click="setsort(index,item.name,item.sort)"
                >{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'Sort',
    components: {
        
    },
    data () {
        return {
            sortlist:[{name:"综合排序",sort:0},{name:"销量排序",sort:1},{name:"好评排序",sort:3},
                {name:"价格从低到高",sort:2},{name:"价格从高到低",sort:5},{name:"最新上架",sort:5}],
            sortOk:0
        }
    },
    computed:{
        allSelect(){
            return this.$store.state.SearchList.allSelect
        }
    },
    methods:{
        setsort(idx,val,sort){
            this.sortOk=idx;
            this.$emit("setSort",val,sort);
        }
    },
    watch:{
        allSelect:function(newVal,oldVal){
            this.sortOk=0; 
        }
    }
}
</script>

<style lang="less" scoped>
@import url('../../../styles/main.less');
.sort{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.3);
    position: fixed;
    left: 0;
    .search_sort{
        background: #fff;
        overflow: hidden;
        ul{
            li{
                .h(44);
                .lh(44);
                text-indent: .4rem;
                .fs(14);
                border-bottom: 1px solid #e5e3e3;
                color: #2d2d2f;
                background: #fff;
            }
            .cur{
                color: #f66;
            }
            .cur:before{
                position: absolute;
                .right(25);
                color: #f66;
                content: "\2713";
                font-style: normal;
            }
        }
    }
}
</style>