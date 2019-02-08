<template>
    <div class="classify">
    	<!-- <Search></Search> -->
    	<div class="categories_banner">
    		<a href="#"><img src="../../assets/categorie_bannr.de2a6a8.png"></a>
    	</div>
    	<div class="categories_content">
    		<ul class="categories_list">
    			<li v-for="(item,index) in firstlist" :key="index">
                    <a href="javascript:;"  :class='select==index?"active":""' @click="setActive(index,item.id)">{{item.name}}</a>
                </li>
    		</ul>
    		<div class="categories_box">
    			<div class="categories_box_banner">
                    <Swiper v-if="categoryBanners.length > 0" :autoPlay='true' :showIndicator='true' interval="2500" duration="500">
                        <Slide  v-for="(item,index) in categoryBanners" :key="index">
                            <img :src="item.bannerUrl" alt="">
                        </Slide>
                    </Swiper>         
                </div>
    			<div class="categories_box_innner">
    				<div>
    					<h3>{{categoryinfo.name}}</h3>
    					<ul>
    						<li v-for="(item,index) in categoryinfo.thridCategory" :key="index">
    							<a href="javascript:;" @click="goto(item.id,item.name)">
    								<div class="categories_img">
    									<img :src="item.icon">
    								</div>
    								<span>{{item.name}}</span>
    							</a>
    						</li>
    					</ul>
    				</div>
    			</div>
    		</div>
    	</div>
        <Footer :navBar='router'></Footer>
    </div>
</template>

<script>
import qs from 'qs';     // 引入qs插件
import Search from '../commons/Search.vue';
import Footer from '../commons/Footer_tabBar.vue';
import { Swiper, Slide } from 'vue-swiper-component';
export default {
	name:'Classify',
    components:{
    	Search,
        Footer,
        Swiper,
        Slide
    },
    data(){
    	return{
    		firstlist:[],
    		select:0,
    		secondlist:[],
            categoryBanners:[],
    		categoryinfo:[],
            router:'Classify',
            categoryId:0
    	}
    },
    methods:{
    	getFirstList(){
    		let timer = Date.now();
			let data = qs.stringify({
				token: '',
				demandcartkey: 'c5e2498449475e49de06780c596e19eb',
				cartkey: 'c5e2498449475e49de06780c596e19eb',
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
				categorytype: 1,
				clientAppVersion: 111,
				fatherid: -1,
				phoneType: 'iPhone',
				searchtype: 1
			})
    		this.$axios.post(`/api//mobile/category/getItemFirstCategory?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=${timer}&signature=****&siteid=9`,data)
    		.then((res)=>{
    			// console.log(res.data);
    			this.firstlist=res.data.data;
                this.categoryId=res.data.data[0].id;
                // console.log(this.categoryId);
    			// console.log(this.firstlist);
    		})
    		.catch((err)=>{
    			console.log(err);
    		})
    	},
    	getSecondList(){
    		let timer = Date.now();
    		let data = qs.stringify({
    			token: '',
				demandcartkey: '31c4bcae11e8ca12c6937f48f7995746',
				cartkey: '31c4bcae11e8ca12c6937f48f7995746',
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
				categorytype: 2,
				fatherid: this.categoryId,
				searchtype: 2
    		})
    		this.$axios.post(`/api//mobile/category/getItemSecondCategory?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=${timer}&signature=****&siteid=9`,data)
    		.then((res)=>{
    			// console.log(res.data);
    			this.secondlist=res.data.data;
                this.categoryBanners=res.data.data.categoryBanners;
    			this.categoryinfo=res.data.data.categoryinfo[0];
    		})
    		.catch((err)=>{
    			console.log(err);
    		})
    	},
        setActive(index,id){
            this.select=index;
            this.categoryId=id;
            this.getSecondList();
        },
        goto(id,name){
			this.$router.push({path:'/searchList',query:{categoryId:id,categoryName:name}});
        }
    },
    watch:{
        categoryId:function(newVal,oldVal){
            this.getSecondList();
		},
	 	$route(newValue,oldValue){
			 if(newValue.name==this.router){
				 this.router='Classify'
			 }
        //   console.log(newValue,oldValue)
      }
    },
    created(){
    	this.getFirstList();
    },
    mounted(){
        // console.log(this.categoryId);
	}
}
</script>

<style lang="less" scoped>
@import url('../../styles/main.less');
.classify{
	.w(375);
	.h(667);
    .padding(44,0,0,0);
	.categories_banner{
		.h(44);
		img{.h(44);}
	}
	.categories_content{
		.h(568);
        zoom: 1;
        overflow: hidden;
		.categories_list{
			height: 100%;
			.padding(0,0,44,0);
			width: 25%;
    		float: left;
    		overflow-y: auto;
    		border-right: 1px solid rgba(0,0,0,.1);
    		background-color: #f7f7f7;
    		li{
    			.h(48);
                display: list-item;
    			border-bottom: 1px solid rgba(0,0,0,.1);
    			a{
    				display: block;
    				.h(49);
    				.lh(49);
    				.fs(14);
    				color: #333;
    				.padding(0,10,0,10);
    			}
    			.active{
    				color: #f66;
				    background: #fff;
				    border-left: 2px solid #f66;
    			}
    		}
		}
		.categories_box{
			width: 75%;
		    height: 100%;
		    overflow-y: auto;
		    .padding(0,0,0,10);
		    .categories_box_banner{
		    	.h(75);
		    	.padding(10,10,0,0);
                .wh_content{
                    .h(65);
                    .wh_slide{
                        min-height: 2rem;
                    }
                }
                img{
                    width: 100%;
                    .h(75);
                    vertical-align: middle;
                    cursor: pointer;
                }
		    }
		    .categories_box_innner{
		    	.padding(0,0,88,0);
		    	h3{
		    		color: #333;
		    		.h(39);
		    		.lh(39);
		    		.fs(16);
		    		border-bottom: 1px solid rgba(0,0,0,.1);
		    	}
		    	ul{
		    		overflow: hidden;
		    		.padding(20,10,0,0);
		    		.fs(14);
		    		li{
		    			float: left;
					    width: 33.33333%;
					    .h(88);
					    text-align: center;
					    .margin(0,0,15,0);
					    display: block;
					    a{
					    	display: block;
    						color: #555;
    						.categories_img{
    							.w(58);
    							.h(58);
    							margin: 0 auto .26666666666666666rem;
    							img{
    								.w(58);
    								.h(58);
    								border-radius: 50%;
    							}
    						}
    						span{
    							display: block;
    							white-space: nowrap;
    							text-overflow: ellipsis;
    							.h(16);
    							.lh(16);
    						}
					    }
		    		}
		    	}
		    }
		}
	}
}
</style>
