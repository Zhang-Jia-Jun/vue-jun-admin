// vue框架
import Vue from 'vue'

// css重置样式
import 'normalize.css'
// Element插件
import './plugins/element.js'
// 全局样式
import './styles/index.scss'
// 引入icons组件
import './icons'
// 引入animate.css动画效果
import 'animate.css';

// 应用程序入口
import App from './App.vue'
// 路由
import router from './router'
// 状态仓库
import store from './store'


// 引入mockjs,拦截请求,模拟数据
import '../mock'



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
