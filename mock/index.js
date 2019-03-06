import Mock from 'mockjs'
// 引入user.js规则
import UserAPI from './user'

// 载入规则，表示正则匹配 /user/login 并且是 post 请求，则执行API中的login方法
Mock.mock(/\/user\/login/, 'post', UserAPI.login)
Mock.mock(/\/user\/info/, 'get', UserAPI.getInfo)
Mock.mock(/\/user\/logout/, 'post', UserAPI.logout)

export default Mock