<template>
	<view class="content">
		<text>{{num}}</text>
		
		<view class="">
			<text v-show="isCanShow">我是footer</text>
		</view>
		<button type="primary" @tap="toToggleFooter">改变footer状态</button>
		<button type="primary" @tap="toAdd">增加num数字</button>
		<button type="warn" @tap="toAdd2">actions 增加num数字 </button>
		<button type="warn" @tap="toToggleFooter2">actions 改变footer状态 </button>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				title: 'Hello',
			}
		},
		onLoad() {
			console.log('this is store',this.$store)
		},
		methods: {
			toAdd(){
				let num = this.$store.getters.getChangeAbleNum;
				num++;
				this.$store.commit('newNum',num)
			},
			toToggleFooter(){
				let isShow = this.$store.getters.isShow;
				if(isShow){
					this.$store.commit('hide')
				}else{
					this.$store.commit('show')
				}
			},
			toAdd2(){
				let num = this.$store.getters.getChangeAbleNum;
				num++;
				this.$store.dispatch('setNewNum',num)
			},
			toToggleFooter2(){
				let isShow = this.$store.state.showFooter;
				if(isShow){
					this.$store.dispatch('hideFooter')
				}else{
					this.$store.dispatch('showFooter')
				}
			}
		},
		computed:{
			isCanShow:function(){
				console.log(this.$store.getters.isShow)
				return this.$store.getters.isShow;
			},
			num:function(){
				return this.$store.getters.getChangeAbleNum;
			}
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
