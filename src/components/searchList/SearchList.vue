<template>
    <div class="searchList">
        <SearchHeader :totalCount="totalCount" :name="name"></SearchHeader>
        <SearchTab1 @getselect='getselect' @getsort="getsort"></SearchTab1>
        <SearchTab2 @getselfIs='getselfIs' @getsales='getsales' @getbrands='getbrands' @getprice='getprice' :brands="brands" :priceRanges="priceRanges" :promotionFilters="promotionFilters"></SearchTab2>
        <SearchResult v-show="!select" :goodslist="goodslist"></SearchResult>
        <SearchResult2 v-show="select" :goodslist="goodslist"></SearchResult2>
    </div>
</template>

<script>
import qs from 'qs';
import SearchHeader from './common/search';
import SearchTab1 from './common/searchTab1';
import SearchTab2 from './common/searchTab2';
import SearchResult from './common/searchResult';
import SearchResult2 from './common/searchResult2';
export default {
    name:'SearchList',
    components: {
        SearchHeader,SearchTab1,SearchTab2,SearchResult,SearchResult2
    },
    data () {
        return {
            categoryId:this.$route.query.categoryId,
            categoryName:this.$route.query.categoryName,
            goodslist:[],
            totalCount:0,
            name:'',
            sort:0,//排序
            select:false,
            selfIs:false,//是否自营
            goods:1,
            brands:[],//品牌
            priceRanges:[],//价格
            promotionFilters:[],//促销
            selfStr:'',
            salesStr:'',
            brandsStr:'',
            priceStr:''
        }
    },
    methods:{
        getGoods(str){      //用categoryId和categoryName请求数据
            this.goods=1;
            let timer = Date.now();
            let data = qs.stringify({
                token: '',
                demandcartkey: '8131344b07a686d6bc1090f5a456d2f0',
                cartkey: '8131344b07a686d6bc1090f5a456d2f0',
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
                pagesize: 10,
                pageindex: 1,
                sort: this.sort,
                heguiKeyword: this.categoryName,
                categoryid: this.categoryId,
                cityname: '广州',
                locateProvinceId: 20,
                platform: 9
            }) 
            if(str){
                data+=str;
            }
            this.$axios.post(`/api//search/prod?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=${timer}&signature=****&siteid=9`,data)
            .then((res)=>{
                this.goodslist=res.data.data.hits;
                this.totalCount=res.data.data.totalCount;
                // console.log(this.goodslist);
            })
            .catch((err)=>{
                console.log(err);
            })
        },
        getGoods2(str){     //用searchWord请求数据
            this.goods=2;
            let timer = Date.now();
            let data = qs.stringify({
                token: '',
                demandcartkey: '8131344b07a686d6bc1090f5a456d2f0',
                cartkey: '8131344b07a686d6bc1090f5a456d2f0',
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
                keyword: this.$route.query.searchWord,
                pagesize: 10,
                pageindex: 1,
                sort: this.sort,
                heguiKeyword: this.$route.query.searchWord,
                cityname: '广州',
                locateProvinceId: 20,
                platform: 9
            })
            if(str){
                data+=str;
            }
            this.$axios.post(`/api//search/prod?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=${timer}&signature=****&siteid=9`,data)
            .then((res)=>{
                this.goodslist=res.data.data.hits;
                this.totalCount=res.data.data.totalCount;
            })
            .catch((err)=>{
                console.log(err);
            })
        },
        getTab2Data(str){
            let timer = Date.now();
            let data = qs.stringify({
                token: '',
                demandcartkey: '720c655fdae250c3846c3645df63eff3',
                cartkey: '720c655fdae250c3846c3645df63eff3',
                provinceid: 20,
                province: 20,
                provincename: '广东',
                tradername: 'yw_app',
                trader: 'h5',
                closesignature: 'yes',
                signature_method: 'md5',
                timestamp: timer,
                signature: '****',
                siteid: 9
                // keyword: this.$route.query.searchWord,
            }) 
            if(str){
                data+=str;
            }
            this.$axios.post(`/api//search/filter?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=${timer}&signature=****&siteid=9`,data)
            .then((res)=>{
                this.brands=res.data.data.brands;
                this.priceRanges=res.data.data.priceRanges;
                this.promotionFilters=res.data.data.promotionFilters;
                // console.log(this.promotionFilters);
            })
            .catch((err)=>{
                console.log(err);
            })
        },
        getselect(val,id){
            this.select=val;
            if(id){
                this.categoryId=id;
                this.categoryName=this.$store.state.SearchList.categoryName;
                this.name=this.categoryName;
                this.sort=0;
                this.selfIs=false;
                this.getGoods();            
                this.selfStr='';
                this.salesStr='';
                this.brandsStr='';
                this.priceStr='';
            }
        },
        getsort(sort){       //排序
            this.sort=sort;
            let str = this.selfStr+this.salesStr+this.brandsStr+this.priceStr;
            if(this.goods==1){
                this.getGoods(str);
            }else{
                this.getGoods2(str);
            }
        },
        getselfIs(val){    //自营
            this.selfIs=val;
            let str = this.salesStr+this.brandsStr+this.priceStr;
            if(val){
                let self = '&venderid=1';
                this.selfStr = self;
                if(this.goods==1){
                    this.getGoods(str+self);
                }else{
                    this.getGoods2(str+self);
                }
            }else{
                if(this.goods==1){
                    this.getGoods(str);
                }else{
                    this.getGoods2(str);
                }
            }
        },
        getsales(id){     //促销
            let str = this.selfStr+this.brandsStr+this.priceStr;
            if(id!=''){
                let sales=`&promotiontype=${id}`;
                this.salesStr = sales;
                str+=sales;
                if(this.goods==1){
                    this.getGoods(str);
                }else{
                    this.getGoods2(str);
                }
            }else{
                this.salesStr = '';
                if(this.goods==1){
                    this.getGoods(str);
                }else{
                    this.getGoods2(str);
                }
            }
        },
        getbrands(id){      //品牌
            let str = this.selfStr+this.salesStr+this.priceStr;
            if(id!=''){
                let brands=`&brands=${id}`;
                this.brandsStr = brands;
                str+=brands;
                if(this.goods==1){
                    this.getGoods(str);
                }else{
                    this.getGoods2(str);
                }
            }else{
                this.brandsStr = '';
                if(this.goods==1){
                    this.getGoods(str);
                }else{
                    this.getGoods2(str);
                }
            }
        },
        getprice(min,max){      //价格
            let str = this.selfStr+this.salesStr+this.brandsStr;
            if(min!=0||max!=0){
                let price=`&pricestart=${min}&priceend=${max}`;
                this.priceStr = price;
                str+=price;
                if(this.goods==1){
                    this.getGoods(str);
                }else{
                    this.getGoods2(str);
                }
            }else{
                this.priceStr = '';
                if(this.goods==1){
                    this.getGoods(str);
                }else{
                    this.getGoods2(str);
                }
            }
        }
    },
    created(){
        if(this.$route.query.categoryName){
            this.getGoods();
            let categoryid = `&categoryId=${this.categoryId}`;
            this.getTab2Data(categoryid);
        }else{
            this.getGoods2();
            let keyword = `&keyword=${this.$route.query.searchWord}`;
            this.getTab2Data(keyword);
        }
        
    }
}
</script>

<style lang="less" scoped>
@import url('../../styles/main.less');

</style>