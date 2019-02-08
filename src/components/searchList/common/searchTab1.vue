<template>
    <div class="searchTab1">
        <ul>
            <li :class='categoryIs?"cur":""' @click="setCategory()">
                <span>{{name}}</span>
                <i class="i"></i>
            </li>
            <li :class='sortIs?"cur":""' @click="setSort()">
                <span>{{sortName}}</span>
                <i class="i"></i>
            </li>
            <li v-show="!select" @click="setSelect()">
                <i class="iconfont fs">&#xe607;</i>
                <span>列表</span>
            </li>
            <li v-show="select" @click="setSelect()">
                <i class="iconfont fs">&#xe605;</i>
                <span>大图</span>
            </li>
            <li>
                <i class="iconfont fs">&#xe633;</i>
                <span>筛选</span>
            </li>
        </ul>
        <Category v-show="categoryIs" @setCategory="setCategory"></Category>
        <Sort v-show="sortIs" @setSort="setSort"></Sort>
    </div>
</template>

<script>
import Category from './category';
import Sort from './sort';
export default {
    name:'SearchTab1',
    components: {
        Category,Sort
    },
    data () {
        return {
            name:this.$route.query.categoryName||'全部分类',
            sortName:'综合排序',
            categoryIs:false,
            sortIs:false,
            select:false
        }
    },
    computed:{
        allSelect(){
            return this.$store.state.SearchList.allSelect
        }
    },
    methods:{
        setCategory(val,ok,id){
            this.categoryIs=!this.categoryIs;
            this.sortIs=false;
            if(val){
                this.name=val;
                this.$store.commit('setcategoryName',val);
            }
            if(ok==1){
                this.categoryIs=true;
            }
            if(id){
                this.$emit('getselect',this.select,id);
            }
        },
        setSort(val,sort){      //排序
            this.sortIs=!this.sortIs;
            this.categoryIs=false;
            if(val){
                this.sortName=val;
                this.$emit('getsort',sort);
            }
        },
        setSelect(){
            this.select=!this.select;
            this.$emit('getselect',this.select);
        }
    },
    watch:{
        allSelect:function(newVal,oldVal){
            this.sortName = '综合排序';
        }
    },
    created(){

    }
}
</script>

<style lang="less" scoped>
@import url('../../../styles/main.less');
.searchTab1{
    .h(48);
    background: #fff;
    width: 100%;
    border-bottom: 1px solid #eee;
    position: fixed;
    .top(40);
    z-index: 3;
    ul{
        .fs(15);
        overflow: hidden;
        li{
            width: 18%;
            .h(48);
            .lh(48);
            float: left;
            text-align: center;
            overflow: hidden;
            position: relative;
            .i{
                display: inline-block;
                position: absolute;
                top: 20px;
                right:8px;
                width: 0;
                height: 0;
                margin-left: 4px;
                border: 4px solid transparent;
                border-top-color: #666;
            }
            .fs{
                .fs(17);
            }
        }
        li:first-child{
            width: 31%;
        }
        li:nth-child(2){
            width: 32%;
            .padding(0,20,0,0);
        }
        .cur{
            color: #f66;
            .i{
                border-top-color: #f66;
            }
        }
    }
}
</style>