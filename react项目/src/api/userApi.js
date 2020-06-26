import axios from "./ajax"

export const getUserLogin = (data)=>axios("/api/userLoginController/userCheckLogin",data,"POST")
// 得到所有用户
export const getAllUser = (data)=>axios("/api/userController/selectAllUser",data)


export const getAllInform = ()=>axios("/api/informController/selectAllInform")
