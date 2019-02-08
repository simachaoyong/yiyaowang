<template>
    <div class="category">
        <div class="search_category">
            <ul class="category_left">
                <li 
                :class='list==index?"on":""' 
                v-for="(item,index) in categorylist" :key="index" 
                @click="getIdx(index)"
                >{{item.name}}</li>
            </ul>
            <div class="category_right">
                <ul>
                    <li 
                    :class='okIs==index?"cur":""' 
                    v-for="(item,index) in categorylists[list]" :key="index" 
                    @click="setokIs(index,item.name,item.id)"
                    >{{item.name}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import qs from 'qs';
export default {
    name:'Category',
    components: {
        
    },
    data () {
        return {
            categorylist:[],
            categorylist2:[],
            list:0,
            okIs:-1
        }
    },
    computed:{
        categorylists(){
            this.categorylist2.forEach((item)=>{
                item.unshift({name:'全部'});
            })
            return this.categorylist2;
        }
    },
    methods:{
        getCategory(){
            let timer = Date.now();
            let data;
            if(this.$route.query.categoryId){
                data = qs.stringify({
                    token: '',
                    demandcartkey: '0228b648342af43c29c57176934d4f65',
                    cartkey: '0228b648342af43c29c57176934d4f65',
                    provinceid: 20,
                    province: 20,
                    provincename: '广东',
                    tradername: 'yw_app',
                    trader: 'h5',
                    closesignature: 'yes',
                    signature_method: 'md5',
                    timestamp: timer,
                    signature: '****',
                    siteid: 9,
                    categoryid: this.$route.query.categoryId
                })
            }else{
                data = qs.stringify({
                    token: '',
                    demandcartkey: '0228b648342af43c29c57176934d4f65',
                    cartkey: '0228b648342af43c29c57176934d4f65',
                    provinceid: 20,
                    province: 20,
                    provincename: '广东',
                    tradername: 'yw_app',
                    trader: 'h5',
                    closesignature: 'yes',
                    signature_method: 'md5',
                    timestamp: timer,
                    signature: '****',
                    siteid: 9,
                    keyword: this.$route.query.searchWord
                })
            }
            this.$axios.post(`/api//search/category/?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=${timer}&signature=****&siteid=9`,data)
            .then((res)=>{
                // this.categorylist=this.categorylist.concat(res.data.data.categories[0].children);
                this.categorylist=this.categorylist.concat(res.data.data.categories);
                res.data.data.categories.forEach((item)=>{
                    this.categorylist2.push(item.children);
                })
                // console.log(this.categorylist);          
                // console.log(this.categorylist2);          
            })
            .catch((err)=>{
                console.log(err);
            })
        },
        setokIs(idx,val,id){
            this.okIs=idx;
            this.$store.commit('setallSelect',idx);
            if(idx==0){
                this.$emit("setallSelect",this.categorylist[this.list].name,0,this.categorylist[this.list].id);
            }else{
                this.$emit("setCategory",val,0,id);
            }  
        },
        getIdx(idx){
            this.list=idx;
            this.okIs=-1;
            this.$emit("setCategory",'全部分类',1);
        }
    },
    created(){
        this.getCategory();
    }
}
</script>

<style lang="less" scoped>
@import url('../../../styles/main.less');
.category{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.3);
    position: fixed;
    left: 0;
    .search_category{
        .h(308);
        position: relative;
        background: #fff;
        padding-left: 50%;
        overflow: hidden;
        .category_left{
            width: 50%;
            .h(308);
            background: #f7f7f7;
            position: absolute;
            left: 0;
            top: 0;
            overflow-y: scroll;
            z-index: 20;
            li{
                .h(44);
                .lh(44);
                text-indent: .4rem;
                .fs(14);
                border-bottom: 1px solid #e5e3e3;
                color: #2d2d2f;     
            }
            .on{
                background: #fff;
            }
        }
        .category_right{
            .h(308);
            overflow-y: scroll;
            ul{
                li{
                    .h(44);
                    .lh(44);
                    text-indent: .4rem;
                    .fs(14);
                    border-bottom: 1px solid #e5e3e3;
                    color: #2d2d2f;
                    position: relative;
                }
                .cur{
                    color: #f66;
                }
                .cur:before{
                    position: absolute;
                    right: .4rem;
                    color: #f66;
                    content: "\2713";
                    font-style: normal;
                }
            }
        }
    }
}
</style>