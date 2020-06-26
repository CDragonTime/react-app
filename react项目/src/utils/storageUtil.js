import store from "store"
const USER = "user"

export default {
    // 保存User
    saveUser(user){
        // localStorage.setItem(USER,JSON.stringify(user))
        store.set(USER,user)
    },

    // 获取User
    getUser(){
        // return JSON.parse(localStorage.getItem(USER)|| {})
       return store.get(USER)
    },

    // 删除User
    removeUser(){
        // localStorage.removeItem(USER)
        store.remove(USER)
    }
}