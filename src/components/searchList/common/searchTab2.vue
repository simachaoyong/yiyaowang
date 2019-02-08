<template>
    <div class="searchTab2">
        <ul>
            <li :class='selfIs?"cur1":""'>
                <span @click="setSelf()">自营</span>
            </li>
            <li :class='{cur2:salesIs,child_cur:getsalesIs}'>
                <span @click="setSales()">{{saleValue}}<i class="i"></i></span> 
            </li>
            <li :class='{cur2:brandIs,child_cur:getbrandsIs}'>  
                <span @click="setBrand()">{{brandValue}}<i class="i"></i></span>
            </li>
            <li :class='{cur2:priceIs,child_cur:getpriceIs}'>
                <span @click="setPrice()">{{priceValue}}<i class="i"></i></span>
            </li>
        </ul>
        <Sales v-show="salesIs" :data="promotionFilters" @change="setSales"></Sales>
        <Brand v-show="brandIs" :data="brands" @change="setBrand"></Brand>
        <Price v-show="priceIs" :price="priceRanges" @setPrice="setPrice"></Price>
    </div>
</template>

<script>
import Sales from './sales';
import Brand from './brand';
import Price from './price';
export default {
    name:'SearchTab2',
    components: {
        Sales,Brand,Price
    },
    props:['brands','priceRanges','promotionFilters'],
    data () {
        return {
            saleValue:'促销',
            brandValue:'品牌',
            priceValue:'价格',
            selfIs:false,//自营
            salesIs:false,//促销
            getsalesIs:false,
            brandIs:false,//品牌
            getbrandsIs:false,
            priceIs:false,//价格
            getpriceIs:false
        }
    },
    computed:{
        allSelect(){
            return this.$store.state.SearchList.allSelect
        }
    },
    methods:{
        setSelf(){
            this.selfIs=!this.selfIs;
            this.salesIs=false;
            this.brandIs=false;
            this.priceIs=false;
            this.$emit('getselfIs',this.selfIs);
        },
        setSales(list){
            this.salesIs=!this.salesIs;
            this.brandIs=false;
            this.priceIs=false;
            if(list){
                if(list!=""){
                    let strId="";
                    let str="";
                    list.forEach((item)=>{
                        strId+=","+item.id;
                        str+=","+item.name;
                    })
                    this.saleValue=str.slice(1);
                    this.getsalesIs=true;
                    this.$emit('getsales',strId.slice(1));
                }else{
                    this.saleValue="促销";
                    this.getsalesIs=false;
                    this.$emit('getsales','');
                }
            }
            
        },
        setBrand(idx){
            this.brandIs=!this.brandIs;
            this.salesIs=false;
            this.priceIs=false;
            if(idx){
                let strId='';
                let str='';
                if(idx.length!=0){
                    idx.forEach((item)=>{
                        strId+=","+this.brands[item].id;
                        str+=","+this.brands[item].name;
                    })
                    strId=strId.slice(1);
                    str=str.slice(1);
                    this.brandValue=str;
                    this.getbrandsIs=true;
                    this.$emit('getbrands',strId);
                }else{
                    this.brandValue='品牌';
                    this.getbrandsIs=false;
                    this.$emit('getbrands','');
                }
            }
        },
        setPrice(name,bool,min,max){
            this.priceIs=!this.priceIs;
            this.salesIs=false;
            this.brandIs=false;
            if(name){
                this.priceValue=name;
                this.getpriceIs=bool;
                this.$emit('getprice',min,max);
            }
        }
    },
    watch:{
        allSelect:function(newVal,oldVal){
            this.saleValue='促销';
            this.brandValue='品牌';
            this.priceValue='价格';
            this.selfIs=false;
            this.salesIs=false;//促销
            this.getsalesIs=false;
            this.brandIs=false;//品牌
            this.getbrandsIs=false;
            this.priceIs=false;//价格
            this.getpriceIs=false;
        }
    }
}
</script>

<style lang="less" scoped>
@import url('../../../styles/main.less');
.searchTab2{
    .h(44);
    background: #fff;
    width: 100%;
    border-bottom: 1px solid #eee;
    position: fixed;
    .top(88);
    z-index: 2;
    ul{
        .fs(15);
        .padding(8,0,0,0);
        .margin(0,8,0,8);
        overflow: hidden;
        li{
            text-align: center;
            width: 25%;
            float: left;
            span{
                .h(28);
                .lh(28);
                width: 90%;
                background: #f8f8f8;
                text-align: center;
                display: inline-block;
                position: relative;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
                .br(3);
                .i{
                    display: inline-block;
                    position: absolute;
                    top: 12px;
                    right:16px;
                    width: 0;
                    height: 0;
                    margin-left: 4px;
                    border: 3.5px solid transparent;
                    border-top-color: #999;
                }
            }
        }
        .cur1{
            span{
                border: 1px solid #f66;
                color: #f66;
                background: #fff;
            }
            span:after{
                content: "\2713";
                color: #f66;
                font-style: normal;
                .margin(0,0,0,2);
            }
        }
        .cur2{
            span{
                .h(38);
                background: #fff;
                border: 1px solid #e7e7e7 !important;
                border-bottom: none;
            }
        }
        .child_cur{
            span{
                border: 1px solid #f66;
                color: #f66;
                background: #fff;
                i{
                    .top(8);
                    .right(3);
                    border-bottom-color: #f66;
                    border-top-color: transparent;
                }
            }  
        }
    }
}
</style>