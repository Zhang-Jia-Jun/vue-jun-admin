// API对应请求，所以这里引入请求工具 request.js
import request from '@/utils/request'

// 登录API
export function login(username, password) {
    return request({
        url: '/user/login',
        method: 'post',
        data: {
            username, password
        }
    })
}

// 根据token获取用户信息
export function getInfo(token) {
    return request({
        url: '/user/info',
        method: 'get',
        params: { token }
    })
}

// 退出账号
export function loginOut(){
    return request({
        url:'/user/logout',
        method:'post'
    })
}