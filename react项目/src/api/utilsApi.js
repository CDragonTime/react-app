import { message } from "antd"
import jsonp from "jsonp"


// 得到百度API的天气
export const getWeather = (data1) => {
    let url = `http://api.map.baidu.com/telematics/v3/weather?location=${data1}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
    return new Promise((resolve, reject) => {
        jsonp(url,{},(error,data)=>{
            if(error){
                message.error("请检查你的网络或者天气接口")
            }else{
                if(data.status === "success"){
                    let {dayPictureUrl,weather} = data.results[0].weather_data[0]
                    resolve({imageUrl:dayPictureUrl,weather})
                }else{
                    message.error("获取天气失败")
                }
            }
        })
    })
}


