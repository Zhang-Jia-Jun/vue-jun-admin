// 项目请求 使用 axios 框架
import axios from 'axios'
import { MessageBox } from 'element-ui'
import store from '../store'

// 创建 axios 实例
const service = axios.create({
    // 项目的根路径
    baseURL: 'http://rest.apizza.net/mock/dbb28c3d1d69ee2fc1c12a7791df45d5/',
    // 请求5秒超时
    timeout: 5000
})

// response 拦截器
service.interceptors.response.use(
    // 在接收服务器响应的拦截器上只能做一些简单的处理，主要的处理还是在业务代码当中
    response => {
        const data = response.data
        // 如下状态码根据业务需求进行修改
        // 状态码不等于2000表示业务逻辑错误
        // 当前项目对于2000状态码不做处理，只进行错误打印并返回一个请求失败Promise
        if (data.code === 2000) {
            return data;
        }
        // 业务状态，5000表示token认证失败或者过期
        if (data.code === 5000) {
            MessageBox.confirm(
                '你已被登出，可以继续留在该页面，或者重新登录',
                '确定登出',
                {
                    confirmButtonText: '重新登录',
                    cancelButtonText: '取消',
                    type: 'warning'
                }
            ).then(() => {
                // store.dispatch('FedLogOut').then(() => {
                //     location.reload() // 为了重新实例化vue-router对象 避免bug
                // })
            })
        }
        return Promise.reject(data)
    },
    error => {
        // 如果服务器响应失败，直接控制台打印错误信息
        console.error('err:' + error)
        return Promise.reject(error)
    }
)

export default service