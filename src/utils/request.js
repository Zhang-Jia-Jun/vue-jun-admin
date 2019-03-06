// 项目请求 使用 axios 框架
import axios from 'axios'

// 创建 axios 实例
const service = axios.create({
    // 项目的根路径
    baseURL: process.env.BASE_API,
    // 请求5秒超时
    timeout: 5000
})

export default service