import Vue from 'vue'
import Vuex from 'vuex'
// 用户状态库
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{user}
})
