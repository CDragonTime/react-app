import axios from 'axios'
import {message} from "antd"

export default function ajax(url = '', params = {}, type = 'GET') {
    // 1. 变量,这个变量用来接收请求后的参数，并进行.then和.catch的操作
    // 此函数的返回resolve和reject在合适的地方进行调用
    let promise;
    // 2. 返回一个promise对象，为什么要返回一个自己创建的promise原因就是：直接返回请求的promise
    // 使用async和await接收并进行处理的时候，每一个处理都需要try{}catch（）{}，不能统一的管理
    return new Promise((resolve, reject) => {
        // 2.1 判断请求的类型
        if (type.toUpperCase() === 'GET') { // get请求
            // 2.2 拼接字符串
            let paramsStr = '';
            // 2.3 遍历
            Object.keys(params).forEach(key => {
                paramsStr += key + '=' + params[key] + '&';
            });
            // 2.4 过滤最后的&
            if (paramsStr) {
                paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf('&'))
            }
            // 2.5 拼接完整路径
            url += '?' + paramsStr;
            // 2.6 发起get请求
            promise = axios.get(url);
        } else if (type.toUpperCase() === 'POST') { // post请求
            // 2.7 发起post请求
            promise = axios.post(url, params);
        }
        // 2.8 处理结果并返回
        promise.then((response) => {
             resolve(response.data);
        }).catch(error => {
            // 请求失败不返回，进行统一的处理
            message.error("请求失败，请检查网络或者寻找其他原因....")
            //  reject(error);
        })
    });

}