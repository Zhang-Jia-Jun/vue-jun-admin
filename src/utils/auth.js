// 引入 cookie 中间件
import Cookies from 'js-cookie'

// 写死 cookie 的 key
const TokenKey = 'vue_jun_admin_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token,expires = 1) {
  return Cookies.set(TokenKey, token,{expires})
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
