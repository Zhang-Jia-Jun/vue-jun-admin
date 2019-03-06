import { param2Obj } from './utils'

// 表示后台有两条token信息
const tokens = {
    admin: {
        token: 'admin-token'
    },
    editor: {
        token: 'editor-token'
    }
}

// 两种角色身份，对应的权限也有不同
const users = {
    'admin-token': {
        roles: ['admin'],
        introduction: 'I am a super administrator',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Super Admin'
    },
    'editor-token': {
        roles: ['editor'],
        introduction: 'I am an editor',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Normal Editor'
    }
}

// mockjs的规则对象
export default {
    // 当请求到login时，接收参数res
    login: res => {
        const { username } = JSON.parse(res.body)
        const data = tokens[username]
        if (data) {
            return {
                code: 2000,
                data
            }
        }
        return {
            code: 6020,
            message: 'Account and password are incorrect.'
        }
    },
    getInfo: res => {
        const { token } = param2Obj(res.url)
        const info = users[token]

        if (info) {
            return {
                code: 2000,
                data: info
            }
        }
        return {
            code: 5000,
            message: 'Login failed, unable to get user details.'
        }
    },
    logout: () => {
        return {
            code: 20000,
            data: 'success'
        }
    }
}
