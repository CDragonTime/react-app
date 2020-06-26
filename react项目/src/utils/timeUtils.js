// 自己封装的方法
export function formatDateTime(date) {
    let timeStr = ''
    console.log(date)
    // let date = new Date();
    // timeStr = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+(date.getDay())+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
    timeStr = date.toLocaleString();
    // timeStr = date.format("yyyy-MM-dd");
    return timeStr
}

// 格式化方法
export function timeFormat(inputTime) {
    var date = new Date(inputTime);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;
};