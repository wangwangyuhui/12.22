

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TypeNav from "./components/TypeNav"


//不显示非生产环境
Vue.config.productionTip = false

// 注册全局组件
Vue.component(TypeNav.name, TypeNav)

new Vue({
  render: h => h(App),
  router,
  store, //注册vuex
}).$mount('#app')

/* eslint-disable no-unused-vars */
// const a =123

/* 
store对象的功能
读取数据
store.state.xxx
计算属性数据
store.getters.yyy
更新数据
store.dispatch(action名称,data)
store.commit(mutation名称，data)
*/