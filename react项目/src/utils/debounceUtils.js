// 封装一个防抖函数
export function debounce(fn,delay){
    let timeDelay = delay || 500
    let timer = null;
    return function (){
        clearTimeout (timer)
        timer = setTimeout(fn,timeDelay)
    }
}

                                    /**
*防抖函数
*@param fn 事件触发的操作
*@param delay 多少毫秒内连续触发事件，不会执行
*@returns {Function}
*/
// function debounce(fn,delay){
//     let timer = null;
//     return function(){
//         let self = this,
//             args = arguments;
//         timer && clearTimeout(timer);
//         timer = setTimeout(function(){
//             fn.apply(self,args);
//         },delay);
//     }
// }
// window.onscroll = debounce(function(){
//     let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
//     console.log(scrollTop)
// },200)
 