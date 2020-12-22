import Vue from 'vue'
import App from './App.vue'


//不显示非生产环境
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

/* eslint-disable no-unused-vars */
// const a =123