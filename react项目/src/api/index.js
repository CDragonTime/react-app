import ajax from './ajax'

// 把axios进行封装的目录，获取数据，就像调用一个方法一个来获取
export const getHomeData = ()=>ajax("http://localhost:3000/data");
export const getCategories = ()=>ajax("http://localhost:3000/categories");
export const getCategoriesdetail = (params)=>ajax("http://localhost:3000/categoriesdetail"+params);













