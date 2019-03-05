import Vue from 'vue';
// 引入写好的icon组件
import iconSvg from '@/component/icon-svg';
// 注册到全局组件
Vue.component('icon-svg', iconSvg)

// 将./svg下不包括子目录的所有后缀名.svg的文件赋值给变量req
const requireContext = require.context('./svg', false, /\.svg$/)
// 函数 全部导入
const importAll = r => r.keys().map(r)

importAll(requireContext)
