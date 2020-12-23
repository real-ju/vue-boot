// 已弃用 登陆状态通过vuex持久化(暂存)
import Vue from 'vue'

function login(user) {
    Vue.$localStorage.set('user', user);
    Vue.$localStorage.set('isLogin', true);
}

function logout() {
    Vue.$localStorage.remove('user');
    Vue.$localStorage.remove('isLogin');
}

function isLogin() {
    if(Vue.$localStorage.get('isLogin')) {
        return true
    }

    return false
}

export default {
    login,
    logout,
    isLogin
}
