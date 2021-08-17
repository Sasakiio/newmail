<template>
	<div class="bottom-bar">
		<div class="bar-item bar-left" >
			<div>
				<i class="icon service"><img src="~assets/img/detail/headset.svg" alt=""></i>
				<span class="text">客服</span>
			</div>	
		    <div>
			    <i class="icon shop"><img src="~assets/img/detail/store.svg" alt=""></i>	
			    <span class="text">店铺</span>
		    </div>
		    <div>
			    <i class="icon select" @click="collectClick">
				<p v-if="!collectActive">
                   <img src="~assets/img/detail/star-regular.svg" alt="" ></p>
			    <p v-else >
                   <img src="~assets/img/detail/star-solid.svg" alt="" ></p>
				</i>
			    <span class="text">收藏</span>
		    </div>
		</div>
		
		<div class="bar-item bar-right">
			<div class="cart"  @click="addToCart">加入购物车</div>
			<div class="buy">购买</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DetailBottomBar',
		methods: {
			addToCart() {
				this.$emit('addCart')
			},
			collectClick(){
			  this.collectActive = !this.collectActive;
			  },
		},
			data(){
				return {
					collectActive: false
					}
			}
	}
</script>

<style>
	.bottom-bar {
		height: 49px;
		position: relative;
		background-color: #fff;
		left: 0;
		right: 0;
		bottom: 49px;
		z-index: 10;
		display: flex;
		text-align: center;
	}

	.bar-item {
		flex: 1;
		display: flex;
	}

	.bar-item>div {
		flex: 1;
	}

	.bar-left .text {
		font-size: 14px;
	}

	.bar-left .icon {
		display: block;
		width: 22px;
		height: 22px;
		margin: 6px auto 3px;
	}

	.bar-left .service {
		background-position:0 -54px;
	}

	.bar-left .shop {
		background-position:0 -98px;
	}

	.bar-right {
		font-size: 15px;
		color: #fff;
		line-height: 58px;
	}

	.bar-right .cart {
		background-color: #ffe817;
		color: #333;
	}

	.bar-right .buy {
		background-color: #f69;
	}
</style>
