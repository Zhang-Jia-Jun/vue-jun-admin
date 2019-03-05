// vue框架
import Vue from 'vue'

// css重置样式
import 'normalize.css'
// 全局样式
import './styles/index.scss'

// Element插件
import './plugins/element.js'

// 应用程序入口
import App from './App.vue'
// 路由
import router from './router'
// 状态仓库
import store from './store'

// 引入icons组件
import './icons'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
