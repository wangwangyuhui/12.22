/* 
vuex最核心的管理对象store ==》仓库
 */

 import Vue from 'vue'
 import Vuex from 'vuex'

 import home from './moudles/home'
 import user from './moudles/user'

 Vue.use(Vuex)

 const mutations = {
 xxx (state)  {

 },
 aaa (state){

 }
 }


 const actions = {
     yyy ({commit}) {

     }
 }

 const getters = {
     zzz (state) {
     return state.home.xxx.length
     }
 }

//  向外暴露store对象
export default new Vuex.Store({
mutations,
actions,
getters,
modules:{
    home,
    user
}

})