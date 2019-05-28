import Vue from 'vue';
import Vuex from 'vuex';

/* 
	博客地址
	https://segmentfault.com/a/1190000015782272
*/
Vue.use(Vuex)
//要设置全局访问的state 对象
const state = {
	showFooter:true,
	changeabelNum:1
};

/* 
	 用this.$store.state.showFooter或this.$store.state.changebleNum在任何一个组件里面获取
	 showfooter和changebleNum定义的值了，但这不是理想的获取方式；
	 vuex官方API提供了一个getters，和vue计算属性computed一样，
	 来实时监听state值的变化(最新状态)，并把它也仍进Vuex.Store里面
	 使用方式 this.$store.getters.getChangeAbleNum
 */
const getters = {
	isShow(state){
		return state.showFooter;
	},
	
	getChangeAbleNum(state){
		return state.changeabelNum;
	}
}
/* 	
	mutattions也是一个对象，这个对象里面可以放改变state的初始值的方法，
	具体的用法就是给里面的方法传入参数state或额外的参数,
	然后利用vue的双向数据驱动进行值的改变，
	同样的定义好之后也把这个mutations扔进Vuex.Store里面
	同步方法 使用方式 this.$store.commit('newNum',num)
 */
const mutations = {
	show(state){
		state.showFooter = true
	},
	hide(state){
		state.showFooter = false;
	},
	newNum(state,num){
		state.changeabelNum = num
	}
}
/* 
	 vuex官方API还提供了一个actions，这个actions也是个对象变量，
	 最大的作用就是里面的Action方法 可以包含任意异步操作，
	 这里面的方法是用来异步触发mutations里面的方法，
	 actions里面自定义的函数接收一个context参数和要变化的形参，
	 context与store实例具有相同的方法和属性，所以它可以执行context.commit(' '),
	 然后也不要忘了把它也扔进Vuex.Store里面
	 异步方法：this.$store.dispatch('hideFooter')
*/
const actions = {
	showFooter(context){
		context.commit('show')
	},
	hideFooter(context){
		context.commit('hide')
	},
	setNewNum(context,num){
		context.commit('newNum',num)
	}
}

const store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions
});
export default store;