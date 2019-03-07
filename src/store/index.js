import Vue from 'vue'
import Vuex from 'vuex'
// 用户状态库
import user from './modules/user'
// 应用程序状态库
import app from './modules/app'
// 引入统一管理的getter属性
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{user,app},
  getters
})
